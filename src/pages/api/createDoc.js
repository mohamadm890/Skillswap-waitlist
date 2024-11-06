// pages/api/createDocument.js

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { title, id } = req.body; // Extract title and id from the request body

    if (!title || !id) {
      return res.status(400).json({ message: 'Title and ID are required' });
    }

    try {
      const newDocument = await prisma.document.create({
        data: {
          id,
          title
           
        },
      });
      res.status(201).json(newDocument); // Send the created document as response
    } catch (error) {
      console.error('Error creating document:', error);
      res.status(500).json({ message: 'Error creating document' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
