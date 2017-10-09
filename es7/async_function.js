// async function sleep(timeout) {  
//   return new Promise((resolve, reject) => {
//     setTimeout(function() {
//       resolve();
//     }, timeout);
//   });
// }

// (async function() {
//   console.log('Do some thing, ' + new Date());
//   await sleep(3000);
//   console.log('Do other things, ' + new Date());
// })();

async function Test() {
  const a = await new Date()
  return a
}
console.log(Test(), 2222) //Promise
Test().then(time => console.log(time,3333))