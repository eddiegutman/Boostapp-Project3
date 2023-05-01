// import libraries 
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/database");

// import routers
const membersRouter = require('./routers/membersRouter');
const moviesRouter = require('./routers/moviesRouter');
const subscriptionsRouter = require('./routers/subscriptionsRouter');

// create the server
const app = express();
const port = 8000;

// connect to the database
connectDB();

// server settings
app.use(express.json());
app.use(cors());

// server routing
app.use("/members", membersRouter);
app.use("/movies", moviesRouter);
app.use("/subscriptions", subscriptionsRouter);

// run the server
app.listen(port, ()=> {
    console.log("Server is running");
})