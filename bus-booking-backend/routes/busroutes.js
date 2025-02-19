const express = require('express');
const busController = require('../controllers/busController');

const router = express.Router();

router.get('/', busController.getBuses);
router.get('/:id', busController.getBusById);

module.exports = router;