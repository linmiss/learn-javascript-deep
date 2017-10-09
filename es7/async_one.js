/**
 *  async函数返回一个 Promise 对象。
 */
async function demo() {
    return 'hello world'
}

demo().then(params => console.log(params)) 

/**
 * 正常情况下，await命令后面是一个 Promise 对象。如果不是，会被转成一个立即resolve的 Promise 对象。
 */

async function f() {
    return await 123
}
f().then(v => console.log(v))

/**
 * await命令后面的 Promise 对象如果变为reject状态，则reject的参数会被catch方法的回调函数接收到。
 */
async function f() {
  await Promise.reject('出错了');
}

f()
.then(v => console.log(v))
.catch(e => console.log(e))