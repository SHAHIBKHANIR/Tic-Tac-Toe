// let number = prompt('Enter a Number that is divisible by 5');

// sum = number % 5; // divisible by 5

// if (sum == 0) {
//     console.log('Number is divisible by 5');
// } else {
//     console.log('Number is not divisible by 5');
// }

// let scrore = prompt('Enter your score');;
// let grade;

// if (scrore >= 80 ){
//     grade = 'A';
//     console.log('Grade A');
// } else if (scrore <= 79 && scrore >= 70) {
//     grade = 'B';
//     console.log('Grade B');
// } else if (scrore < 69 && scrore >= 60) {
//     grade = 'C';
//     console.log('Grade C');
// } else if (scrore < 59 && scrore >= 50) {
//     grade = 'D';
//     console.log('Grade D');
// } else {
//     grade = 'F';
//     console.log('Grade F');
// } 
//  console.log('according to your score the Grade is ' + grade);

// for (let i = 1; i<= 5; i++){
//     console.log('Number is ' + i);
// }

// let sum = 0;
// let n = prompt('Enter a Number');
// for (let i = 1; i<= n; i++){
//     sum += i;
//     console.log('i is ' + i);
//     console.log('sum is ' + sum);
// }
// console.log('Number is ' + sum);


// for (let i = 10; i <= 5; i++){
//     console.log('Number is ' + i);
// }

// let i = 1;
// while(i<=5){
//     console.log('Number is ' + i);
//     i++;
// }


// let i = 6;
// do {
//    console.log('Number is ' + i);
//    i++;
// } while (i <= 5);


// for of loop

// let str = "ShahibKhanIR";
// let size = str.length;
// for (let char of str){
//     console.log(char);
// }
// console.log('size of string is ' + size);


// for-in loop

// let myDetail = {
//     name: "Shahib",
//     age: 25,
//     city: "Mumbai",
//     country: "India"
// }
// for (let key in myDetail){
//     console.log('Key ' + key + ' : ' + 'Value ' + myDetail[key]);
// }

// print 0 to 100  numbers using for loop
// only even numbers

// for (let i = 0; i <= 100; i++){
//     // console.log('Number is ' + i); // all number
//     if( i%2 === 0){
//         console.log('Number is even ' + i); // only even number
//     } else {
//         // console.log('Number is odd ' + i); // odd number only
//     }
// }

// ask user to enter the number until it matchs the gamenumber

// let gameNumber = 10;
// let userNumber = prompt('Enter a your number');

// while (userNumber != gameNumber){
//     userNumber = prompt('Enter a your number again!');
// }
// console.log('You won the game');

// // uppercase to lowercase
// let str = "Shahib Khan IR";
// let lowerCase = str.toLowerCase();
// console.log(str);
// console.log('to lower case' , lowerCase);

// // lowercase to uppercase
// let str1 = "Shahib Khan Ir";
// let upperCase = str1.toUpperCase();
// console.log(str1);
// console.log('to upper case' , upperCase);

// // trim
// let str2 = "   Shahib Khan IR    ";
// let trim = str2.trim();
// console.log('original' ,str2);
// console.log('trim ' , trim);

// slice

// let str = "0123456789";
// let slice = str.slice(2, 5);
// let slice1 = str.slice(2);
// let slice2 = str.slice();
// console.log(str);
// console.log('slice ' , slice);
// console.log('slice1 ' , slice1);
// console.log('slice2 ' , slice2);

// // str concart

// let str1 = "Shahib";
// let str2 = "Khan";
// let str3 = str1 + str2;
// let str4 = str1.concat(str2);
// let str5 = ('My name is ' + str1 + str2);
// console.log(str3);
// console.log(str4);
// console.log(str5);


// //str.replace
// let str = "Shahib Khan IR";
// let replace = str.replace('Khan', 'King');
// console.log(str);
// console.log('replace ' , replace);

// // str.chartAt  to serach the character of the string/index
// let str = "Shahib Khan IR";
// let charAt = str.charAt(5);
// console.log(str);
// console.log('char at ' , charAt);


// Practice Questions
// let name = prompt('Enter your name');
// console.log(name);
// let username = "@" +  name + name.length;
// let username1 = name.slice(0, 4) + "@" + name.length;
// let username2 = name.slice(0, 4).toLowerCase() + "@" + name.length;
// console.log(username1);
// console.log(username2);
// console.log(username);

//Array

// let marks = [97,93,82,80,79];
// console.log(marks);
// console.log(marks.length);

// let heros = ["Iron Man","Shah Rukh Khan ", "Captain America", "Thor", "Dr Strange", "Hulk", "Black Widow", "Spiderman", "Black Panther", "Ant Man", "Hawkeye" , "Scarlet Witch", "Winter Soldier", "Captain Marvel"];
// console.log(heros);
// console.log(heros.length);

// for (let idx = 0; idx < heros.length; idx++){
//     console.log(heros[idx]);
// }

// for (let hero of heros){
//     console.log(hero);
// }

// let marks = [85,97,44,37,76,60];
// let sum = 0;
// for (let mark of marks){
//     sum += mark;
// }
// let avg = sum / marks.length;
// console.log(avg);



