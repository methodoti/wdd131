
console.log("W05 Learning Activity: JavaScript Callback Functions");


// examples from Dev Genius
// https://blog.devgenius.io/array-callback-methods-arrow-functions-9ecbd728f63

// const nums = [1, 2, 3, 4, 5];

console.log(" ");

// 1. forEach()
console.log("1. forEach()");
// console.log(nums);

// // const nums = [1, 2, 3, 4, 5];
// nums.forEach(function (num) {
//     console.log(num);
// });

console.log("Example | Iterate an array of numbers");

const nums = [1, 2, 3, 4, 5];
nums.forEach(function(num) {
    console.log(num);
});

// console.log(" ");

console.log("Example-2: Iterate an object")

const employees = [
    {
        id: 101,
        name: 'Alex',
        sal: 10000
    },
    {
        id: 102,
        name: 'Clark',
        sal: 13000
    },
    {
        id: 103,
        name: 'John',
        sal: 12000
    },
    {
        id: 104,
        name: 'Tony',
        sal: 20000
    }
]

employees.forEach(function (emp) {
    console.log(emp.name.toUpperCase());
});
// Output:
// ALEX
// CLARK
// JOHN
// TONY


console.log(" ");

// 2. map()
console.log("2. map()");

console.log("Example — 1| Square the each element of array and store result into another array")

// nums já foi declarada acima
// const nums = [1, 2, 3, 4, 5] 
const squareNums = nums.map(function (num) {
    return num * num;
});
console.log(squareNums);
// Output:
// [1, 4, 9, 16, 25]

// console.log(" ");

console.log("Example — 2 | Create an array of all employee names by fetching employee names from a given object.")
// employees já foi declarada acima
// const employees = [
//     {
//         id: 101,
//         name: 'Alex',
//         sal: 10000
//     },
//     {
//         id: 102,
//         name: 'Clark',
//         sal: 13000
//     },
//     {
//         id: 103,
//         name: 'John',
//         sal: 12000
//     },
//     {
//         id: 104,
//         name: 'Tony',
//         sal: 20000
//     }
// ];

const names = employees.map(function (emp) {
    return emp.name;
});
console.log(names);

// console.log(" ");

console.log("Example — 3 | Make abbreviations");

const words = ['lol', 'brb', 'btw', 'lmk', 'g2g'];
const abbreviations = words.map(function (word) {
    return word.toUpperCase().split('').join('.');
});
console.log(abbreviations);
// output
// ['L.O.L', 'B.R.B', 'B.T.W', 'L.M.K', 'G.2.G']

console.log("");
console.log("Arrow Functions");

// simple function expression
const square = function (num) {
    return num * num;
}
// convert the above function into arrow function
// Arrow function
const square2 = (num) => {
    return num * num;
}
// Without parenthesis
const square3 = num => {
    return num * num;
}
// Implicit Return - one liner
const squar4 = num => num * num;

// Let's review some to the examples discussed above with arrow function.

// Example 1:
// const nums = [1, 2, 3, 4, 5];
nums.forEach(num => console.log(num * num));
// Example 2:
// const nums = [1, 2, 3, 4, 5];
const squareNums2 = nums.map(num => num * num);
console.log(squareNums2);
// output
// [1, 4, 9, 16, 25, 36]
// Example 3:
const nums2 = [11, 2, 3, 5, 4, 7, 8, 10];
const parityList = nums2.map(num => (num % 2 === 0 ? 0 : 1));
console.log(parityList);
// Output
// [1, 0, 1, 1, 0, 1, 0, 0]

console.log("");

// 3. find()
// console.log("3. find()");

// console.log("Example — 1: Find the name");


