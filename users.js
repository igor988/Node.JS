// exports.create = function(fn, ln, email, pass, tel, count, bd) {
//     this.firstname = fn;
//     this.lastname = ln;
//     this.email = email;
//     this.password = pass;
//     this.telephone = tel;
//     this.country = count;
//     this.birthdate = bd;
// }

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var usersSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    telephone: {type: String, required: true},
    country: {type: String, required: true},
    birthdate: {type: String, required:true}
});

var User = mongoose.model('Users', usersSchema);

module.exports = User;