// creating arr after 10% offer
// let items = [250,645,300,900,50];

// let i =0;
// for (let val of items){
//     // console.log(val);
//     console.log(`Index is ${i} = ${val}`);
//     let offer = val / 10;
//     items[i] = val - offer;
//     console.log(`Value after offer Index is ${i} = ${items[i]}`);
//     i++;
// }

// for (let i= 0; i < items.length; i++){
//     let offer = items[i] / 10;
//     items[i] -= offer;
//     console.log(`Value after offer Index is ${i} = ${items[i]}`);
// }

// Array Methods

// function countVowels(str){
//     // "Apna college"
//     let count = 0;
//     for (let char of str){
//         if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u'){
//             count++;
//         }
//     }
//     console.log(count);
// }

// const countVow = (str) => {
//     let count = 0;
//     for (let char of str){
//         if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u'){
//             count++;
//         }
//     }
//     console.log(count);
// }


// for Each

// let nums = [1,2,3,4,5,6,7,8,9,10];

// let calcSquare = (num) => {
//     console.log(num * num);
// };


// nums.forEach((num) => {
//     console.log(num * num);
// })

// nums.forEach(calcSquare);

// map Array

// let nums = [1,2,3,4,5,6,7,8,9,10];

// let newArr = nums.map((val) => {
//     // console.log(val);
//     return val * val;
// })

// console.log(newArr);

// let calcSquare = (num) => {
//     console.log(num * num);
// };


// Fliter Array

// let nums = [1,2,3,4,5,6,7,8,9,10];

// let newArr = nums.filter((val) => {
//     // return val % 2 === 0;
//     // return val % 2 !== 0;
//     return val > 3;
// });

// console.log(newArr);

// Reduce Array

// let arr = [1,2,3,4];

// const output = arr.reduce((res, curr) => {
//     return res + curr;
// });

// console.log(output);

// reduce method to return largest number

// let arr = [5,6,7,8,1];

// const output = arr.reduce((prev, curr) => {
//     return prev > curr ? prev : curr;
// });

// console.log(output);


// let n = prompt('Enter a Number');

// let arr = [];
// for (let i = 1; i <= n; i++){
//     arr[i-1] = i;
// }

// console.log(arr);

// create a button using js

// let newBtn = document.createElement('button');
// newBtn.innerHTML = 'Mode';
// document.body.prepend(newBtn);

//     newBtn.style.color = 'white';
//     newBtn.style.backgroundColor = 'black';
//     newBtn.style.padding = '5px 10px';
//     newBtn.style.border = 'none';
//     newBtn.style.borderRadius = '5px';
//     newBtn.style.cursor = 'pointer';


// newBtn.addEventListener('click', () => {
//     const currentBg = document.body.style.backgroundColor;

//     // Apply common button styles
//     newBtn.style.padding = '5px 10px';
//     newBtn.style.border = '';
//     newBtn.style.borderRadius = '5px';
//     newBtn.style.cursor = 'pointer';

//     if (currentBg === 'black') {
//         document.body.style.backgroundColor = 'white';
//         newBtn.innerHTML = 'Switch to Dark Mode';
//         newBtn.style.border = '1px solid black';
//         newBtn.style.backgroundColor = 'white';
//         newBtn.style.color = 'black';
//     } else {
//         document.body.style.backgroundColor = 'black';
//         newBtn.innerHTML = 'Switch to Light Mode';
//         newBtn.style.border = '1px solid white';
//         newBtn.style.backgroundColor = 'black';
//         newBtn.style.color = 'white';
//     }
// });

// Classes and Objects

// class person {
//     constructor(name) {
//         this.name = name;
//         this.species = "non sapiens";
//     }

//     eat() {
//         console.log("eat");
//     }
// }

// class Engineer extends person {
//     constructor(name) {
//         super(name); // to invoke parent class constructor
//     }
//     work() {
//         super.eat ();
//         console.log("solve problems, build something");
//     }
// }

// let engObj = new Engineer("Shahib");

// q1 

// let DATA = "Sercret Information";

// class User {
//     constructor(name, email) {
//         this.name = name;
//         this.email = email;
//     }

//     viewData(){
//         console.log("data = " , DATA);
//     }
// }

// class Admin extends User{
//     constructor(name, email) {
//         super(name, email);
//     }
//     editData(){
//         DATA = "some new Value";
//     }
// }

// let student1 = new User("Shahib" , "shahib@example.com");
// let student2 = new User("Khan" , "khan@example.com");

// let admin1 = new Admin("Admin" , "admin@example.com");


// // error handling we use try catch block to handle the error
// try {
//     console.log("try");
// } catch (error) {
//     console.log("catch");
// }


// async and sync 

// function hello (){
//     console.log("hello");
// }

// setTimeout(hello, 3000);

// console.log("One");
// console.log("Two");

// setTimeout (() => {
//     console.log("hello");
// }, 3000);

// console.log("Three");

// function getData(dataId){
//     setTimeout(() => {
//         console.log("data = " , dataId);
//     }, 3000);
// }


