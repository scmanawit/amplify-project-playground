function sleep(t) {
    return new Promise(resolve => setTimeout(resolve, t));
  }
  
  async function promiseFunction() {
    console.log('start');
    for (let index = 10; index >= 0; index--) {
      await sleep(1000);
      console.log('countdown :' + index);
    }
    console.log('done');
  }
  
  module.exports = { promiseFunction };