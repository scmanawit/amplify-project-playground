const { describe, expect, it } = require('@jest/globals');
const { handler } = require("../src");
const { createRequest } = require("./data.json");

describe('CRUD test', () => {
  it('should create', async () => {
    const response = await handler({
      httpMethod: 'create',
      body: createRequest
    })
    expect(response.status).toBe(201);
    expect(response.data.title).toEqual(createRequest.title)
  })

  it('should read', async () => {
    const response = await handler({
      httpMethod: 'read',
      body: {
        id: 1
      }
    })
    expect(response.status).toBe(200);
    expect(response.data.id).toBe(1);
  });

  it('should update', async () => {
    const response = await handler({
      httpMethod: 'update',
      body: {
        ...createRequest,
        id: 1
      }
    })

    expect(response.status).toBe(200);

  });

  it('should delete', async () => {
    const response = await handler({
      httpMethod: 'delete',
      body: {
        id: 1
      }
    })

    expect(response).toBe(true);

  });

})

