const promise1= new Promise(resolve=>resolve('burger'));
const promise2= new Promise((_,reject)=>reject('apple'));
const promise3= new Promise(resolve=>resolve('pizza'));
Promise.allSettled([promise1,promise2,promise3]).then(response=>console.log(response));