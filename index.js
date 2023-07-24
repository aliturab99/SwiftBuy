const express = require("express")
const app = express()
const mysql = require('mysql');


const port = process.env.PORT || 5000

// MySQL database connection configuration without password
const dbConfig = {
    host: '127.0.0.1', // Usually 'localhost' if the database is on the same server
    user: 'root',
    database: 'swiftBuy',
};
const connection = mysql.createConnection(dbConfig);
// Connect to the database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err.stack);
        return;
    }
    console.log('Connected to MySQL database as id', connection.threadId);
});



// If Any error will be thrown from any unknown place that will be catched here
app.use((error, req, res, next) => {
    if (error) {
        res.status(400).json()
    }
    else {
        next()
    }
})

app.listen(port, () => {
    console.log(`Server is listening at ${port}`)
})