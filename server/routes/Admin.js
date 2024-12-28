const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Admin = require('../models/Admin')
require('dotenv').config()

const authenticateAdmin = require('../middleware/auth')

const router = express.Router()

// Register a new admin
router.post('/register', async (req, res) => {
    try {
      const { username, email, password } = req.body;
  
      // Check if the username already exists
      const existingUsername = await Admin.findOne({ username });
      if (existingUsername) {
        return res.status(400).send({ error: 'The username is already in use. Please choose a different username.' });
      }
  
      // Check if the email already exists
      const existingEmail = await Admin.findOne({ email });
      if (existingEmail) {
        return res.status(400).send({ error: 'The email address is already in use. Please use a different email address.' });
      }
  
      // Hash the password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
  
      // Create a new admin
      const newAdmin = new Admin({
        username,
        email,
        password: hashedPassword,
      });
  
      await newAdmin.save();
      res.status(201).send({
        message: 'Admin registered successfully! You can now log in with your credentials.',
      });
    } catch (error) {
      console.error('Error during admin registration:', error);
      res.status(500).send({ error: 'An error occurred while registering the admin. Please try again later.' });
    }
  });
  

// Admin login
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body

    // Check if admin exists
    const admin = await Admin.findOne({ username })
    if (!admin) {
      return res.status(400).send({ error: 'Invalid username or password.' })
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, admin.password)
    if (!isMatch) {
      return res.status(400).send({ error: 'Invalid username or password.' })
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: admin._id, username: admin.username },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    )

    res.status(200).send({ token })
  } catch (error) {
    console.error('Error during admin login:', error)
    res.status(500).send({ error: 'Failed to login.' })
  }
})

// Get all admins (Protected Route)
router.get('/', authenticateAdmin, async (req, res) => {
  try {
    // Fetch all admins from the database, excluding passwords
    const admins = await Admin.find({}, '-password') // Exclude the password field
    res.status(200).json(admins)
  } catch (error) {
    console.error('Error fetching admins:', error)
    res.status(500).send({ error: 'Failed to fetch admins.' })
  }
})

// Delete an admin by ID (Protected Route)
router.delete('/:id', authenticateAdmin, async (req, res) => {
  try {
    const { id } = req.params

    // Check if the admin being deleted exists
    const admin = await Admin.findById(id)
    if (!admin) {
      return res.status(404).send({ error: 'Admin not found' })
    }

    // Prevent self-deletion (optional)
    if (req.admin.id === id) {
      return res.status(403).send({ error: 'Admins cannot delete themselves.' })
    }

    // Delete the admin
    await Admin.findByIdAndDelete(id)
    res.status(200).send({ message: 'Admin deleted successfully!' })
  } catch (error) {
    console.error('Error deleting admin:', error)
    res.status(500).send({ error: 'Failed to delete admin.' })
  }
})

module.exports = router
