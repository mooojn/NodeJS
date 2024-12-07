const http = require('http');

http.createServer((req,res)=>{
    res.write("<h1>Running in Local Server</h1>");
    res.write("<hr>");
    res.write("<h3>Message from the host</h3>");
    res.write("Hi, I'm Moon from local host");
    res.end();
}).listen(5000);