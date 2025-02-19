const Bus = require('../models/Bus');

// Get all buses
exports.getBuses = async (req, res) => {
    try {
        const { from, to, date } = req.query;
        const buses = await Bus.find({ from, to });
        res.status(200).json(buses);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err });
    }
};

// Get bus by ID
exports.getBusById = async (req, res) => {
    try {
        const bus = await Bus.findById(req.params.id);
        if (!bus) {
            return res.status(404).json({ message: 'Bus not found' });
        }
        res.status(200).json(bus);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err });
    }
};