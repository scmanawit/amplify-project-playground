const {it} = require('@jest/globals')

// mockReturnValue icoconfigure nya yung original function na magreturn nlng ng specific value instead of ieexecute pa

it('returnvalue', () => {
const myMock = jest.fn();
console.log('my MOck', myMock());
 
myMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true);

console.log('myMock with return', myMock(), myMock(), myMock(), myMock());
})

it('filter returnvalue', () => {
    const filterTestFn = jest.fn();

// Make the mock return `true` for the first call,
// and `false` for the second call
filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);

const result = [11, 12].filter(num => filterTestFn(num));

// 11 ang result kasi using filter method na irereturn lang yung truthy value. and 11 ang argument na may return natrue from callback function
console.log(result);
// > [11]
console.log(filterTestFn.mock.calls[0][0]); // 11
console.log(filterTestFn.mock.calls[1][0]); // 12
})

