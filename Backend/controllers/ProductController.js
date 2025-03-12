import { Product } from '../models/Product.js';
import { asyncHandler } from '../utils/asynchandler.js';
import { errorhandler } from '../utils/errorHandler.js';
import { ApiResponse } from '../utils/ApiResponse.js';
// Create a new product
const createProduct = asyncHandler(async (req, res) => {
    try {
        const { image, item_name, category, price, description, openToBargain, quantity, user } = req.body;

        if (!image || !item_name || !category || !price || !description || !openToBargain || !quantity || !user) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }

        const product = new Product({ image, item_name, category, price, description, openToBargain, quantity, user });
        await product.save();

        res.status(201).json({ success: true, message: "Product uploaded successfully!", product });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

// Get all products
const getAllProducts = asyncHandler(async (req, res) => {
    const products = await Product.find();

    res.status(200).json(
        new ApiResponse(
            200,
            products,
            "All The Products Generated"
        )
    )
});


const getProductById = asyncHandler(async (req, res) => {
    console.log(req.params.id)
    const product = await Product.findById(req.params.id);

    if (!product) {
        return res.status(404).json(new errorhandler(404, "Product not found"));
    }

    res.status(200).json(
        new ApiResponse(
            200, 
            {
                product
            },
            "Particular id Product Generated"
        )
    );
});

// Delete a product by ID
const deleteProduct = asyncHandler(async (req, res) => {
    // Find the product by its ID
    const product = await Product.findById(req.params.id);
    
    // Log the product for debugging
    
    // If the product doesn't exist, return an error response
    if (!product) {
        return res.status(404).json(new errorhandler(404, "Product not found"));
    }

    // Use deleteOne() instead of remove()
    await Product.deleteOne({ _id: req.params.id });

    // Send a success response
    res.status(200).json(
        new ApiResponse(
            200, 
            {
                
            },
            "Product deleted successfully"
        )
    );
});


export { createProduct, getAllProducts, getProductById, deleteProduct };
