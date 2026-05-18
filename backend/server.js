const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const db = require("./db");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("E-Commerce Backend Running");
});

app.get("/products", (req, res) => {

    const sql = "SELECT * FROM products";

    db.query(sql, (err, result) => {

        if(err){
            res.send(err);
        } else {
            res.send(result);
        }
    });
});

app.post("/orders", (req, res) => {

    const { product_name } = req.body;

    const sql =
    "INSERT INTO orders(product_name) VALUES(?)";

    db.query(sql, [product_name], (err, result) => {

        if(err){
            res.send(err);
        } else {
            res.send("Order Placed");
        }
    });
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});