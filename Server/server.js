const express = require('express')
const http = require('http')
const {Server} = require('socket.io')
const cors  = require("cors");
const { default: mongoose } = require('mongoose');
require('dotenv').config();

const userRoutes = require('./Routes/user.routes');

// Initialize the app 
const app = express()

// Socket server

const server = http.createServer(app)

const io = new Server( server , {
    cors : {
        origin : "http://localhost:5173",
        methods : ["GET" , "POST"]
    }
});

app.use(express.json())
app.use(cors())


// mongodb connection

mongoose.connect(process.env.DATABASE_URL)
    .then(() => console.log("Database Connected Sucessfully"))
    .catch( (error) => console.log("Connection Error" + error));

// Using PORT from environment variables or default to 3000
const port = process.env.PORT || 3000;


// socket is a user
io.on('connection' , (socket) => {
    console.log("A user connected" , socket.id);
    
    //  if the user disconnect.

    socket.on('disconnect' ,() => {
        console.log("User Disconnected", socket.id);
        
    })
})

// Register routes
app.use('/api/users', userRoutes);

// Serve a test route
app.get('/', (req, res) => res.send('Hello World!'));

// Start the server
server.listen(port, () => console.log(`Server is running on port ${port}!`));