const express = require('express')
const nodemailer = require('nodemailer');
const Contact = require('../models/Contact')
const authenticateAdmin = require('../middleware/auth')

const router = express.Router()

// Email transporter setup
const transporter = nodemailer.createTransport({
  service: 'gmail', // Use your email provider (e.g., Gmail, Outlook)
  auth: {
    user: process.env.EMAIL_USER, // Your email address
    pass: process.env.EMAIL_PASS, // Your email password or app password
  },
  tls: {
    rejectUnauthorized: false, // Allow self-signed certificates
  },

});

// POST: Create a new contact form
router.post('/', async (req, res) => {
  try {
    const { name, email, message, company } = req.body

    const newContact = new Contact({
      name,
      email,
      message,
      company,
    })

    // save to database
    await newContact.save()

    // Send email notification
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Your private email address
      subject: `New Contact Form Submission from ${name}`,
      html: `
      <p>You have received a new contact form submission on your UxiCode website.</p>
      <h1>Details of the submission:</h1>

      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company || 'N/A'}</p>
      <p><strong>Message:</strong> ${message}</p>

      <p>Enjoy your day!
      <br>Your <strong>UxiCode team.</strong></p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(201).send({ message: 'Form submitted successfully!' })
  } catch (error) {
    console.error('Error saving contact form submission:', error)

    // Handle Mongoose validation errors
    if (error.name === 'ValidationError') {
      const validationErrors = Object.values(error.errors).map((err) => err.message)
      return res.status(400).send({ error: 'Validation Error', details: validationErrors })
    }

    res.status(500).send({ error: 'An error occurred while submitting the form. Please try again later.' })
  }
})

// GET: Retrieve all contacts (admin only)
router.get('/', authenticateAdmin, async (req, res) => {
  try {
    const contacts = await Contact.find()
    res.status(200).json(contacts)
  } catch (error) {
    console.error('Error retrieving contact form submissions: ', error)
    res.status(500).send({ error: 'Failed to fetch contact form submissions' })
  }
})

// GET: Retrieve a specific contact by ID (admin only)
router.get('/:id', authenticateAdmin, async (req, res) => {
  try {
    const { id } = req.params
    const contact = await Contact.findById(id)

    if (!contact) {
      return res.status(404).send({ error: 'Contact form submition ID not found.' })
    }

    res.status(200).json(contact)
  } catch (error) {
    console.error('Error retrieving contact form submission:', error)
    res.status(500).send({ error: 'Failed to fetch the contact form submission.' })
  }
})

// DELETE: Delete a contact by ID (admin only)
router.delete('/:id', authenticateAdmin, async (req, res) => {
  try {
    const { id } = req.params

    const contact = await Contact.findById(id);
    if (!contact) {
      return res.status(404).send({ error: 'Contact form submission not found.' })
    }

    await Contact.findByIdAndDelete(id)
    res.status(200).send({ message: 'Contact form submission deleted successfully!' })
  } catch (error) {
    console.error('Error deleting contact form submission:', error)
    res.status(500).send({ error: 'Failed to delete the contact form submission.' })
  }
})

module.exports = router
