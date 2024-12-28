const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')

const contactRoutes = require('./routes/Contact');
const adminRoutes = require('./routes/Admin');

require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors({
  origin: ['https://uxicode.com', 'http://localhost:3000'], // Allow requests from frontend https://uxicode.com/ or http://localhost:3000
  methods: 'GET,POST,DELETE', // Specify allowed methods
}));
app.use(bodyParser.json())


// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((error) => console.error('MongoDB connection error:', error))


// API Route
app.use('/api/contact', contactRoutes);

app.use('/api/admin', adminRoutes);


// Start Server
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
)

module.exports = app