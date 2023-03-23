const { promiseFunction } = require('./promise');
const { crudFunction } = require('./crud');

exports.handler = function mainHandler(event) {
  console.log(`EVENT : ${event.type}`);
  switch (event.type) {
    case 'Promise':
      return promiseFunction(event.arguments);
    case 'CRUD':
      return crudFunction(event.arguments);
  }
};