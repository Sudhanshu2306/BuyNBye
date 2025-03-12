import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    image: { type: String, required: true }, // Storing Base64 image
    item_name: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    openToBargain: { type: String, required: true },
    quantity: { type: Number, required: true, default: 1 },
    user: { type: mongoose.Schema.ObjectId, ref: "User", required: true },
    createdAt: { type: Date, default: Date.now }
});

export const Product = mongoose.model('Product', productSchema);