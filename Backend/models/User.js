const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); // To hash the password

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
        required: [true, "Please Enter Gender"],
    },
    password: {
        type: String,
        required: [true, "Please Enter Your Password"],
        minLength: [8, "Password should have at least 8 characters"],
        select: false, // Prevent the password from being returned in queries
    },
    confirmPassword: {
        type: String,
        required: [true, "Please Confirm Your Password"],
        validate: {
            // Ensure confirmPassword matches password
            validator: function (value) {
                return value === this.password;
            },
            message: "Passwords do not match",
        },
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

// Pre-save middleware to hash the password before saving to the database
userSchema.pre('save', async function (next) {
    // Only run this function if password is modified
    if (!this.isModified('password')) {
        return next();
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);

    // Remove confirmPassword field after validation
    this.confirmPassword = undefined;
    next();
});

module.exports = mongoose.model('User', userSchema);
