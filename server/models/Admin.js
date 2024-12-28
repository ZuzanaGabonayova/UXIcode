const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema(
    {
        username: 
        {
            type: String,
            required: true,
            unique: true,
            min: 6,
            max: 255
        },
        email: 
        {
            type: String,
            required: true,
            min: 6,
            max: 255,
            unique: true,
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
        },
        password: 
        {
            type: String,
            required: true,
            min: 6,
            max: 255
        },
        date: 
        {
            type: Date,
            default: Date.now
        }
    }
);

module.exports = mongoose.model('Admin', adminSchema);