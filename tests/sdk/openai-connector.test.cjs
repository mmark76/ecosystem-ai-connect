const assert = require('node:assert/strict');
const test = require('node:test');

class InMemoryCredentialStore {
  #entries = new Map();

  #key(reference) {
    return `${reference.userId}\u0000${reference.consumerApplicationId}`;
  }

  async set(reference, secret) {
    this.#entries.set(this.#key(reference), secret);
  }

  async get(reference) {
    return this.#entries.get(this.#key(reference));
  }

  async delete(reference) {
    return this.#entries.delete(this.#key(reference));
  }
}

async function loadSdk() {
  return import('../../dist/index.js');
}

test('isolates credentials and sends a stateless text-only Responses request', async () => {
  const { OpenAiConnector } = await loadSdk();
  const credentials = new InMemoryCredentialStore();
  const requests = [];
  const connector = new OpenAiConnector({
    credentialStore: credentials,
    fetch: async (url, init) => {
      requests.push({ url, init });
      return Response.json({
        output: [{ content: [{ text: 'Hello from the model.', type: 'output_text' }] }],
      });
    },
  });

  await connector.connect({
    apiKey: 'project-key-for-alice',
    consumerApplicationId: 'ai-training-lab',
    userId: 'alice',
  });

  const result = await connector.generateText({
    consumerApplicationId: 'ai-training-lab',
    input: 'Say hello.',
    model: 'approved-model',
    userId: 'alice',
  });

  assert.deepEqual(result, { text: 'Hello from the model.' });
  assert.equal(requests.length, 1);
  assert.equal(requests[0].url, 'https://api.openai.com/v1/responses');
  assert.equal(requests[0].init.headers.Authorization, 'Bearer project-key-for-alice');
  assert.deepEqual(JSON.parse(requests[0].init.body), {
    input: 'Say hello.',
    model: 'approved-model',
    store: false,
    stream: false,
  });
});

test('does not reuse a credential across users or consumer applications', async () => {
  const { CredentialNotFoundError, OpenAiConnector } = await loadSdk();
  const connector = new OpenAiConnector({
    credentialStore: new InMemoryCredentialStore(),
    fetch: async () => assert.fail('fetch must not run without a scoped credential'),
  });

  await connector.connect({
    apiKey: 'project-key-for-alice',
    consumerApplicationId: 'ai-training-lab',
    userId: 'alice',
  });

  await assert.rejects(
    connector.generateText({
      consumerApplicationId: 'study-app',
      input: 'Say hello.',
      model: 'approved-model',
      userId: 'alice',
    }),
    CredentialNotFoundError,
  );
});

test('disconnect deletes the local credential and does not attempt remote revocation', async () => {
  const { CredentialNotFoundError, OpenAiConnector } = await loadSdk();
  const connector = new OpenAiConnector({
    credentialStore: new InMemoryCredentialStore(),
    fetch: async () => assert.fail('disconnect must not send a provider request'),
  });
  const reference = { consumerApplicationId: 'ai-training-lab', userId: 'alice' };

  await connector.connect({ apiKey: 'project-key-for-alice', ...reference });
  assert.equal(await connector.disconnect(reference), true);
  assert.equal(await connector.disconnect(reference), false);
  await assert.rejects(
    connector.generateText({ input: 'Say hello.', model: 'approved-model', ...reference }),
    CredentialNotFoundError,
  );
});

test('does not expose provider error bodies, prompts, or credentials in errors', async () => {
  const { OpenAiConnector, OpenAiRequestError } = await loadSdk();
  const secret = 'project-key-for-alice';
  const prompt = 'private prompt text';
  const connector = new OpenAiConnector({
    credentialStore: new InMemoryCredentialStore(),
    fetch: async () => new Response(JSON.stringify({ error: { message: `${secret} ${prompt}` } }), { status: 401 }),
  });
  const reference = { consumerApplicationId: 'ai-training-lab', userId: 'alice' };

  await connector.connect({ apiKey: secret, ...reference });
  await assert.rejects(
    connector.generateText({ input: prompt, model: 'approved-model', ...reference }),
    (error) => {
      assert.ok(error instanceof OpenAiRequestError);
      assert.equal(error.status, 401);
      assert.equal(error.message.includes(secret), false);
      assert.equal(error.message.includes(prompt), false);
      return true;
    },
  );
});
