const fs = require('fs');
const http = require('http');

// fs.writeFile('Hey.txt', 'kya haal hain ', function(err){
//     if(err) console.log(err);
//     else console.log('done');
    
    
// })

// fs.appendFile('Hey.txt', 'badiya teri suna ', function(err){
//     if(err) console.log(err);
//     else console.log('done');   
// })

// fs.rename('Hey.txt', 'Hi.txt', (err)=>{
//     if(err) console.log(err);
//     else console.log('Rename done');   
// })

// fs.copyFile('Hi.txt', './Hey.docx', (err)=>{
//     if(err) console.log(err);
//     else console.log('Copy done');   
// })

// fs.unlink('Hi.txt' , (err)=>{
//     if(err) console.log(err);
//     else console.log('Delete done');   
// })

// fs.rm('./copy',{recursive:true}, (err)=>{
//     if(err) console.log(err);
//     else console.log('Folder Delete done');   
// })

// fs.mkdir('./copy',{recursive:true}, (err)=>{
//     if(err) console.log(err);
//     else console.log('Folder Delete done');   
// })

const server = http.createServer((req, res)=>{
    res.end('hellow');
})
server.listen(5000);