import { asyncHandler } from '../utils/asynchandler.js';
import { Order } from '../models/Order.js';
// import { Product } from '../models/Product';
import { ApiResponse } from '../utils/ApiResponse.js';

// Create a new order
const createOrder = asyncHandler(async (req, res) => {
    const { collectionInfo, orderItems, user, paymentInfo, paidAt, totalPrice, orderStatus } = req.body;

    // Validate order items
    if (!orderItems || orderItems.length === 0) {
        return res.status(400).json({ success: false, message: 'No items in the order' });
    }
    // Create the order
    const order = new Order({
        collectionInfo,
        orderItems,
        user : req.user._id,
        paymentInfo,
        totalPrice,
        orderStatus: orderStatus || 'Processing',
    });

    await order.save();
    res.status(201).json(
        new ApiResponse(201,order,"ordered Successfully")
    );
});

// Get all orders
const getAllOrders = asyncHandler(async (req, res) => {
    const orders = await Order.find()
        .populate('user')
        .populate('orderItems.product');
        
    res.status(200).json({
        success: true,
        orders
    });
});

// Get an order by ID
const getOrderById = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id)
        .populate('user')
        .populate('orderItems.product');

    if (!order) {
        return res.status(404).json({ success: false, message: 'Order not found' });
    }

    res.status(200).json({
        success: true,
        order
    });
});

// Update order status
const updateOrderStatus = asyncHandler(async (req, res) => {
    const { orderStatus, deliveredOn, collectedOn } = req.body;

    const order = await Order.findById(req.params.id);

    if (!order) {
        return res.status(404).json({ success: false, message: 'Order not found' });
    }

    if (orderStatus) order.orderStatus = orderStatus;
    if (deliveredOn) order.deliveredOn = deliveredOn;
    if (collectedOn) order.collectedOn = collectedOn;

    await order.save();
    res.status(200).json(new ApiResponse(
        200, 
        {
            order : order
        },
        "Order Updated successfully"
    ));
});

// Delete an order
const deleteOrder = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);

    if (!order) {
        return res.status(404).json({ success: false, message: 'Order not found' });
    }

    await order.deleteOne({ _id: req.params.id });

    res.status(200).json(
        new ApiResponse(
            200, 
            {
                
            },
            "Order deleted successfully"
        )
    );
});

// Get all orders of a specific user
const getOrdersByUserId = asyncHandler(async (req, res) => {
    const orders = await Order.find({ user: req.params.userId })
        .populate('orderItems.product')
        .populate('user');

    res.status(200).json({
        success: true,
        orders
    });
});

export {
    createOrder,
    getAllOrders,
    getOrderById,
    updateOrderStatus,
    deleteOrder,
    getOrdersByUserId
};
