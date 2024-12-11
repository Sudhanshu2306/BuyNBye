import express from 'express';
import cors from 'cors'
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

// Initialize express app
const app = express();
const port = process.env.PORT || 3000;

// Middleware setup
app.use(cors({
    origin: 'http://localhost:5173',
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
}));

app.use(cookieParser());
app.use(express.json({ limit: "16kb" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// // Routes
import authroutes from "./routes/auth.Routes.js"
import productroutes from "./routes/Product.Routes.js"
import orderroutes from "./routes/order.Routes.js"
app.use("/api/v1/users", authroutes);
app.use("/api/v1/products", productroutes);
app.use("/api/v1/orders", orderroutes);

export { app, port };