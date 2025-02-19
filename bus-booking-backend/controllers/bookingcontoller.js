const Bus = require('../models/Bus');
const Booking = require('../models/Booking');

// Create a booking
exports.createBooking = async (req, res) => {
    try {
        const { busId, passengerName, mobileNumber, seats } = req.body;

        // Check if bus exists
        const bus = await Bus.findById(busId);
        if (!bus) {
            return res.status(404).json({ message: 'Bus not found' });
        }

        // Check if seats are available
        const areSeatsAvailable = seats.every(seat => bus.availableSeats.includes(seat));
        if (!areSeatsAvailable) {
            return res.status(400).json({ message: 'Selected seats are not available' });
        }

        // Calculate total amount
        const totalAmount = bus.price * seats.length;

        // Create booking
        const booking = new Booking({
            busId,
            passengerName,
            mobileNumber,
            seats,
            totalAmount,
        });

        // Update available seats
        bus.availableSeats = bus.availableSeats.filter(seat => !seats.includes(seat));
        await bus.save();

        await booking.save();
        res.status(201).json({ message: 'Booking successful', booking });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err });
    }
};