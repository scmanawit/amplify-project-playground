const { describe, expect, it } = require('@jest/globals');
const axios = require('axios');
const { handler } = require('../src');
const data = require('./data.json');

jest.mock('axios');

describe('Product CRUD operations', () => {
  test('should create a new product', async () => {
    axios.post.mockResolvedValue({ status: 201, data: data.createProductResponse });

    const event = {
      httpMethod: 'POST',
      body: JSON.stringify(data.createProductRequest),
    };

    const response = await handler(event);

    expect(response.statusCode).toBe(201);
    expect(JSON.parse(response.body)).toEqual(data.createProductResponse);
  });

});

// describe('handler', () => {
//   it('returns the correct object', async () => {
//       const json = await handler();
//       expect(json).toEqual({
//         userId: 1,
//         id: 1,
//         title: 'delectus aut autem',
//         completed: false,
//       });
//   });
// });


// describe('handler', () => {
//     it('returns the correct object', () => {
//       expect.assertions(1);
//       return handler().then(json => {
//         expect(json).toEqual({
//           userId: 1,
//           id: 1,
//           title: 'delectus aut autem',
//           completed: false,
//         });
//       });
//     });
//   });

// describe('Addition', () => {
//   const testName = 'addition';
//   const testEvent = require(`./${testName}.json`);

//   it('should compute for sum of two numbers', async () => {
//     const result = await handler(testEvent);
//     console.log('Lambda: ', result);

//     const { num1, num2 } = testEvent.arguments;
//     expect(result).toBe(num1 + num2);
//   });
// });