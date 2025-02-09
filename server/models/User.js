import mongoose from "mongoose"

const userSchema = new mongoose.Schema( {
    name: {
        type: String,
        required: [true, "User Name is required"]
    },
    
    email: {
        type: String,
        required: [true, "Eamil is required"],
        unique: true,
        lowercase: true,
        trim: true
    },

    password : {
        type: String,
        required: [true, "Password is required"]
    },

    createdOn: {
        type: Date,
        default: Date.now()
    }
})

const User = mongoose.model("User_details", userSchema);

export default User;