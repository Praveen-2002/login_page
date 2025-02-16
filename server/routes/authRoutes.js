import express from "express";
import {login, signup, tokenValidation} from "../services/authService.js"

const router = express.Router();

router.post("/signup",async (req,res)=>await signup(req,res))

router.get("/login",async (req,res)=>await login(req,res))

router.get("/validateUser",async (req,res)=>await tokenValidation(req,res))

export default router