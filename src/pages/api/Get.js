
// pages/api/users.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    // Fetch all users
    const documents = await prisma.document.findMany();
    res.status(200).json(documents);

  } else {
    // Method Not Allowed
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
