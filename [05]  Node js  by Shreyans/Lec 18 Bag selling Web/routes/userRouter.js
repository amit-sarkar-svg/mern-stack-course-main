const express = require('express');
const router = express.Router();
const {registerUser, loginUser, logoutUser} = require('../controllers/authController')
const isLoggedin = require('../middlewares/isLoggedin');


router.get('/', (req, res) => {
    res.send('Users Router');
});

router.post('/register', registerUser);

router.post('/login', loginUser);

router.post('/logout', logoutUser);

module.exports = router;