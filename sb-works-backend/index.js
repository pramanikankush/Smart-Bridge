const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const colors = require('colors');

// Load environment variables
dotenv.config();

// Optional database connection (comment out if MongoDB isn't available)
// Database connection disabled for initial testing
console.log('Database connection skipped - running in mock mode'.yellow);

// Create Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Basic route
app.get('/', (req, res) => {
  res.json({
    message: 'SB Works Backend API',
    version: '1.0.0',
    status: 'Running'
  });
});

// API Routes (placeholder)
app.get('/api/freelancer/stats', (req, res) => {
  res.json({
    totalEarnings: 25750,
    activeProjects: 3,
    completedProjects: 12,
    pendingApplications: 5,
    averageRating: 4.8,
    totalReviews: 15
  });
});

app.get('/api/freelancer/projects/recent', (req, res) => {
  res.json([
    {
      _id: '1',
      title: 'E-commerce Website Development',
      client: { name: 'John Doe' },
      budget: 5000,
      deadline: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      status: 'in_progress',
      progress: 65
    },
    {
      _id: '2',
      title: 'Mobile App UI Design',
      client: { name: 'Jane Smith' },
      budget: 3000,
      deadline: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
      status: 'in_progress',
      progress: 40
    }
  ]);
});

app.get('/api/freelancer/applications/recent', (req, res) => {
  res.json([
    {
      _id: '1',
      project: { title: 'React Native App Development' },
      bidAmount: 4500,
      status: 'pending',
      createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000)
    },
    {
      _id: '2',
      project: { title: 'WordPress Website Customization' },
      bidAmount: 1500,
      status: 'pending',
      createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000)
    }
  ]);
});

app.get('/api/freelancer/earnings/recent', (req, res) => {
  res.json([
    { month: 'Jan', amount: 3500 },
    { month: 'Feb', amount: 4200 },
    { month: 'Mar', amount: 3800 },
    { month: 'Apr', amount: 5100 },
    { month: 'May', amount: 4650 },
    { month: 'Jun', amount: 4500 }
  ]);
});

// Health check route
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date() });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    error: 'Route not found',
    path: req.originalUrl
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err.message);
  res.status(500).json({
    error: 'Internal Server Error',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong'
  });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`.blue.bold);
  console.log(`Health check: http://localhost:${PORT}/health`.green);
  console.log(`API Base: http://localhost:${PORT}/api`.green);
});
