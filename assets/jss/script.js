"use strict"

const arr = [10,15,25,35]

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
// }

// console.log(oddNumbers(2,7));

function sumArr(arr){
    let sum = 0;
    for(let item of arr){
        sum += item
    }
     return sum;
}

console.log(sumArr(arr));


