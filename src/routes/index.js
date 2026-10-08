const express = require("express");

const router = express.Router();

const Product = require("../models/product");


// Insert Product

router.post("/products", async (req, res) => {

    try {

        const product = new Product(req.body);

        await product.save();

        res.send("Product inserted successfully");

    } catch (error) {

        res.send(error.message);

    }

});


// Delete Product by Product ID

router.delete("/products/:productid", async (req, res) => {

    try {

        const product = await Product.findOneAndDelete({
            productid: req.params.productid
        });

        if (!product) {
            return res.send("Product not found");
        }

        res.send("Product deleted successfully");

    } catch (error) {

        res.send(error.message);

    }

});


module.exports = router;