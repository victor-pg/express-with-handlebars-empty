const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const homeRoute = require('./routes/home');
const testRoute = require('./routes/test');

const hbs = exphbs.create({
    defaultLayout:'main',
    extname:'hbs'
})

app.engine('hbs',hbs.engine);
app.set('view engine','hbs');
app.set('views','views');
app.use(express.static('public'));
// app.use('/public',express.static('public'));
app.use(express.urlencoded({extended:true}));

app.use(homeRoute);
app.use(testRoute);

app.listen(3000,()=>{
    console.log('Listening on port 3000');
})