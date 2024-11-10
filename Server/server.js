const express = require('express')
const cors  = require("cors");
const { default: mongoose } = require('mongoose');
require('dotenv').config();

const userRoutes = require('./Routes/user.routes');
const { applyDefaults } = require('./Models/user.model');

// Initialize the app 
const app = express()


app.use(express.json())
app.use(cors())


// mongodb connection

mongoose.connect(process.env.DATABASE_URL)
    .then(() => console.log("Database Connected Sucessfully"))
    .catch( (error) => console.log("Connection Error" + error));

// Using PORT from environment variables or default to 3000
const port = process.env.PORT || 3000;


// Register routes
app.use('/api/users', userRoutes);

// Serve a test route
app.get('/', (req, res) => res.send('Hello World!'));

// Start the server
app.listen(port, () => console.log(`Server is running on port ${port}!`));