const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required"]
    },
    lastName: {
        type: String,
        required: [true, "Last name is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"]
    }
},{
    timestamps: true
});


const User = mongoose.model('User', userSchema);
module.exports = User;