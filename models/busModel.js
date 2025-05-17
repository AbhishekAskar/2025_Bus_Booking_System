const {Sequelize, DataTypes} = require("sequelize");
const sequelize = require('../utils/db-connection');

const Buses = sequelize.define('Bus', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    totalSeats:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    availableSeats:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = Buses;