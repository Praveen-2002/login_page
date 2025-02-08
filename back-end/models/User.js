const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {

    email: {
        type: String,
        require: true,
        unique: true
    },

    password : {
        type: String,
        require: true
    },

    createdOn: {
        type: Date,
        default: Date.now()
    }
})

const User = mongoose.model("User_details", userSchema);

module.exports = User