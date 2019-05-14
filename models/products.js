// exports.create = function(pn, pd, pt, pdate, pp, userEmail) {
//     this.productName = pn;
//     this.productDescription = pd;
//     this.productType = pt;
//     this.purchaseDate = pdate;
//     this.productPrice = pp;
//     this.userId = userEmail;
// }

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var productSchema = new Schema({
    productName: {type: String, required: true},
    productDescription: {type: String},
    productType: {type: String},
    purchaseDate: {type: Date, required: true},
    productPrice: {type: Number, required: true},
    userId: {type: String, required: true}
});

var Product = mongoose.model('Product', productSchema);

module.exports = Product;