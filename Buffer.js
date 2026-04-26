// node js utf 8 bufferexample

// buffer is kindes of global object
// binary file ko hindle krne ke liya buffer ka use kiya jata hai
// temporary storag area for row binary file

const fs = require ("fs");
const readStream=fs.creatReadStream("bigfile.txt");
readStream.on("data",chunk =>{
    console.log("Recived chunk",chunk);
});
readStream.on("end",()=>{
    console.log("No more data to read");
})




