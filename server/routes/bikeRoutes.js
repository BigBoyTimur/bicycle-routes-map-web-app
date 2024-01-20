const express = require('express');
const cors = require('cors');
const { test, registerUser, loginUser, getProfile } = require('../controllers/authController')
const { getBikePaths } = require('../controllers/bikeController');

const router = express.Router();
router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:5173'
    })
);

router.get('/bikePaths', getBikePaths);

module.exports = router;