const db = require('../utils/db-connection');
const Booking = require('../models/bookingModel');
const Bus = require('../models/busModel');
const User = require('../models/userModel');

const addBooking = async (req, res) => {
    try {
        const { userId, seatNumber, BusId } = req.body;
        console.log(`userId = ${userId}, busId = ${BusId}, seatNumber = ${seatNumber}`);
        const booking = await Booking.create({
            userId: userId,
            seatNumber: seatNumber,
            BusId: BusId
        })
        console.log(`userId = ${userId}, busId = ${BusId}, seatNumber = ${seatNumber}`);
        res.status(201).send(`This is the booking deatails ${booking}`)
    } catch (error) {
        console.log(error);
        res.status(500).send(`Unable to make an entry!`);
    }
}

const getBusBookingsById = async (req, res) => {
    try {
        const busId = req.params.id;

        const bookings = await Booking.findAll({
            where: { busId },
            include: {
                model: User,
                attributes: ['name', 'email']
            },
            attributes: ['id', 'seatNumber']
        });

        res.status(200).json(bookings);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error fetching bus bookings");
    }
}

const getUserBookingsById = async (req, res) => {
    try {
        const userId = req.params.id;

        const bookings = await Booking.findAll({
            where: { userId },
            include: {
                model: Bus,
                attributes: ['name'] 
            },
            attributes: ['id', 'seatNumber'] 
        });

        res.status(200).json(bookings);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error fetching user bookings");
    }
}

module.exports = {
    addBooking,
    getBusBookingsById,
    getUserBookingsById
}