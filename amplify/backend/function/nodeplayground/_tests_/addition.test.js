const { describe, expect, it } = require('@jest/globals');
const { handler } = require('../src');

describe('handler', () => {
  it('returns the correct todo object', async () => {
      const json = await handler();
      expect(json).toEqual({
        userId: 1,
        id: 1,
        title: 'delectus aut autem',
        completed: false,
      });
  });
});


// describe('handler', () => {
//     it('returns the correct todo object', () => {
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