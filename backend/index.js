require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");


const Contact = require("./models/index.js");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error(err));

app.listen(process.env.PORT || 5000, () => {
  console.log("Server running");
});

app.post("/contacts", async (req, res) => {
  try {
    const { name, email, phone } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({ error: 'All fields are required.' });
    }
    
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format.' });
    }
    
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      
      return res.status(400).json({ error: 'Phone must be a 10-digit number.' });
    }

    const newContact = new Contact({ name, email, phone });
    await newContact.save();
    res.status(201).json(newContact);
  } catch (err) {
    res.status(500).json({ error: 'Server error', details: err.message });
  }
});
app.get('/contacts', async (req, res) => {
  try {
    const page = 1 || parseInt(req.query.page);
    const limit = 10 || parseInt(req.query.limit);
    const skip = (page - 1) * limit;

    const contacts = await Contact.find().skip(skip).limit(limit); 
    const total = await Contact.countDocuments(); 

    res.json({
      contacts,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      totalContacts: total,
    });
  } catch (err) {
    console.error('API Error:', err);
    res.status(500).json({ error: 'Server error', details: err.message });
  }
});

app.delete("/contacts/:id", async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id); 
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
