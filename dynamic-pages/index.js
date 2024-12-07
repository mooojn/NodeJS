const express = require('express');
const path = require('path');
const app = express();

// for index html file
const dirP = path.join(__dirname,'/sad');

// ejs server setup
app.set('view engine', 'ejs');

// index page
app.get('',(_,res)=>{
    res.sendFile(`${dirP}/index.html`);
});

// dynamic page
app.get('/profile', (_, res)=>{
    // data sending to ejs file
    const data = {
        name:'Moon',
        age:'21',
        email:'moon@test.com'
    };
    res.render('profile',{data});
});

// 404 page in case of wrong url
app.get('*',(_,res)=>{
    res.send("<h1>404</h1>")
});

app.listen(4500);