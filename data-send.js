const http = require('http');
// data to load on server
const data = [
    {name:'Moon',age:20},
    {name:'Saliq',age:18},
    {name:'Ali',age:16},
];
// communicating the data to server
http.createServer((req, res)=>{
    res.writeHead(200,{'Content-Type':'application\\josn'});
    res.write(JSON.stringify(data));
    res.end();
}).listen(4500);