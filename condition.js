// let age = 20;
// if (age>=50){
//     console.log("I am old ");
// }else if(age >=20 && age < 50){
//     console.log("I am a middle age person");{

//     }else if(age >=13 && age < 20){
//         console.log("I am a teen");
//     }else{
//         console.log("I am a child");
    // }

// let age =21;
// let hasTicket = true;
// if(age >= 18){
//     if(hasTicket){
//         console.log("you can enter");
//     }else{
//         console.log("you cannot enter");
//     }
//     }

// let day =3;
// switch(day){
//     case 1:
//     console.log("monday");
//     break;
//     case 2:
//     console.log('wednesday');
//     break;
//     case 3:
//     console.log('friday');
//     // break;
//     case 4:
//     console.log('tuesday');
//     // break;
//     case 5:
//     console.log('saturday');
//     // S;
//     case 6:
//     console.log('sunday');
//     // break;
//     default:
//         console.log("invalid Day");
// }
    // loops
    // for loops
// for(let i=0; i<=3; i++){
//     console.log(i);
// }
// for (;;){
//     console.log('hello world');
// }

// while loops
// let num =5;
// while(num>0){
//     console.log("hello from vishnu");
//     num--;
// }

// nested loops
// for(let i=0; i<3; i++){
//     for(let j=0; j<3; j++){
//         for(let k=0; k<3; k++){
// console.log(i,j,k);
//         }
//     }
    
// }

// break continue
// for(let i=0; i<10;i++){
//     if(i%4 !=0){
//         continue;
//     }
//     console.log(1);
// }
// for (let i=0; i<10; i++){
//     if(i%4 ==0){
//         break;
//     }
//     console.log(i);
// }
// Do while loop

let i=3;
do{console.lo(i);
    i--;
}while(i>0);

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
console.log(operate(5,6,add));