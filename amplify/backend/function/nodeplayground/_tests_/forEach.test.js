const { forEach } = require("../src/forEach");

// jest.fn() method yan yung ginagamit kay jest para makagawa ng mock function
const mockCallback = jest.fn(x => 42 + x);

test('forEach mock function', () => {
  forEach([0, 1], mockCallback);

// sa loob ng function na yun may ibat ibang properties na pwedeng gamitin pang test. naka object sya
  console.log('mockCallback', mockCallback);

// isa sa mga property na yun ay si .mock which is sya yung getter and setter. naka object sya and jan nakalagay yung mga information kung paano tinawag si mock function katulad nila calls, contexts, instances, invocationCallOrder, results, tska last call
  console.log('.mock property', mockCallback.mock);

// isa sa mga property sa loob ng .mock ay yung .calls which is an array na may lamang mga array. yung inner array na yun, may argument sya na pinapasa dun sa mock function

  // The mock function was called twice
  // Tinest nya dito kung ang laman ba ng array ni .calls ay dalawa. first call nya ay yung array na may argument na 0 then second call nya ay yung array na may argument na 1
  expect(mockCallback.mock.calls).toHaveLength(2);

  // The first argument of the first call to the function was 0
  expect(mockCallback.mock.calls[0][0]).toBe(0);

  // The first argument of the second call to the function was 1
  expect(mockCallback.mock.calls[1][0]).toBe(1);

  // The return value of the first call to the function was 42
  // 42 yan kasi ang mock function na ginawa ay 42+x eh 0 ang argument na pinasa ng first call. so 0+42
  expect(mockCallback.mock.results[0].value).toBe(42);
});


/* 
ADDITIONAL NOTES FOR .MOCK PROPERTY

.context - array sya na may lamang 'this' values each call sa mock function. so dito sa example yung calls eh hindi naman ginamitan ng 'this' value yung paggawa ng call so undefined sya
.instances - eto pag naman ni create si mock function using 'new' keyword
.lastCall - yung argument dun sa huling call which is yung 1



*/