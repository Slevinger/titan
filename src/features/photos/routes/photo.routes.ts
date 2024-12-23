import { Router } from 'express';
import PhotoController from '../controllers/photo.controller';

const router = Router();
router.get('/', PhotoController.getPhotos);

export default router;
