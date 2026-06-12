const express = require('express');
const router = express.Router();
const userModel = require('../models/user-model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.get('/', (req, res) => {
    res.render('index');
});

router.post('/register', async (req, res) => {
    try {   
        let { fullName, email, password } = req.body;

        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, async (err, hash) => {
                if (err) return res.send(err.message);
                else {
                    let user = await userModel.create({
                        fullName,
                        email,
                        password : hash,
                    });
                    
                    let token = jwt.sign({ email, id: user._id }, "secretkey");
                    res.cookie("token", token);
                    res.send(token);
                }
            });
        });

        
        
    } catch (error) {
        console.error(error);
        res.status(500).send('Error registering user');
    }
});

module.exports = router;