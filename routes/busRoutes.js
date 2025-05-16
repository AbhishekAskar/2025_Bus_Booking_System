const express = require('express');
const busController = require('../controller/busController');
const router = express.Router();

router.post('/add', busController.addBus);
router.get('/available/:seats', busController.getBuses)

module.exports = router;