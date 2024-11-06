// pages/api/users.js
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

export default async function handler(req, res) {
   if (req.method === 'POST') {
    // Create a new user
    const { email, password } = req.body;

    try {
        const user = prisma.user.findUnique({
            where:{email},
        })
        if (!user){
            return res.status(401).json({ error: 'User not found' });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid password' });
          }
          const token = jwt.sign({ userId: user.id }, 'med', { expiresIn: '1h' });
          res.status(200).json({ token, user });

    } catch(error) {
        res.status(500).json({ error: 'Login failed' });

    }
  } else {
    // Method Not Allowed
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
