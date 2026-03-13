import express from 'express';
import Contact from '../models/Contact.js';

const router = express.Router();

// POST /api/contact — save a message
router.post('/', async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;
        if (!name || !email || !subject || !message) {
            return res.status(400).json({ success: false, error: 'All fields are required.' });
        }
        const contact = await Contact.create({ name, email, subject, message });
        res.status(201).json({ success: true, message: 'Message received! I\'ll get back to you soon.', id: contact._id });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, error: 'Server error. Please try again later.' });
    }
});

// GET /api/contact — get all messages (admin)
router.get('/', async (req, res) => {
    try {
        const messages = await Contact.find().sort({ createdAt: -1 });
        res.json({ success: true, count: messages.length, data: messages });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

export default router;
