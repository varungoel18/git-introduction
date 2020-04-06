const mysql = require('mysql2');
const insert = {
    name: process.argv[2],
    age: parseInt(process.argv[3]),
    city: process.argv[4]
}
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'myuser',
    database: 'mytestdb',
    password:'Varun@12345'
})  
connection.query(
    `INSERT INTO persons (name,age,city) VALUES (
        '${insert.name}',
        ${insert.age},
        '${insert.city}'              
    )`,                   // string values shoud be under single-colon
    function(err,results){
        if(err){
            console.error(err)
        } else{
            console.log(results);
            console.log("created successfully")
        }
        connection.close();

    }
)