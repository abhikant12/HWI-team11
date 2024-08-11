const express = require('express');
const router = express.Router();


const { register } = require('../controllers/User');
const {registerMail } = require('../controllers/Mailer.js');


router.post('/mail', registerMail);                           // send the email
router.post('/register', register);




module.exports = router;
