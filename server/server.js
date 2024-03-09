const http=require("http")

http.createServer((req,res)=>{
    let details=[
        {
            "name":"babu",
            "sal":40000,
            "age":25,
            "place":"Puri"
        },
        {
            "name":"kabu",
            "sal":50000,
            "age":24,
            "place":"Bhubaneswar"
        }
    ]
    res.writeHead(200,"Ok",{
        "content-type": "application/json",
        "Access-Control-Allow-Origin": "*"
    })
    res.end(JSON.stringify(details))
}).listen(5000,(err)=>{
    if(err)console.log(err);
    console.log("this server is running on port 5000....");
})
