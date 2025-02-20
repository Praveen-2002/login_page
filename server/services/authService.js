import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import User from "../models/User.js"
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
        let new_user = User.create(user)
        let token = jwt.sign({data: new_user._id},JWT_SECRET,{expiresIn: JWT_EXPIRATION})
        res.cookie("authtoken",token,{httpOnly: true, secure: true, sameSite:"None", maxAge: Date.now() + 1000*60*60*cooikieExpiration(JWT_EXPIRATION)})
        return res.status(201).json({success:true, message:"User Created"})
    }
    catch(err){
        return res.status(400).json(err)
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

    res.cookie("authtoken",token,{httpOnly: true, secure: true, sameSite: "None", maxAge: Date.now() + 1000*60*60*cooikieExpiration(JWT_EXPIRATION)})
    res.status(201).json({success:true, message:"User Logged In"})

    return res.send()
}

export const tokenValidation = async(req,res) =>{
    let cookies = parseCookie(req.headers?.cookie)
    if(!cookies?.authtoken){
        return res.status(401).json({success: false, message: "User is unauthorized"})
    }
    let validToken = tokenVerification(cookies.authtoken)
    if(!validToken){
        return res.status(401).json({success: false, message: "User is unauthorized"})
    }
    return res.status(200).json({success:true, message: "Welcom Back"})
}

const cooikieExpiration = (time) =>{
    let timeInHours = time.split("h")[0]
    return timeInHours
}

const parseCookie = (cookies) => {
    if (!cookies){
        return {}
    }
    let list = cookies.split(";");
    let Parsedcookies = {}
    list.forEach(element => {
        let [key,value] = element.split("=");
        Parsedcookies[key] = value
    });
    return Parsedcookies
}

const tokenVerification = (token)=>{
    try{
        let res = jwt.verify(token, JWT_SECRET)
        if(res){
            return true
        }
    }
    catch(err){
        return false
    }
}