const db = require('../utils/db-connection');
const Bus = require('../models/busModel');
const { Op } = require("sequelize");

const addBus = async (req, res) =>{
    try {
        const {name, totalSeats, availableSeats} = req.body;
        const bus = await Bus.create({
            name: name,
            totalSeats: totalSeats,
            availableSeats: availableSeats
        })
        res.status(201).send(`Bus with name ${name} has been created!`)
    } catch (error) {
        console.log(error);
        res.status(500).send(`Unable to make an entry!`);
    }
}

const getBuses = async (req, res) =>{
    try {
        const { seats } = req.params;
        const buses = await Bus.findAll({
            where: {
                availableSeats: {
                    [Op.gt]: seats // Sequelize operator: greater than
                }
            }
        });
        res.status(200).json(buses);
    } catch (error) {
        console.error(error);
        res.status(500).send("Something went wrong!");
    }
}

module.exports = {
    addBus,
    getBuses
}