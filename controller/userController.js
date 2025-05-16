const db = require('../utils/db-connection');

const addUsers = (req, res) =>{
    const {email, name} = req.body;
    const insertQuery = 'INSERT INTO users (email, name) VALUES (?,?)';
    db.execute(insertQuery, [email, name], (err)=>{
        if(err){
            console.log(err.message);
            res.status(500).send("Something went Wrong!");
            return;
        }
        res.status(200).send(`User with name ${name} has been added.`)
    })
}

const getUsers = (req, res) =>{
    const getQuery = 'Select * from users';
    db.execute(getQuery, (err, result)=>{
        if(err){
            console.log(err.message);
            res.status(500).send("Something went Wrong!");
            return;
        }
        res.status(200).json(result);
    })
}

module.exports = {
    addUsers,
    getUsers
}


