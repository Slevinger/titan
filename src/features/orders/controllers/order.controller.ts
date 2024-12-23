import { Request, Response } from 'express';
import OrderService from '../services/order.service';

class OrderController {
    async createOrder(req: Request, res: Response): Promise<void> {
        try {
            const order = await OrderService.createOrder(req.body);
            res.status(201).json(order);
        } catch (error) {
            res.status(400).json({ message: 'Failed to create order', error });
        }
    }

    async getOrders(req: Request, res: Response): Promise<void> {
        try {
            const { user } = req.params;
            const orders = await OrderService.getOrdersByUser(user);
            res.status(200).json(orders);
        } catch (error) {
            res.status(500).json({ message: 'Failed to fetch orders', error });
        }
    }
}

export default new OrderController();
