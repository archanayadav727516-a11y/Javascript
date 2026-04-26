// map ->ccall back function


// let arr=[1,2,3,4,5,];
// let result = arr.map(num=> {
//     console.log(num);
//     return num+10;
// });
// console.log(result);
// console.log(arr);


// filter
// const arr= [1,2,3,4,5,6,7,8,9,10];
// const resut = arr.filter(num => num%2==0);
// console.log(resut);
// console.log(arr);


// reduce
// array ke sare value ko mila kr final value niklna cha chA rho  hai
// sare array ka sum nikl saku

// const arr=[1,2,3,4,5,6,7,8,9,10];
// const result = arr.reduce((acc,num)=> acc+num,1);
//     console.log(result);
//     console.log(num);
// s


// finding the first matching element
// const arr =[2,5,11,15,,26,89,11];
// console.log(arr.some(num => num>= 25));

// Array muanipulation
// let result = [1,2,3,4,5].concat([1,2,3,7,]);
// console.log(result);

// let arr1 = [1,2,3,4,5];
// let arr2 = [1,2,3,70]
// let result = arr1.concat(arr2);
// console.log(result);
// console.log(arr1);
// console.log(arr2);


// Splicing and silcing  transform array in place and return the deleted 
// splice method se deleted and insart dono kr sakte hai 
// splicing { index , deletcount, element1,element2,...}

// let arr =[2,3,4,5,6,7,11,12,14,25];
// // arr.splice(2,3,21,91,86,48,59);
// // 
// arr.splice(4,2,11,12,1);
// console.log(arr);

slicing   // transform array in place and return the deleted
// slice method se deleted kr sakte hai but insert nhi kr sakte hai 


const arr=[10,20,30,40,50
];
console.log(arr.slice(2,5));
console.log(arr);
