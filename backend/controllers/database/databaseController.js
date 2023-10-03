const mysql = require('mysql2')
const fs = require('fs')
const sql_source = './sql'

var connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database : 'desafio_viamaker',
    multipleStatements: true
});

module.exports.initDatabase = function initDatabase () {
    var createDatabaseQuery = ''
    var createVideoTableQuery = ''
    var createProductTableQuery = ''
    var createUserTableQuery = ''

    fs.readFile(`${sql_source}/create-database.sql`, (err, data) => {
        if (err) throw err;
        createDatabaseQuery = data.toString();
    });
    fs.readFile(`${sql_source}/create-video-table.sql`, (err, data) => {
        if (err) throw err;
        createVideoTableQuery = data.toString();
    });
    fs.readFile(`${sql_source}/create-product-table.sql`, (err, data) => {
        if (err) throw err;
        createProductTableQuery = data.toString();
    });
    fs.readFile(`${sql_source}/create-user-table.sql`, (err, data) => {
        if (err) throw err;
        createUserTableQuery = data.toString();
    });
    
    connection.connect(function(err) {
        if (err) throw err;
        connection.query(createDatabaseQuery, 
            function (err, result) {
                if (err) throw err;
                console.log(result[0]);
        })
    })

    connection.changeUser({database : 'desafio_viamaker'}, function(err) {
        if (err) throw err;
    })

    connection.connect(function(err) {
        if (err) throw err;
        connection.query(
            `${createVideoTableQuery} 
             ${createProductTableQuery} 
             ${createUserTableQuery}
            `, 
            function (err, result) {
                if (err) throw err;
                console.log(result[0]);
                console.log(result[1]);
                console.log(result[2]);
        });
    });
}

module.exports = connection