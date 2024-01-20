const express = require('express');
const cors = require('cors');
const { postUserPathController, getPathsByUserId, deleteUserPath } = require('../controllers/userPathController')

    const router = express.Router();
    router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:5173'
    })
    );

router.post('/userPath', postUserPathController);
router.get('/userPaths', getPathsByUserId);
router.post('/deleteUserPath', deleteUserPath);


module.exports = router;