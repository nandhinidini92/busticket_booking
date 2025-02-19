const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    busId: { type: mongoose.Schema.Types.ObjectId, ref: 'Bus', required: true },
    passengerName: { type: String, required: true },
    mobileNumber: { type: String, required: true },
    seats: { type: [Number], required: true },
    totalAmount: { type: Number, required: true },
    bookingDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Booking', bookingSchema);