// acquire express & hbs module

const express = require('express');
const hbs = require('hbs');

// create a express app
const app = express();

// app.set method to set up view engine with hbs to render web pages with template files
app.set('view engine', 'hbs');

// for public folder to use static files
app.use(express.static('public'))

//get method; set up routes
app.get('/', function(req, res){
    res.render('index');
    console.log('HELLO WURLD');
})

app.get('/hello/:firstName', function(req,res){
    let fname = req.params.firstName;
    res.render('hello', {
        firstName: fname
    })
})

app.listen(3000, function(){
    console.log('hello')
})