const express = require('express');
const myParser = require('body-parser');
const Products = require('./models/products');
var app = express();
const db = require('./conection');
const User = require('./models/users');

const session = require('express-session');
app.use(session({secret: 'test'}))


app.listen(3000);

app.use(myParser.urlencoded({extended: true}));

app.get('/', (req, res) =>{
    res.send("Hello World 123");
})

app.post('/register', (req, res, next) => {
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var email = req.body.email;
    var password = req.body.password;
    var telephone = req.body.telephone;
    var country = req.body.country;
    var birthdate = req.body.birthdate;

    let user = new User({
        firstName: firstname,
        lastName: lastname,
        email: email,
        password: password,
        telephone: telephone,
        country: country,
        birthdate: birthdate

    }) 
    
    
    user.save(function(err){
        if(err) {
            
            return next(err);
        }
        else {
            res.send('User Created!');
        }
        
    });


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


app.post('/newProduct', (req, res) =>{
    var pn = req.body.productname;
    var pd = req.body.productdescription;
    var pt = req.body.producttype;
    var pdate = req.body.purchasedate;
    var pp = req.body.productprice;



})

app.get('/products', (req, res, next) => {
    Products.find({}, function(err, products){
        if(err){
            return next(err);
        } 
        res.send(products);
    })
})