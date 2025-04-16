const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

console.log('Mongo URI:', process.env.MONGO_URI);


const authRoutes = require('./routes/auth');

const app = express();

//Middleware
app.use(cors());
app.use(express.json());

//routes
app.use('/api',authRoutes);

//mongodb Connection
mongoose.connect(process.env.Mongo_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(()=>{
  console.log('MongoDB Connected');
}).catch((err)=> {
  console.log('MongoDB connection error',err.message)
});

//start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
  console.log(`Server running on http://localhost:${PORT}`)
});