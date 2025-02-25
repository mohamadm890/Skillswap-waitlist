
// pages/api/users.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    // Fetch all users
    const users = await prisma.user.findMany();
    res.json(users);
  } else if (req.method === 'POST') {
    // Create a new user
    const { email, password } = req.body;

    const user = await prisma.user.create({
      data: {
        email,
        password,
      },
    });
    res.status(201).json(user);
  } else {
    // Method Not Allowed
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
