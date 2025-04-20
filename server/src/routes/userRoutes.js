const express = require('express');

const router = express.Router();
const userController = require('../controllers/userController');

router.get('/getalluser',userController.getAllUsers);
router.post('/registeruser',userController.setUser);


module.exports = router;