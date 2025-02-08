const mongoose = require("mongoose");
const express = require("express");
const User = require("../models/User")

const router = express.Router();

router.post("/register",(req,res)=>{
    let [Email, Password] = [req.headers.email, req.headers.password];
    let user = new User({
        email: Email,
        password: Password
    })
    user.save().then((data)=>{
        res.status(200).json({"User Saved": data});
    })
    .catch((err)=>{
        res.status(400).json({"User not saved": err});
    })
})

module.exports = router