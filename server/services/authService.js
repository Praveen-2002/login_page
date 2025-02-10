import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import User from "../models/User.js"
import mongoose from "mongoose"
import {JWT_SECRET,JWT_EXPIRATION} from "../env.js"

export const signup = async (req,res)=>{
    let {name, email, password} = req.headers;
    if (!password){
        return res.status(400).json({"message":"Passwod is required"})
    }

    let hashedPassword = await bcrypt.hashSync(password, 10);
    let user = new User({
        name,
        email,
        password: hashedPassword
    })
    try{
        let new_user = User.create([user],session)
        let token = jwt.sign({data: new_user._id},JWT_SECRET,{expiresIn: JWT_EXPIRATION})
        res.status(201).json({new_user,token})
    }
    catch(err){
        res.status(400).json(err)
    }
}

export const login = async (req,res)=>{
    let {email, password} = req.headers;
    let existingUser = await User.findOne({email})
    if (!existingUser){
        return res.status(401).json({"message":"Eamil does not exist"})
    }
    
    let validPasswod = await bcrypt.compare(password, existingUser.password);
    if (!validPasswod){
        return res.status(401).json({"message":"Password does not match"})
    }

    let token = jwt.sign({data: existingUser._id},JWT_SECRET,{expiresIn: JWT_EXPIRATION})
    
    return res.status(200).json({token})
}

export const tokenValidation = async(req,res,next) =>{
    if (!req.token){
        return res.status(401).json({message: "Session Expired"})
    }

    let validate_token = await jwt.verify(req.token,JWT_SECRET);
    if (!validate_token){
        return res.status(401).json({message: "Unautherized Access"})
    }

    req.valid_user = true
    next()
}