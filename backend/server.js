import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js'

dotenv.config();

const app = express();
const PORT = 5000;
console.log(process.env.MONGO);
console.log(process.env.JWT_SECRET)
// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
    credentials: true
}));

// Connect to MongoDB
mongoose.connect(process.env.MONGO)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error(err));

app.use('/auth', authRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port 5000`);
});