const db = require('../utils/db-connection');
const User = require('../models/userModel');

const addUsers = async (req, res) =>{
    try {
        const {email, name} = req.body;
        const user = await User.create({
            email: email,
            name: name
        })
        res.status(201).send(`User with name ${name} has been created!`)
    } catch (error) {
        console.log(error);
        res.status(500).send(`Unable to make an entry!`);
    }
    // const {email, name} = req.body;
    // const insertQuery = 'INSERT INTO users (email, name) VALUES (?,?)';
    // db.execute(insertQuery, [email, name], (err)=>{
    //     if(err){
    //         console.log(err.message);
    //         res.status(500).send("Something went Wrong!");
    //         return;
    //     }
    //     res.status(200).send(`User with name ${name} has been added.`)
    // })
}

const getUsers = async (req, res) =>{
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).send("Something went wrong!");
    }
    // const getQuery = 'Select * from users';
    // db.execute(getQuery, (err, result)=>{
    //     if(err){
    //         console.log(err.message);
    //         res.status(500).send("Something went Wrong!");
    //         return;
    //     }
    //     res.status(200).json(result);
    // })
}

module.exports = {
    addUsers,
    getUsers
}


