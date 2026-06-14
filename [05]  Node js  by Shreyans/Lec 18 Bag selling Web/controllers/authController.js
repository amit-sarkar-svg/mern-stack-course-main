const userModel = require('../models/user-model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userToken = require('../utils/generateToken');
const generateToken = require('../utils/generateToken');


module.exports.registerUser = async (req, res) => {
    try {   
        let { fullName, email, password } = req.body;

        let user = await userModel.findOne({email});
        if(user) return res.status(401).send("You already have a account ,please log in ")

        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, async (err, hash) => {
                if (err) return res.send(err.message);
                else {
                    let user = await userModel.create({
                        fullName,
                        email,
                        password : hash,
                    });
                    
                    let token = generateToken(user)
                    res.cookie("token", token);
                    res.send(token);
                }
            });
        });

        
        
    } catch (error) {
        console.error(error);
        res.status(500).send('Error registering user');
    }
} 

module.exports.loginUser = async (req,res)=> {
    let {email , password} = req.body;

    let user = await userModel.findOne({email})
    if(user) return res.send("Email & password incorrect")

    bcrypt.compare(password, user.password, (err,result)=> {
        if(result){
            let token = generateToken(user)
            res.cookie("token", token);
            res.send("you can login ")
        }
        else{
            return res.send("Email & password incorrect")
        }
    })  
}

module.exports.logoutUser = async (req, res) => {
    res.clearCookie("token");
    res.send("you can logout ")
}

