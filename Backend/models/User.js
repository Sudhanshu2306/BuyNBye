const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter Your Name"],
    },
    email: {
        type: String,
        required: [true, "Please Enter Your Email"],
        unique: true,
    },
    gender: {
        type: String,
        required: [true, "Please Enter Gender"]
    },
    password: {
        type: String,
        required: [true, "Please Enter Your Password"],
        minLength: [8, "Password should have atleast 8 chars"],
        select: false,
    },
    designation: {
        type: String,
        default: "user",
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('User', userSchema);