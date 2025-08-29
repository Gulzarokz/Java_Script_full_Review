console.log("Array of javascript");

// Topics no 1 Array
// let arr = [];
// console.log(typeof arr); objects

// constructor of an arry
// let fruit = new Array("apple", "banana" ,"Mango");
// console.log(fruit);

// // literal
// let fruit =["apple", "banana","Gavava"];
// console.log(fruit);

// empty array
// let arr = [];
// console.log(arr);

// accessing array elements
// let fruit =["apple", "banana","Gavava"];
// console.log("The name of the fruit ", fruit[0]);

// Modifying an array

// let fruit = ["apple", "banana","Gavava"]
// fruit[3] = "mango";
// console.log(fruit);

// travel an array
// let fruits = ["apple", "banana", "Gavava"];
// // using for of loops
// for (let item of fruits) {
//   console.log(`The fruits names are listed ${item}`);
// }

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// for in loops

// for(let item in fruits){ in is used for index number
//     console.log(item);

// }

// Array methods

// let myForEachArr = fruits = ["apple", "banana", "Gavava"];
// fruits.forEach((curElem, index, arr) => {
//   return  `${index} ${curElem} `;
//   // console.log(arr);
// });
// console.log(myForEachArr);

// map methods
// let myMaparr =  fruits = ["apple", "banana", "Gavava"];
// fruits.map((curElem, index, arr) => {
//    return `${curElem} ${index}`;
//   console.log(arr);
// });
//  console.log(myMaparr);

// let myFavNum =  number = [1, 2, 3, 4, 5];

// number.forEach((curNum) => {
//   return curNum *2;
// });
// console.log(myFavNum);

// let myFavNum =  number = [1, 2, 3, 4, 5];
// number.map((currNum)=>{
//     return currNum * 2;
// });
// console.log(myFavNum);

// push() methods in an array the push() methods return new lengths

// let fruits = ["apple", "banana", "Gavava"];
// fruits.push("Grapes");
// console.log(fruits);

// pop() methods
// let fruits = ["apple", "banana", "Gavava"];
// console.log("The pop elements ", fruits.pop());
// console.log(fruits);

// unshift() methods add elements at the beganing of an array
//  let fruits = ["apple", "banana", "Gavava"];
//  fruits.unshift("peach")
//  console.log(fruits);

// shift() methods remove elements at the beganing of an array

//  let fruits = ["apple", "banana", "Gavava"];
//  console.log(fruits.shift());
//  console.log(fruits);

// splice methods any where you want to add and remove elements in an array

//  let fruits = ["apple", "banana", "Gavava"];
//  console.log(fruits.splice(1, 1, "grapes", "pear"));
//  console.log(fruits);

// search methods in an array
// // indexof() method
// let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(number.indexOf(3
//     , 5));
// console.log(number);

//include() methods => return boolean value true of false
// let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let results = number.includes(6);
// console.log(results);

// filter methods

// let number = [1, 2, 3, 6,  4, 5, 6, 7, 8, 9,]
// let results = number.find((curVal)=>{
//     return curVal > 6;
// })
// console.log(results);

// let number = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
// let result = number.map((currEle)=>{
//     return currEle * 2;
// })
// console.log(result);

// let results = result.findIndex((currEle)=>{
//     return currEle > 5;
// })
// console.log(results);

// let value = 9;
// let number = [1, 2,9, 3, 4, 5, 6, 7, 6, 8, 9]

// let result = number.filter((currEle)=>{
//     return currEle !== value;
// })
// console.log(result);

// Filter() methods

// let productPrice = [
//   { name: "loptop", price: 1200 },
//   { name: "phone", price: 800 },
//   { name: "tablet", price: 300 },
//   { name: "smartwitch", price: 150 },
// ];

// let filterProducts = productPrice.filter((curElem) => {
//   return curElem.price <= 900;
// });
// // console.log(product);
// console.log(filterProducts);

// const number = [1, 2, 9, 10, 4, 5, 6, 7];
// //  number.sort();
// // console.log(number);

// const sortNumber = number.sort((a, b)=>{
//     if(a > b){
//         return -1;
//     }
//     if(b>a){
//         return 1;
//     }
// })
// console.log(sortNumber);

// let number = [1, 2, 3, 4, 5];
// let squaredNumber = number.map((currEle)=>{
//     return currEle * currEle;
// })
// console.log(squaredNumber);

// let word = ["Apple", "Banana", "pear"];
// let toUperCase = word.map((currEle)=>{
//     // return currEle.toUpperCase();
//     return currEle.toLowerCase();
// })

// console.log(toUperCase);

// Used reduce method();

let productPrice = [100, 200, 300, 400, 500];
let totalPrice = productPrice.reduce((acc, curEle)=>{
    return acc + curEle;
})
console.log(totalPrice);


