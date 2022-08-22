const http=require("http");
const fs=require("fs")

const data=http.createServer((req,res)=>{
    if(req.url=="/textsync"){
        let output=fs.readFileSync("./sample.txt")
        res.end("read file")

    }
    if(req.url=="/textasync"){
        let output=fs.readFile("./sample.txt",(error,result)=>{
            console.log("sync file done")
        })
        res.end("async file done")
        console.log("done")
    }
    if(req.url==="/*"){
        res.end("404")
    }
    console.log(req.url)
})
data.listen(3002)
console.log("hello")