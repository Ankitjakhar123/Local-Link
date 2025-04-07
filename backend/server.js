import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/monodb.js';
import connectCloudinary from './config/cloudinary.js'; // ❌ Fix: remove space after 'from'

import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';

// App Config
const app = express();
const port = process.env.PORT || 4000;

connectDB();
connectCloudinary();

// Middleware
app.use(express.json());
app.use(cors());

// API Endpoints
app.use('/api/user', userRouter);
app.use('/api/product',productRouter )

app.get('/', (req, res) => {
  res.send("✅ API is working");
});

// Start Server
app.listen(port, () => console.log(`🚀 Server started on PORT: ${port}`));
