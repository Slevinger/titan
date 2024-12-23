import express from 'express';
import dotenv from 'dotenv';
import photoRoutes from './features/photos/routes/photo.routes';
import orderRoutes from './features/orders/routes/order.routes';

dotenv.config();

const app = express();
app.use(express.json());

// Routes
app.use('/api/photos', photoRoutes);
app.use('/api/orders', orderRoutes);

export default app;
