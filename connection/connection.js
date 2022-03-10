const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host     : 'localhost',
    port     : '3306', 
    user     : 'root',
    password : '123456789',
    database : 'northwind'
});

mysqlConnection.connect(err => {
    if(err){
        console.log('Erro no bd: ',err);
        return;
    } else{
        console.log('bd funfando');
    }
});

module.exports = mysqlConnection;