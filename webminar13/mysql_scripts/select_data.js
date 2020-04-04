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
    `SELECT * FROM persons)`,                  
    function(err,rows,cols){
        if(err){
            console.error(err)
        } else{
            console.log(rows)
            console.log(cols)
        }
        connection.close();

    }
)