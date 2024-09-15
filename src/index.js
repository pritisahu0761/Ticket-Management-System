import dotenv from 'dotenv';
import connectDB from './db/index.js';
import app from './app.js';

dotenv.config();
connectDB();
app;