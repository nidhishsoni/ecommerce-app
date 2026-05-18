const express = require("express");
const router = express.Router();

const db = require("../db");


// GET ALL PRODUCTS
router.get("/", (req, res) => {

    const sql = "SELECT * FROM products";

    db.query(sql, (err, result) => {

        if(err){
            res.send(err);
        } else {
            res.send(result);
        }
    });
});


// ADD PRODUCT
router.post("/", (req, res) => {

    const { name, price } = req.body;

    const sql =
    "INSERT INTO products(name, price) VALUES(?, ?)";

    db.query(sql, [name, price], (err, result) => {

        if(err){
            res.send(err);
        } else {
            res.send("Product Added Successfully");
        }
    });
});


// UPDATE PRODUCT
router.put("/:id", (req, res) => {

    const { name, price } = req.body;

    const sql =
    "UPDATE products SET name=?, price=? WHERE id=?";

    db.query(
        sql,
        [name, price, req.params.id],
        (err, result) => {

            if(err){
                res.send(err);
            } else {
                res.send("Product Updated");
            }
        }
    );
});


// DELETE PRODUCT
router.delete("/:id", (req, res) => {

    const sql =
    "DELETE FROM products WHERE id=?";

    db.query(sql, [req.params.id], (err, result) => {

        if(err){
            res.send(err);
        } else {
            res.send("Product Deleted");
        }
    });
});

module.exports = router;