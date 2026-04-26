// const buffer = Buffer.from("Hello");
// console.log(buffer);
// console.log(buffer.toString());


const fs = require('fs');
const readStrem = fs.createReadStrem('bigfile.txt');
readStrem.on('data',chunk=>{
    console.log('recived chunk');
})
readStrem.on('end',()=>{
    console.log('finished reading file');
})



