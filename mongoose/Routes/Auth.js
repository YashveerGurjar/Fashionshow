const express = require('express');
const route = express.Router();
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');
const UserModel = require('../Models/User');

route.post("/Register", async (req, res) => {
    var ciphertext = CryptoJS.AES.encrypt(req.body.password, process.env.pass).toString();
    // console.log("encrypted password: ", ciphertext)

    const data = new UserModel({
        username: req.body.username,
        email: req.body.email,
        password: ciphertext,
        isSeller:req.body.isSeller
    })
    try {
        const username = await UserModel.findOne({ username: data.username });
        const userEmail = await UserModel.findOne({ email: data.email })
        console.log("username", username);
        console.log("useremail", userEmail);
        if (username && userEmail) {
            res.status(200).json({ message: "Username and email both are alerdy exist" });
        } else if (username) {

            res.status(200).json({ message: "User alerdy exist" });
        } else if (userEmail) {
            res.status(200).json({ message: "Email alerdy exist" });
        } else {
            const savedata = await data.save();
            res.status(201).json(savedata);
        }
    }
    catch (err) {
        res.status(500).json(err);
    }
})


route.post("/Login", async (req, res) => {
    console.log(req.body);
    try {
        const user = await UserModel.findOne({ username: req.body.username });
        if (!user) {
            console.log("inside block");
            res.status(201).json({ message: "User doesn't exist" });
        } else {
            const hashedPass = CryptoJS.AES.decrypt(user.password, process.env.pass);
            const userpass = hashedPass.toString(CryptoJS.enc.Utf8);
            
            console.log("outside  block");
            if (userpass !== req.body.password) {

                res.status(401).send({ message: " wrong password " });
            } else {
                const accessToken = jwt.sign({
                    id: user._id,
                    isSeller: user.isSeller
                },
                    process.env.jwttkn,
                    {
                        expiresIn: "3d"
                    },
                )
                const { password, ...other } = user._doc;
                res.status(200).json({ ...other, accessToken });
                console.log("Working Properly");
            }
        }
    }
    catch (err) {
        res.status(500).json(err);
    }
})
module.exports = route;