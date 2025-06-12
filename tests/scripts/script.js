const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

// console.log("WDD 131: For loop")
// for (let i = 0; i < studentReport.length; i++) {    
//     if (studentReport[i] < LIMIT) {
//         console.log(studentReport[i])
//     }
// }
// console.log("-----------------------")

// console.log("WDD 131: While loop")
// let i = 0;
// while (i < studentReport.length) {
//     if (studentReport[i] < LIMIT) {
//         console.log(studentReport[i])
//     }
//     i++;
// }
// console.log("-----------------------")

// console.log("WDD 131: forEach loop")
// my try with Grok help
// studentReport.forEach(age => {
//     if (age < LIMIT) {
//         console.log(age);
//     }
// });

//from Example Answers
// studentReport.forEach(function (item) {
//     if (item < LIMIT) {
//         console.log(item);
//     }
// });
// console.log("-----------------------")

// console.log("WDD 131: for...in loop")
// for (let i in studentReport) {
//     if (studentReport[i] < LIMIT) {
//         console.log(studentReport[i]);
//     }
// }
// console.log("-----------------------")

// console.log("WDD 131: Next 6 days")
// const n = 6; // number of days forward
// get output location on document to append within list
// const output = document.getElementsByTagName("ul");
// Intl.DateTimeFormat Options
// const options = { weekday: 'long' }; // vs. short, etc.

// BEGIN
// const today = new Date();
// TODAY test output
// let todaystring = new Intl.DateTimeFormat('en-US', options).format(today);
// document.getElementById('today').innerHTML = `Today is ${todaystring}. `;

// next n days
// for (let i = 1; i <= DAYS; i++) {
//     let nextday = new Date();
//     nextday.setDate(today.getDate() + i);
//     let nextdaystring = new Intl.DateTimeFormat('en-US', options).format(nextday);
//     item = document.createElement("li"); // list item
//     item.textContent = nextdaystring;
//     console.log(item.textContent); //my idea to see it on console
//     output[0].appendChild(item);
// }





// console.log("-----------------------")
// grok example 1 - For loop
// let temps = [18, 25, 15, 22];
// for (let i = 0; i < temps.length; i++) {
//     if (temps[i] < 20) {
//         console.log(temps[i])
//     }
// }
// Output: 18, 15

// grok example 2 - While loop
// console.log("Groks example 2");
// let scores = [45, 60, 30, 75];
// let i = 0;
// while (i < scores.length) {
//     if (scores[i] < 50) {
//         console.log(scores[i]);
//     }
//     i++;
// }

//grok example 4 - forEach
// let ages = [16, 20, 15, 25];
// ages.forEach(age => {
//     if (age < 18) {
//         console.log(age);
//     }
// })
// Output: 16, 15

//grok example 5 - for...in Loop
// let prices = [5, 12, 8, 15];
// for (let i in prices) {
//     if (prices[i] < 10) {
//         console.log(prices[i]);
//     }
// }
// Output: 5, 8


// some test
