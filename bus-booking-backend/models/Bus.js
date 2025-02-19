const mongoose = require('mongoose');

const busSchema = new mongoose.Schema({
    name: { type: String, required: true },
    from: { type: String, required: true },
    to: { type: String, required: true },
    departure: { type: String, required: true },
    price: { type: Number, required: true },
    seats: { type: Number, required: true },
    availableSeats: { type: [Number], default: Array.from({ length: 40 }, (_, i) => i + 1) }, // 40 seats by default
});

module.exports = mongoose.model('Bus', busSchema);