import { Request, Response } from 'express';
import PhotoService from '../services/photo.service';

class PhotoController {
    async getPhotos(req: Request, res: Response): Promise<void> {
        try {
            const { n } = req.query;
            const photoUrls = await PhotoService.getPhotoUrls(Number(n));
            res.status(200).json(photoUrls);
        } catch (error) {
            res.status(500).json({ message: 'Failed to fetch photos' });
        }
    }
}

export default new PhotoController();
