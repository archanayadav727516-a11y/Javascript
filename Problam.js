// Higher order function that aoolies a function twice
function applyTwice(vale,fu ){
// I need to apply fn twice
return fn(fn(value));
}
function addTwo(num){
    return num+2;
}
console.log(applyTwice(10,addTwo));