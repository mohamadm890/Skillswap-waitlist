// middleware/authenticate.js
import jwt from 'jsonwebtoken';

export const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]; // Extract token from header

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  jwt.verify(token, 'med', (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Forbidden' });
    }
    req.user = user; // Store user data in request
    next(); // Call the next middleware or handler
  });
};
