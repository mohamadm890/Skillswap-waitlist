import { authenticate } from './auth/authencation';

export default async function handler(req, res) {
    await authenticate(req, res, () => {
      res.status(200).json({ message: 'Protected data' });
    });
  }