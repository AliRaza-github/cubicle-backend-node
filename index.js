const serverless = require('serverless-http');
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

// auth route 
const authRoutes = require("./src/routes/authRoute");
app.use('/api/auth', authRoutes);

// admin route
const adminRoutes = require("./src/routes/adminRoute");
app.use('/api/admin', adminRoutes);

app.get ("/home",(req,res)=>{
    res.send("home vercel")
})


mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err));


// const port = process.env.PORT;
// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });

module.exports = app;
module.exports.handler = serverless(app);

