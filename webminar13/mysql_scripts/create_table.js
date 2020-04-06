const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'myuser',
    database: 'mytestdb',
    password:'Varun@12345'
})

connection.query(
    `CREATE TABLE IF NOT EXISTS persons (
        id INTEGER AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        age INTEGER NOT NULL,
        city VARCHAR(30)

    )` ,
    function(err,results){
        if (err) {
            console.error(err)
        }
        else{
            console.log("table created successfully")
        }
        connection.close();

    }
)
//for running this file write on terminal node .\folder name\file name