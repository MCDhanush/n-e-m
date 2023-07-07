// ex 1 write file

const fs = require("fs")
// const quote =  "“One thing I have learned is that I am not the owner of my talent, I am the manager of it.”"

// fs.writeFile("./text.txt",quote,(err)=>{
//     console.log("File created");
// })

// ex 2 task : write more file
// const quote1= "live more,worry less...❤️"

// s = 0
// const va = (s)=>{
// var [,,s] = process.argv
// for(i=1;i<= s;i++){
//     fs.writeFile(`./backup/file-${i}.html`,quote1,(err)=>{
//         console.log("created");
//     })
// }}

// va (s)

// ex  3  reading file
 
// fs.readFile("./text.txt","utf-8",(err,data)=>{
//     if(err){
//         console.log("error occured",err)
//     } else{
//         console.log(data);
//     }
// })

// var quote4 = "“We cannot solve problems with the kind of thinking we employed when we came up with them.”"
// // ex 4 change content in other file

// fs.appendFile("./text1.txt","\n"+quote4,(err)=>{
//     console.log("added content");
// })


// ex 5 deleting file

fs.unlink("./backup/file-55.html",(err)=>{
    console.log("deleted");
})







 


