const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGO_URL + "/product_management")
    .then(() => {
        console.log("MongoDB Connected");
    })
    .catch((error) => {
        console.log(error);
    });

const routes = require("./routes/index");

app.use("/", routes);

app.listen(5000, () => {
    console.log("Server running on port 5000");
});