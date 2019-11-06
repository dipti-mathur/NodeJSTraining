const fs = require('fs');
const path = require('path');
//const fileContent = fs.readFileSync('fs-demo.txt',{encoding: 'utf-8'});

const filePath = path.resolve(__dirname,'fs-demo.txt');
console.log('filePath',filePath);

console.log('begin');
fs.readFile(filePath,'utf8',(err,fileContent)=>{
    if(err)
    {
        console.log('Err',err);
        return;
    }
    console.log(fileContent);
})

console.log('end');