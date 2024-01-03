// let sum = 0;
// async function compute(number) {
//     for(let i=0;i<number;i++){
//         sum = sum + 1;
//     }
//     return sum;
// }
// compute(1000000000).then((res) =>{
//     console.log(res)
// }).catch(err => console.log(err))

// console.log("Hello from Line 1")


// Promise

/***Creating a promise */
// const myPromise = new Promise((resolve,reject) => {
//     let success =  true;

//     if(success) {
//         resolve("Promise succeeded!")  // resolve with a value
//     }
//     else{
//         reject("Promise failed");  // reject with a value
//     }
// })

// /***consuming a promise */
// myPromise
// .then((res) =>{
    // handles resolve
//     console.log(res);
// })
// .catch((err) => {
    // handles reject
//     console.error(err)
// })

// console.log(typeof myPromise)


/***Realtime promise example */

// function fetchData() {
//     return new Promise((resolve,reject) =>{
//         let success = Math.random() > 0.5;

//         if(success) {
//             setTimeout(()=>{
//                 let obj = {
//                     username:"Dinesh",
//                     password: "123456"
//                 }
//                 resolve(obj)
//             },2000)
//         }
//         else{
//             reject(new Error("Promise Failed"))
//         }
//     })
// }

// fetchData().then((res)=>{
//     console.log("Respond: " ,res)
//     return res;
// }).catch((err) =>{
//     console.error("Error: ",err)
// });


// The fetchData function returns a promise, simulating an asynchronous operation with a 2-second delay.

// The then method is used to handle the resolved value (fetched data).

// The catch method is used to handle any rejected error.

// Promises provide a cleaner and more readable way to structure asynchronous code, especially when dealing with multiple asynchronous operations or chaining promises. This becomes even more apparent in real-world projects with complex asynchronous workflows.



/// Datafetching from api using fetch function
/** fetch function also work on promise but
 * its callbacks are priortise
 */

// const fetchPromise = fetch('https://api.github.com/users/dineshEth');

// fetchPromise
// .then((res)=>{
//     if(!res.ok) {
//         throw new Error(`Https error ${res.status}`);
//     }
//     return res.json();
// })
// .then((res)=>{
//     console.log(res.login)
// })
// .catch(err=>{
//     console.error(err)
// })
