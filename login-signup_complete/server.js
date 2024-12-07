const { error } = require('console');
const User = require('./mongodb.js');
const express = require("express");
const hbs = require('hbs');
const path = require('path');
const app = express();
app.set('view engine', 'hbs');

let login = false;

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

// main page
app.get('/', async (req, res) => {
    res.render('index');
});
// sign up page
app.get('/signup', async (req, res) => {
    res.render('signup');
});
// sign in page
app.get('/signin', async (req, res) => {
    res.render('signin');
});
// main page
app.get('/main', async (req, res) => {
    if (login){
        res.render('main');
    }else{
        res.send("Please login first");
    }
});
// 404 page
app.get('*', async (req, res) => {
    res.send("<h1>404 page not found</h1>");
});
app.post('/signup', async (req, res) => {
    const newUser = new User(req.body);
    await newUser.save();
    res.send("User added");
});
// server.js
app.post('/logout', (req, res) => {
    login = false;
    res.status(200).end();
});
app.post('/signin', async (req, res) => {
    
    
    let userName = req.body.name;
    let userPassword = req.body.password;
    
    if (userName === "" || userPassword === "") {
        res.send("Please enter the name and password");
        return;
    }
    
    const user = await User.findOne({name: userName, password: userPassword});

    if (user){
        res.redirect('/main');
        login = true;
    }else{
        res.send("login failed");
    
    }
});


// port
app.listen(4500, () => console.log("Server is running..."));