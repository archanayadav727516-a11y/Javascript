// Higer order function 
// take me or more function as parameter
// return function 
// ek isa function  jo apne input  as a argument mai function ko accept krta ho ek y ek se jada usko higer order function kahte h 
// y function return krta h

function operate(a,b, operation){
    return operation(a,b);
}
function add(a,b){
    return a*b;
}
function multi(a,b){
    return a*b;
}
console.log(operate(5,6,add));
console.log(operate(5,6,multi));


// function greet(name){
//     return function(message){
//         console.log(`${message},${name}`);
//     }
// }


