const express = require('express');
const users = require('../expense-report/models/users');
const myParser = require('body-parser');
const users = require('./models/users');
const products = require('./models/products');
var app = express();
const session = require('express-session');
app.use(session({secret: 'test'}))

app.use(myParser.urlencoded({extended: true}));



var u1 = new users.create('admin', 'admin', 'admin@yahoo.com', '0000', '078/231221', 'macedonia', '15.10.1988');
console.log(u1);

app.post('/register', (req, res) => {
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var email = req.body.email;
    var password = req.body.password;
    var telephone = req.body.telephone;
    var country = req.body.country;
    var birthdate = req.body.birthdate;

    var newUser = new users.create(firstname, lastname, email, password, telephone, country, birthdate);
    
});

app.post('/login', (req, res) => {
    var email = req.body.emailLogin;
    var password = req.body.password;

    //database checks
    req.session.user = email;

    //return response to FE
})

app.post('/addProduct', (req, res) =>{

    if(req.session.email){

    
        var productName = req.body.productName;
        var productDescription = req.body.productDescription;
        var productType = req.body.productType;
        var purchaseDate = req.body.purchaseDate;
        var productPrice = req.body.productPrice;
        var userEmail = req.session.email;

        var addProduct = new products.create(productName, productDescription, productType, purchaseDate, productPrice, userEmail)

        //send response to FE 
    } 
    else{
        res.status(400).send('Access denied');
    }
})