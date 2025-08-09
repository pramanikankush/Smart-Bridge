const mongoose = require('mongoose');

/**
 * Connect to MongoDB database with retry logic
 * Handles both development and production environments
 */
const connectDB = async () => {
  const maxRetries = 5;
  let retries = 0;

  const connect = async () => {
    try {
      const mongoUri = process.env.NODE_ENV === 'production' 
        ? process.env.MONGODB_URI_PROD 
        : process.env.MONGODB_URI;

      const conn = await mongoose.connect(mongoUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
      
      // Handle database events
      mongoose.connection.on('error', (err) => {
        console.error('MongoDB connection error:', err);
      });

      mongoose.connection.on('disconnected', () => {
        console.log('MongoDB disconnected');
        if (retries < maxRetries) {
          retries++;
          console.log(`Attempting to reconnect... (${retries}/${maxRetries})`);
          setTimeout(connect, 5000);
        }
      });

    } catch (error) {
      console.error(`MongoDB connection failed: ${error.message}`.red.underline.bold);
      
      if (retries < maxRetries) {
        retries++;
        console.log(`Retrying connection... (${retries}/${maxRetries})`);
        setTimeout(connect, 5000);
      } else {
        console.error('Max retries reached. Exiting...');
        process.exit(1);
      }
    }
  };

  await connect();
};

module.exports = connectDB;
