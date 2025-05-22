const express = require('express');
const bookingController = require('../controller/bookingController');
const router = express.Router();

router.post('/', bookingController.addBooking);
router.get('/users/:id/', bookingController.getUserBookingsById);
router.get('/buses/:id/', bookingController.getBusBookingsById);

module.exports = router;