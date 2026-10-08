const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({

    productid: {
        type: String,
        required: true,
        unique: true
    },

    productname: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    stock: {
        type: Number,
        required: true
    },

    brand: {
        type: String,
        required: true
    }

});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;