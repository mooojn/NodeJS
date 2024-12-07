// modules
const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname,"crud/");

// creating file
fs.writeFileSync(`${filePath}/apple.txt`, "hi im a file",(err)=>{
    errorCheck(err);
});

// reading file's content
fs.readFile(`${filePath}/apple.txt`,"utf-8",(err,item)=>{
    console.log(item);
    errorCheck(err);
});

// adding new data to file
fs.appendFile(`${filePath}/apple.txt`," this is secondary txt",(err)=>{
    errorCheck(err);
});

// file rename
fs.rename(`${filePath}/apple.txt`,`${filePath}/fruit.txt`,(err)=>{
    errorCheck(err);
});

// file deletion
fs.unlinkSync(`${filePath}/fruit.txt`,(err)=>{
    errorCheck(err);
});

// just checks the error and displays relative message
function errorCheck(err){
    if (err)
        console.log("error");
    else
        console.log("success");
};