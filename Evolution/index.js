const http = require("http");
const fs = require("fs")

const server = http.createServer((req,res)=>{
    if(req.url==="/"){
        res.end("<h1>WELCOME TO EMPLOYEE MANAGEMENT SYSTEM</h1>")
    }else if(req.url === "./writeinfile"){
        fs.writeFile("./employee.txt","",{encoding:"utf-8"},(error)=>{
            if(error){
                res.end("Bad Request!!")
            }else{
                fs.appendFile("./employee.txt","Employee names are as follows:","utf-8",(err)=>{
                    if(err){
                        console.log("Bad Request!!");
                        return;  
                    }
                })
                res.end("<h1>Data has been written in the file</h1>");
            }

        })

    }
})

server.listen(8500,()=>{
    console.log("Hey Buddy")
})