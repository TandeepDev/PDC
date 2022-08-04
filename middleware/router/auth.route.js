const router = require('express').Router();
const authController = require('../controllers/auth.controller');

router.post('/login', authController.createNewUser);
router.post('/verifyPhoneOtp', authController.verifyPhoneOtp);

module.exports = router;