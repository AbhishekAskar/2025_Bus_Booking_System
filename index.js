const express = require('express');
const db = require('./utils/db-connection.js');
const userRoutes = require('./routes/userRoutes.js');
const busRoutes = require('./routes/busRoutes.js')
const app = express();
let port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello Abhishek");
})

app.use('/users', userRoutes);
app.use('/bus', busRoutes);

db.sync({forced: true}).then(()=>{
    app.listen(port, (req, res) => {
        console.log("The is listening on Port: " + port);
    })
}).catch((error)=>{
    console.log(error);
})