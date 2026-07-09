"use strict"

const arr = [10,17,26,37]

const students = [
{
    name: "Rafik",
    surname: "Figov",
    email: "fig@mail.ru",
    age: 25
},
{
    name: "Aysel",
    surname: "Quliyeva",
    email: "ays@gmail.com",
    age: 22
},
{
    name: "Murad",
    surname: "Hesenov",
    email: "mur@gmail.com",
    age: 19
}
];



// function oddNumbers(n,m){
//     let result = [];
//     for (let i = n; i<=m ; i++){
//         if(i%2 !== 1){
//             result.push(i)
//         }

//     }
//            return result;
// }
// console.log(oddNumbers(2,7))

// const oddNumbers = (n,m) => {
//     let result = [];
//     for(let i = n; i <= m; i++){
//         if(i % 2 !== 0){
//             result.push(i)
//         }
//     }
//      return result;
// };

// console.log(oddNumbers(2,7));




// function getSum(arr){
//     let sum = 0;
//     for(let item of arr){
//         sum += item
//     }
//      return sum;
// }

// console.log(getSum(arr));

// const getSum = () => {
//     let sum = 0;
//     for(let item of arr) {
//         sum += item;
//     }
//     return sum;
// };
// console.log(getSum(arr));




// function countEven(arr){
//     let count = 0;
//     for(let item of arr){
//         if(item % 2 === 0){
//             count++;
//         }
        
//     }
//     return count;
// }

// console.log(countEven(arr));

// const countEven = () =>{
//     let count = 0;
//     for(let item of arr) {
//         if(item % 2 === 0){
//             count++;
//         }
//     }
//     return count;
// };


// console.log(countEven(arr));




// function findFac(n) {
//     let result = 1;
//     for (let i = 1; i <= n; i++) {
//         result *= i;
//     }
//     return result;
// }
// console.log(findFac(7));

// const findFac = (n) => {
//     let result = 1;
//     for (let i = 1; i <= n; i++) {
//         result *= i;
//     }
//     return result;
// };

// console.log(findFac(7));



// function isPrime(n) {
//     if (n <= 1) return false;

//     for (let i = 2; i < n; i++) {
//         if (n % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(isPrime(8));


// const isPrime = (n) => {
//     if (n <= 1) return false;

//     for (let i = 2; i < n; i++) {
//         if (n % i === 0) {
//             return false;
//         }
//     }
//     return true;
// };

// console.log(isPrime(8));



// function countSpecial(arr) {
//     let count = 0;
//     for (let item of arr) {
//         if (item % 6 > 4) {
//             count++;
//         }
//     }
//     return count;
// }

// console.log(countSpecial(arr));

// const countSpecial = (arr) => {
//     let count = 0;
//     for (let item of arr) {
//         if (item % 6 > 4) {
//             count++;
//         }
//     }
//     return count;
// };

// console.log(countSpecial(arr));



// function sumAges(students) {
//     let sum = 0;
//     for (let s of students) {
//         sum += s.age;
//     }
//     return sum;
// }

// console.log(sumAges(students));


// const sumAges = (students) => {
//     let sum = 0;
//     for (let s of students) {
//         sum += s.age;
//     }
//     return sum;
// };

// console.log(sumAges(students));


// function avgAges(students) {
//     let sum = 0;
//     for (let s of students) {
//         sum += s.age;
//     }
//     return sum / students.length;
// }

// console.log(avgAges(students));



// const avgAges = (students) => {
//     let sum = 0;
//     for (let s of students) {
//         sum += s.age;
//     }
//     return sum / students.length;
// };

// console.log(avgAges(students));




// function multiplyCountAndSum(students) {
//     let sum = 0;
//     for (let s of students) {
//         sum += s.age;
//     }
//     return students.length * sum;
// }

// console.log(multiplyCountAndSum(students));



// const multiplyCountAndSum = (students) => {
//     let sum = 0;
//     for (let s of students) {
//         sum += s.age;
//     }
//     return students.length * sum;
// };

// console.log(multiplyCountAndSum(students));


