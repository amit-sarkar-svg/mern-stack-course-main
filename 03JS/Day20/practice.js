// async await
// aysnc function always returns a Promise

// async function greet() {
//     // return "Rohit";

//     // return new Promise((resolve, reject)=>{
//     //     reject("Rohit")
//     // })

// }

// const response = greet();
//  console.log(response);

//  best way to consume promise
// response.then((data)=>console.log((data)))
// .catch((Error)=>{
//     console.log("Error:", Error);
    
// });



/// This is a complex way so i will be simpliflying it next
// fetch("https://api.github.com/users")
// .then((response)=>response.json())
// .then((data)=>console.log(data))


// but ye wala agar bina fetch ke chalaya to error dega becoz if  fetch syncronous task hain
// so javascript usko kre bina hi aaage badh jayega aur next line excute krega jisme response ka use 
// aur response abhi pura execute hi nhi hua toh error throw krega==> //
// const response = fetch("https://api.github.com/users")
// const data = response.json()
// console.log(data);


//  yha await ka matlab hain wait kro jab tak task pura nhi hoga fir next line par jao
// const response = await fetch("https://api.github.com/users")
// const data = await response.json()
// console.log(data);
// console.log("Heelo hi there ab pehle wala task jab tak pura nhi hoga tab tak ye freeaze rahega");
// console.log("ye fix karne ke liye aysnc await dono ka use karo");


// complete aync await use 
async function github() {
    console.log("ye task syncronous hain to pehele ye print hoga");
    const response = await fetch("https://api.github.com/users")
    const data = await response.json()
    console.log(data);
}
github()
console.log("ab code fix ho chukha ab kutch freeze nhi hoga ");
