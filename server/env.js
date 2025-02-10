import { config } from "dotenv";

config({path: `.env.${process.env.NODE_ENV || "dev"}.local`})

export const {DB_Connection_String, JWT_SECRET, JWT_EXPIRATION} = process.env