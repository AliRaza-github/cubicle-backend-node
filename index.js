const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();

const app = express();
app.use(express.json());

// auth route 
const authRoutes = require("./src/routes/authRoute");
app.use('/api/auth', authRoutes);

// admin route
const adminRoutes = require("./src/routes/adminRoute");
app.use('/api/admin', adminRoutes);


mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err));

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

