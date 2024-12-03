// const mongoose = require('mongoose');
import mongoose from "mongoose";
const orderSchema = new mongoose.Schema({
    collectionInfo: {
        meeting_spot: {
            type: String,
            required: true
        },
        phoneNo: {
            type: Number,
            required: true
        },
    },
    orderItems: [
        {
            name: {
                type: String,
                required: true
            },// Updated when order is collected
            price: {
                type: Number,
                required: true
            },
            quantity: {
                type: Number,
                required: true
            },
            image: {
                type: String,
                required: true,
            },
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product",
                required: true
            },
        },
    ],
    user: {
        type: mongoose.Schema.Types.ObjectId, // auto inc
        ref: "User",
        required: true
    },
    paymentInfo: {
        mode: {
            type: String,
            required: [true, "Please Enter Payment Mode"],
            enum: ["CASH", "UPI", "POD", "COD"],
        },
        status: {
            type: String,
            required: true,
            enum: ["Pending", "Completed"],
            default: "Pending"
        }
    },
    totalPrice: {
        type: Number,
        required: true,
        default: 0
    },
    orderStatus: {
        type: String,
        required: true,
        enum: ["Processing", "Delivered"],
        default: "Processing",
    },
    deliveredOn: {
        type: Date,
        default: null
    },
    collectedOn: {
        type: Date,
        default: null
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});

// Calculate total price dynamically when saving the order
orderSchema.pre('save', function(next) {
    if (this.orderItems && this.orderItems.length > 0) {
        this.totalPrice = this.orderItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    }
    next();
});

export const Order = mongoose.model("Order", orderSchema);
