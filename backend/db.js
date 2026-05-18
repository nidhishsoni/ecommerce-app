const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "ecommerce"
});

connection.connect((err) => {
    if(err){
        console.log(err);
    } else {
        console.log("MySQL Connected");
    }
});

module.exports = connection;