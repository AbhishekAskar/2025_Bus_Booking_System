const User = require('./userModel');
const Bus = require('./busModel');
const Booking = require('./bookingModel');

// One to Many
User.hasMany(Booking);
Booking.belongsTo(User);

// One to many
Bus.hasMany(Booking);
Booking.belongsTo(Bus);

module.exports = {
    User,
    Bus,
    Booking
}