// // callback hell 
// function getData(dataId, getNextData){
//     setTimeout(() => {
//         console.log("data = " , dataId);
//         if (getNextData) {
//             getNextData();
//         }
//     }, 3000);
// }

// getData(1 , () => {
//     getData(2, () => {
//         getData(3, () => {
//             getData(4);
//         });
//     });
// });

// Promises

// let promise = new Promise((resolve, reject) => {
//     console.log("Iam a promise");
//     // resolve("success");
//     reject("some error occured");
// });

// function getData(dataId, getNextData){
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // console.log("data = " , dataId);
//         // resolve("success");
//          reject("some error occured");
//         if (getNextData) {
//             resolve(getNextData());
//         }
//     }, 10000);
//   });
// }

// Promise.then((res) => {
//     console.log(res);
// })

// Promise.catch((err) => {
//     console.log(err);
// })

// const getPromise = () => {
//  return new Promise((resolve, reject) => {
//         console.log("Iam a promise");
//         // resolve("success");
//         reject("some error occured");
//     });
// }

// let promise = getPromise();
// promise.then((res) => {
//     console.log("promise resolved", res);
// });
// promise.catch((err) => {
//     console.log("promise rejected", err);
// });

// Asyncronous function 
// Promise chain

// function asyncFunc1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(" data1");
//             resolve("success data1");
//             // reject("some error occured");
//         }, 5000);
//     });
// }

// function asyncFunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(" data2");
//             resolve("success data2");
//             // reject("some error occured");
//         }, 5000);
//     });
// }

// console.log("Fetching data1....");
// let p1 = asyncFunc1();
// p1.then((res) => {
//     console.log(res);
//     console.log("Fetching data2....");
//     let p2 = asyncFunc2();
//     p2.then((res) => {
//         console.log(res);
//     });
// });

// // another way to write same same but different way
// console.log("Fetching data1....");
// asyncFunc1().then((res) => {
//     console.log("Fetching data2....");
//     asyncFunc2().then((res) => {});
// });


// same as callback hell using promise chain
// function getData(dataId, getNextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data = ", dataId);
//             resolve("success");
//         }, 3000);
//     });
// }

// getData(1).then((res) => {
//     console.log(res);
//     getData(2).then(() =>{
//         console.log(res);
//     });
// });


// another way to write same same but different way
// promoise channing
// getData(1)
//    .then((res) => {
//     return getData(2);
//    })
//    .then((res) => {
//     return getData(3);
//     console.log(res);
//    }).then((res) => {
//     console.log(res);
//    })


// callback hell for comapring
// getData(1 , () => {
// console.log("fetching data 2");
//     getData(2, () => {
//         console.log("fetching data 3");
//         getData(3, () => {
//             console.log("fetching data 4");
//             getData(4);
//         });
//     });
// });

// async and await


// function api(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Weather data ");
//             resolve(200);
//         }, 3000);
//     });
// }

// async function getWeatherData() {
//     await api();
//     await api();
// }


// function getData(dataId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data = ", dataId);
//             resolve("success");
//         }, 3000);
//     });
// }

// async function getAllData() {
//     console.log("fetching data 1");
//     await getData(1);
//     console.log("fetching data 2");
//     await getData(2);
//     console.log("fetching data 3");
//     await getData(3);
//     console.log("fetching data 4");
//     await getData(4);
//     console.log("fetching data 5");
//     await getData(5);
//     console.log("fetching data 6");
//     await getData(6);
// }



// callback hell for comapring
// getData(1 , () => {
// console.log("fetching data 2");
//     getData(2, () => {
//         console.log("fetching data 3");
//         getData(3, () => {
//             console.log("fetching data 4");
//             getData(4);
//         });
//     });
// });

// promoise channing
// getData(1)
//    .then((res) => {
//     return getData(2);
//    })
//    .then((res) => {
//     return getData(3);
//     console.log(res);
//    }).then((res) => {
//     console.log(res);
//    })


// async/await
// async function getAllData() {
//     console.log("fetching data 1");
//     await getData(1);
//     console.log("fetching data 2");
//     await getData(2);
//     console.log("fetching data 3");
//     await getData(3);
//     console.log("fetching data 4");
//     await getData(4);
//     console.log("fetching data 5");
//     await getData(5);
//     console.log("fetching data 6");
//     await getData(6);
// }

// IIFE its advantage is that it is called automatically
// disadvantage is that it cannot be called only once , cannot be called again
// (async function () {
//     console.log("fetching data 1");
//     await getData(1);
//     console.log("fetching data 2");
//     await getData(2);
//     console.log("fetching data 3");
//     await getData(3);
//     console.log("fetching data 4");
//     await getData(4);
//     console.log("fetching data 5");
//     await getData(5);
//     console.log("fetching data 6");
//     await getData(6);
// })();


// Fetch API

// const URL = "https://cat-fact.herokuapp.com/facts";

// let promise = fetch(URL);
// // console.log(promise);

// const getFacts = async () =>{
//     let promise = await fetch(URL);
//     console.log(promise);
//     let data = await response.json();
//     console.log(data);
// }

// fetch(URL)
//     .then((res) => {
//         return res.json();
//     })
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     })