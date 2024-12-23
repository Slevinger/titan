import { Router } from 'express';
import OrderController from '../controllers/order.controller';

const router = Router();
router.post('/', OrderController.createOrder);
router.get('/:user', OrderController.getOrders);

export default router;
