const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Root@123',
    database: 'BBS'
})

connection.connect((err) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log("Connection has been created");

    const creationQuery = [
        `CREATE TABLE IF NOT EXISTS Users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(20),
            email VARCHAR(20)
        )`,
        `CREATE TABLE IF NOT EXISTS Buses (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(20),
            totalSeats INT,
            availableSeats INT
        )`
];
    
    for (let i = 0; i < creationQuery.length; i++) {
    connection.execute(creationQuery[i], (err, result) => {
        if (err) {
            console.error(`Error executing query ${i + 1}:`, err.message);
        } else {
            console.log(`Table ${i + 1} created successfully.`);
        }
    });
}

})

module.exports = connection;