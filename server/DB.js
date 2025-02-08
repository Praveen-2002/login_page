const mongoose = require("mongoose");

// Connect to MongoDB
require('dotenv').config({ path: __dirname + "/.env" });

class DB{
    constructor(){
        this.connectString = process.env.DB_Connection_String; // your connection string
    }

    connectToMongoose() {
        try{
            mongoose.connect(this.connectString);
            console.log("Connect to MongoDB");
        }
        catch(err){
            console.log(this.connectString);
        }
    }
}


module.exports = DB