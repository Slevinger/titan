import OrderModel, { IOrder } from '../models/order.model';

class OrderService {
    async createOrder(data: Partial<IOrder>): Promise<IOrder> {
        const newOrder = new OrderModel(data);
        return await newOrder.save();
    }

    async getOrdersByUser(user: string): Promise<IOrder[]> {
        return await OrderModel.find({ user });
    }
}

export default new OrderService();
