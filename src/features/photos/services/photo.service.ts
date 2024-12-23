import axios from 'axios';

class PhotoService {
    private API_URL = 'https://pixabay.com/api/';

    async getPhotoUrls(n: number): Promise<string[]> {
        try {
            const response = await axios.get(this.API_URL, {
                params: {
                    key: process.env.PIXABAY_API_KEY,
                    per_page: n,
                },
            });
            return response.data.hits.map((hit: any) => hit.webformatURL);
        } catch (error) {
            throw new Error('Failed to fetch photos');
        }
    }
}

export default new PhotoService();
