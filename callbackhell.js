// function boilWater(callback){
//     setTimeout(() => {
//          console.log('water is boiled');
//     callback();
//     }, 2000);
   

// }
// function cookPasta(callback){
//     console.log('coocking pasta....');
//  setTimeout(() => {
//          console.log('Pasta is boiled');
//     callback();
//     }, 2000);
   

// }

// function cprepareSauce(callback){
//     console.log('Preparing sauce....');
//  setTimeout(() => {
//          console.log('Sauce is prepared');
//     callback();
//     }, 2000);
   



// }































// global scope
// function scope
// block scope
// lexical scope





// global scope
// let name1="vishwa";
// var name2="mohan";
// const name3="Singh";

// function func1(){
//     let f1=11 ;
//     var f2=12;
//     const f3=13;
//     console.log("Inside function",name1,name2,name3);
//     // console.log("Func scope _Outside",f1,f2,f3);
//     var age1=19;
//     console.log(age1)
// }
// func1();
// {
//     console.log("Inside block",name1,name2,name3)
// }
// console.log("Outside",name1,name2,name3)


// Lexical scope
function outerFunction(){
    let outer = "I am from outer fa";
    function innerFunction(){
        console.log(outerVar);
    }
    return function innerFunction(){
        console.log(outerVar);
    }
}
const innerFunction=outerFunction();
innerFunc();
