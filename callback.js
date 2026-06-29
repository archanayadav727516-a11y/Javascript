// function greet(name, callback) {
//   console.log("Hello " + name);
//   callback();
// }

// function bye() {
//   console.log("Bye!");
// }

// greet("Archana", bye);

function sum (a,b){
    console.log(a+b);

}
function calculator (a,b, sumcallback){
    sumCallback(a,b);
    calculator(a+b);
    
}
calculator(1,2, (a,b)=>{
    console.log(a+b);
})