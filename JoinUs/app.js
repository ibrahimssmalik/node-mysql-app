var express = require('express');
var mysql = require('mysql2');
var bodyParser = require("body-parser");
var app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({encoded: true}));
app.use(express.static(__dirname + "/public"));

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'insert-password-here',
  database: 'join_us'
});

// route examples
// app.get("/", function (req,res) {
//     res.send("Hello from our web app!")
// });
// app.get("/random_num", function (req,res) {
//     var num = Math.floor(Math.random() * 10) + 1;
//     res.send("Your lucky number is " + num);
// })

app.get("/", function (req,res) {
    // find count of users in DB
    var q = 'SELECT COUNT(*) AS count FROM users';
    connection.query(q, function(error,results){
        if (error) throw error;
        var count = results[0].count;
        // respond with that count
        // res.send("Enter your email to join " + count + " other on our waitlist. We are 100% not a cult.")
        res.render("home", {count: count});
    });
});

app.post("/register", function(req,res) {
    var person = {
        email: req.body.email
    };

    connection.query('INSERT INTO users SET ?', person, function(error,results) {
        if (error) throw error;
        res.redirect("/");
    });
});

// run localhost:8080 in browser
app.listen(8080, function () {
    console.log("App listening on port 8080!");
});