const db = require('../utils/db-connection');

const addBus = (req, res) =>{
    const {name, totalSeats, availableSeats} = req.body;
    const insertQuery = 'INSERT INTO buses (name, totalSeats, availableSeats) VALUES (?,?,?)';
    db.execute(insertQuery, [name, totalSeats, availableSeats], (err)=>{
        if(err){
            console.log(err.message);
            res.status(500).send(err.message);
            return;
        }
        console.log("Values has been inserted ");
        res.status(200).send(`Bus with name ${name} has been added.`)
    })
}

const getBuses = (req, res) =>{
    const { seats } = req.params;
    const retrieveQuery = 'SELECT * from Buses WHERE availableSeats > ?';
    db.execute(retrieveQuery, [seats], (err, results)=>{
        if(err){
            console.log(err.message);
            res.status(500).send("Something went wrong!");
            return;
        }
        res.status(200).json(results)
    })
}

module.exports = {
    addBus,
    getBuses
}