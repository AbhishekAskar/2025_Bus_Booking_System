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
}

const getUsers = async (req, res) =>{
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).send("Something went wrong!");
    }
}

module.exports = {
    addUsers,
    getUsers
}


