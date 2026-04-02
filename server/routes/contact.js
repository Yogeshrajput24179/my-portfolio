import express from "express";
import rateLimit from "express-rate-limit";
import { body, validationResult } from "express-validator";
import nodemailer from "nodemailer";
import Contact from "../models/Contact.js";

const router = express.Router();

// Rate limit: max 5 messages per hour per IP
const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 5,
  message: { error: "Too many messages sent. Please try again later." },
});

const validateContact = [
  body("name").trim().notEmpty().withMessage("Name is required").isLength({ max: 100 }),
  body("email").trim().isEmail().withMessage("Valid email is required").normalizeEmail(),
  body("subject").trim().notEmpty().withMessage("Subject is required").isLength({ max: 200 }),
  body("message").trim().notEmpty().withMessage("Message is required").isLength({ min: 10, max: 2000 }),
];

// POST /api/contact
router.post("/", contactLimiter, validateContact, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, subject, message } = req.body;

  try {
    // Save to MongoDB
    const contact = new Contact({
      name, email, subject, message,
      ipAddress: req.ip,
    });
    await contact.save();

    // Send email notification (optional — won't fail if not configured)
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
      });
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_TO || process.env.EMAIL_USER,
        subject: `[Portfolio] ${subject} — from ${name}`,
        html: `<h3>New message from your portfolio</h3>
               <p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Subject:</strong> ${subject}</p>
               <p><strong>Message:</strong></p><p>${message}</p>`,
      });
    }

    res.status(201).json({ success: true, message: "Message sent successfully!" });
  } catch (err) {
    console.error("Contact error:", err.message);
    res.status(500).json({ error: "Server error. Please try again." });
  }
});

// GET /api/contact — fetch all messages (admin use)
router.get("/", async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
