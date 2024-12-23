import mongoose, { Schema, Model } from 'mongoose';

// Define the Order interface (plain object)
export interface IOrder {
    email: string;
    fullName: string;
    fullAddress: string;
    images: string[];
    frameColor: string;
    user: string;
}

// Extend the Mongoose Model with IOrder
export interface IOrderModel extends Model<IOrder> {}

// Define the Order schema
const OrderSchema = new Schema<IOrder>(
    {
        email: { type: String, required: true },
        fullName: { type: String, required: true },
        fullAddress: { type: String, required: true },
        images: { type: [String], required: true },
        frameColor: { type: String, required: true },
        user: { type: String, required: true },
    },
    { timestamps: true }
);

// Export the model
const OrderModel = mongoose.model<IOrder, IOrderModel>('Order', OrderSchema);
export default OrderModel;
