var { faker } = require('@faker-js/faker');
var mysql = require('mysql2');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'insert-password-here',
    database: 'join_us'
});

// SELECTING DATA
// var q = 'SELECT COUNT(*) AS total_users FROM users';
// connection.query(q, function (error,results,fields){
//     if (error) throw error;
//     console.log('The solution is: ',results[0].total_users);
// });

// INSERTING DATA
// var q = 'INSERT INTO users (email) VALUES ("wyatt_the_dog@gmail.com")';
// connection.query(q, function (error,results,fields){
//     if (error) throw error;
//     console.log('The solution is: ',results);
// });

// INSERTING DATA TAKE 2
// var person = {email: faker.internet.email(),
//               created_at: faker.date.past()};
// var end_result = connection.query('INSERT INTO users SET ?', person, function(error, results){
//     if (error) throw error;
//     console.log(results);
// })

// INSERTING LOTS OF DATA
var data = [];

for(var i = 0; i < 500; i++){
    data.push([
        faker.internet.email(),
        faker.date.past()
    ]);
}
// console.log(data);

var q = 'INSERT INTO users (email, created_at) VALUES ?';
connection.query(q, [data], function(error,result){
    console.log(error);
    console.log(result);
})

connection.end();