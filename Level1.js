// Javascript (Basic Level 1)

//  Q1. Average  of Array Nums -->
// const nums = [10,20,30,40,50];
// const sum = nums.reduce((accumulator,current) => accumulator + current ,0);
// const average = sum / nums.length;
// console.log("Average:" , average);


// // Q2. Swap two numbers

// function swap(obj){
//     let temp = obj.a;
//     obj.a = obj.b;
//     obj.b = temp;
// }
// let numbers = {a:10 , b:20};
// console.log("Before swapping:" , numbers);
// swap(numbers);
// console.log("After Swapping:" , numbers);

// Q3. Print the fibonacci sequence

// const prompt = require('prompt-sync')();
// let n = parseInt(prompt("Enter the number:"));
// let a = 0 , b = 1;
// console.log("Fibonacci sequence:");
// for(let i=0; i<n ; i++){
//     console.log(a);
//     let next = a+b;
//     a = b;
//     b = next;
// }

// Q4. Sort Array both Ascending and Descending Order

// const prompt = require('prompt-sync')();
// let input = prompt("Enter the numbers:");
// let nums = input.split(' ').map(Number);
// let ascending = [...nums].sort((a,b)=>a-b);
// let descending = [...nums].sort((a,b)=>b-a);

// console.log("Original Array is:" , nums);
// console.log("Ascending Order is:" , ascending);
// console.log("Descending Order is:" , descending);

