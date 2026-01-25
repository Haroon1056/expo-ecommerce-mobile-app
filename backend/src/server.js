import express from 'express';
import { ENV } from './config/env.js';
import { clerkMiddleware } from '@clerk/express';
import path from 'path';
import { connectDB } from './config/db.js';

const app = express();

app.use(clerkMiddleware({
  publishableKey: ENV.CLERK_PUBLISHABLE_KEY,
  secretKey: ENV.CLERK_SECRET_KEY,
}));

// Health check endpoint
// localhost:3000/api/health 
app.get('/api/health', (req, res) => {
  res.status(200).json({ message: 'Server is healthy' });
});


// make our app ready for deployment
const __dirname = path.resolve();

if(ENV.NODE_ENV === 'production'){
  app.use(express.static(path.join(__dirname, '../admin/dist')));

  app.get('/{*any}', (req, res) => {
    res.sendFile(path.join(__dirname, "../admin", "dist", "/index.html"));
  });
}

app.listen(ENV.PORT, () => {
  console.log(`Server is running on port ${ENV.PORT} is healthy`);
  connectDB();
});