// async function getDate(){
//     const res = await fetch("https://api.com");
//     const data = await res.json();
//     console.log(data);
// }



// function greet(name,cb){
//     console.log(`Hello ${name}`)
//     cb()
// }

// function goodbye(){

//     console.log('Goodbye')
// }
// greet('Alice',goodbye);





console.log('hello from the first line')
function cb1(){
    console.log('hello fropm the callback');

}
setTimeout(cb1,3000);
console.log('hello from the last line');




//  jbkie async feature krne hote h y non blocking ke liya asynchromous ke liya call back ka use krte hai