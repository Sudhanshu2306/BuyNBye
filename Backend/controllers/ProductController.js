import { Product } from '../models/Product.js';
import { asyncHandler } from '../utils/asynchandler.js';
import { errorhandler } from '../utils/errorHandler.js';
import { ApiResponse } from '../utils/ApiResponse.js';
// Create a new product
const createProduct = asyncHandler(async (req, res) => {
    const { name, description, highlights, specifications, price, openToBargain, images, brand, category, quantity } = req.body;

    if ([name, description, highlights, specifications, price, openToBargain, images, brand, category, quantity].some(field => !field)) {
        return res.status(400).json(new errorhandler(400, "All fields are required"));
    }

    const product = new Product({
        name,
        description,
        highlights,
        specifications,
        price,
        openToBargain,
        images,
        brand,
        category,
        quantity,
        user: req.user._id
    });

    await product.save();

    res.status(201).json(
        new ApiResponse(201,product,"Product Added Successfully")
    );
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

// Update a product by ID
const updateProduct = asyncHandler(async (req, res) => {
    const { name, description, highlights, specifications, price, openToBargain, images, brand, category, quantity } = req.body;

    let product = await Product.findById(req.params.id);

    if (!product){
        return res.status(404).json(new errorhandler(404, "Product not found"));
    }

    product.name = name || product.name;
    product.description = description || product.description;
    product.highlights = highlights || product.highlights;
    product.specifications = specifications || product.specifications;
    product.price = price || product.price;
    product.openToBargain = openToBargain || product.openToBargain;
    product.images = images || product.images;
    product.brand = brand || product.brand;
    product.category = category || product.category;
    product.quantity = quantity || product.quantity;

    await product.save();
    res.status(200).json(
        new ApiResponse(
            200, 
            {
                product
            },
            "Product updated successfully"
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


export { createProduct, getAllProducts, getProductById, updateProduct, deleteProduct };
