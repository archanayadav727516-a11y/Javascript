// // Real world
// // objects/  state 
// // behavier
// // object oriented principal 
// // abetraction 
// // enhiertens
// // ploymorphysem

// // object  collection of key value pair
// const obj ={
//     "name" :"vishwa",
//     "age":"19",
//     "greet":function(){
//         console.log("Hello world !")
        
//     }
// }
//     const obj1={
//         1:"vishwa",
//         true:"mohan"
//     }

// // console.log(obj1)


// // using the object literals

// // const car ={
// //     brand:"tesla",
// //     model:"models",
// //     // start(){
// //     // console.log("car started")
// //     start : function(){
// //         this.console.log("car started")
// //     }
// // }
// // car.start()

// const book = new Object();
// book.title="12344444456";
// book.auther="george Drwell";
// book.summary=function(){
// console.log(`Good summary of the book ${history.title} by the author-${this.author}`)
// }
// // console.log(book)

// // 3 using the constructor function - before ES6

// function person(name,age){
//     this.name=name;
//     this.age=age;
//     this.greet=function(){
//        console.log(`hello I as ${this.name}`);
//     }

// }
// const alice=new person{`Alise`, 25};
// alice.greet();



// creating object using classes
// class Animal{
//     constructor{name,type}{
//         this.name=name;
//         this.type= type;
//     }
//     sound (){
//         console.log(`${this.make} makes a sound !`)
//     }
// }
// const dog = new Animal("Dog","Mannul");
// dog.sound(

// );


// const add7= (function(){
//     let fixed =7;
//     return function(num){
//         return num + fixed;
//     }
// })();
// console.log(add7(3))

// let toggle=(function(){
//     let state = false;
//     return function(){
//         state=!state;
//         console.log("Toggles",state);
//     }

// })();
// toggle();
// toggle();
// toggle();

const book = new Object();
book.title='1944';
book.author='georage orwell';
book.summary=function(){
    console.log(`Good summary of the book ${this.title}`by the author-${this})

}


function Person(name,age){
    this.name=name;
    this.age=age;
    this.greet= function(){
        console.log(`hello I as ${this.name}`);
    }
}
const alice = new Person('Alice',25);
alice.greet();