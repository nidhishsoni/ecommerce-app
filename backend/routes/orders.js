const express = require("express");
const router = express.Router();

const db = require("../db");


// GET ALL ORDERS
router.get("/", (req, res) => {

    const sql = "SELECT * FROM orders";

    db.query(sql, (err, result) => {

        if(err){
            res.send(err);
        } else {
            res.send(result);
        }
    });
});


// PLACE ORDER
router.post("/", (req, res) => {

    const { product_name } = req.body;

    const sql =
    "INSERT INTO orders(product_name) VALUES(?)";

    db.query(sql, [product_name], (err, result) => {

        if(err){
            res.send(err);
        } else {
            res.send("Order Placed Successfully");
        }
    });
});


// DELETE ORDER
router.delete("/:id", (req, res) => {

    const sql =
    "DELETE FROM orders WHERE id=?";

    db.query(sql, [req.params.id], (err, result) => {

        if(err){
            res.send(err);
        } else {
            res.send("Order Deleted");
        }
    });
});

module.exports = router;