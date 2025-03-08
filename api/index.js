import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import userRouter from './routes/user.route.js'; 
import authRouter from './routes/auth.route.js';
import { s } from 'framer-motion/client';
dotenv.config();
mongoose.connect(process.env.MONGO).then(() => {
    console.log('Connected to MongoDB!');
    }).catch((err) => {
    console.log('Failed to connect to MongoDB!', err);
    });

const app = express();
app.use(express.json());
app.listen(3000, () => {
    console.log('Server is running on 3000!');
});


app.use('/api/users', userRouter);
// app.use('/api/users', userRouter);
app.use('/api/auth', authRouter);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json(
        { 
            success: false,
            statusCode,
            message,
        });
    });