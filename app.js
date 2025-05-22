const express = require('express');
const db = require('./utils/db-connection.js');
const userRoutes = require('./routes/userRoutes.js');
const busRoutes = require('./routes/busRoutes.js')
const bookingRoutes = require('./routes/bookingRoutes.js');

//models
const models = require('./models/index.js'); 

const app = express();
let port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello Abhishek");
})

app.use('/users', userRoutes);
app.use('/buses', busRoutes);
app.use('/bookings', bookingRoutes);

db.sync({force: true}).then(()=>{
    app.listen(port, (req, res) => {
        console.log("The is listening on Port: " + port);
    })
}).catch((error)=>{
    console.log(error);
})