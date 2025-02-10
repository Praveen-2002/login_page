import mongoose from "mongoose"
import {DB_Connection_String} from "./env.js"

class DB{
    constructor(){
        this.connectString = DB_Connection_String; // your connection string
    }

    async connectToMongoose() {
        try{
            await mongoose.connect(this.connectString);
            console.log("Connect to MongoDB",this.connectString);
        }
        catch(err){
            console.log(this.connectString);
        }
    }
}

export default DB;