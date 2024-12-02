import express from 'express';
import { createOrder,
getAllOrders,
getOrderById,
updateOrderStatus,
deleteOrder,
getOrdersByUserId} from "../controllers/orderController.js"

const router = express.Router();
import { verifyJWT } from '../middlewares/authMiddlewares.js';

// Create a new order
router.post('/createOrder',verifyJWT, createOrder);

// Get all orders
router.get('/getAllOrders',verifyJWT, getAllOrders);

// Get a specific order by ID
router.get('/getOrderById/:id',verifyJWT, getOrderById);

// Update order status
router.put('/updateOrderStatus/:id',verifyJWT, updateOrderStatus);

// Delete an order
router.delete('/deleteOrder/:id',verifyJWT, deleteOrder);

// Get all orders of a specific user
router.get('/getOrdersByUserId/:userId',verifyJWT, getOrdersByUserId);

export default router;
