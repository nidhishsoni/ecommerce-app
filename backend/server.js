const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());


// ROUTES
const productRoutes = require("./routes/products");
const orderRoutes = require("./routes/orders");


// USE ROUTES
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);


app.get("/", (req, res) => {
    res.send("E-Commerce Backend Running");
});


app.listen(5000, () => {
    console.log("Server running on port 5000");
});