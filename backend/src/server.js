import express from 'express';

const app = express();

// Health check endpoint
// localhost:3000/api/health
app.get('/api/health', (req, res) => {
  res.status(200).json({ message: 'Server is healthy' });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000 is healthy');
});