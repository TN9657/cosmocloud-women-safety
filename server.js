const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const otpRoutes = require('./routes/otpRoutes');
const imageRoutes = require('./routes/imageRoutes');
const locationRoutes = require('./routes/locationRoutes');

dotenv.config();

const app = express();
app.use(express.json());

// MongoDB Atlas connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/otp', otpRoutes);
app.use('/api/image', imageRoutes);
app.use('/api/location', locationRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
