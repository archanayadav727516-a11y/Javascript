// // let a=25;
// console.log(a);
// let b = 10;
// console.log(b);
// console.log(a+b);

setTimeout(function(){
    console.log("hello world");

},2000);
console.log("i am after setTimeout");

h1 = document.querySelector("h1");
setTimeout(function(){
    h1.style.color="red"
;},1000);
setTimeout(function(){
    h1.style.color="green"
;},2000);
setTimeout(function(){
    h1.style.color="orange";
;},3000);