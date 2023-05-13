// import libraries 
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/database");
const session = require('express-session');
const MongoStore = require('connect-mongo');
const passport = require('passport');
const LocalStrategy = require('passport-local');

const User = require('./models/userModel');

// import routers
const membersRouter = require('./routers/membersRouter');
const moviesRouter = require('./routers/moviesRouter');
const subscriptionsRouter = require('./routers/subscriptionsRouter');
const usersRouter = require('./routers/usersRouter');
const authenticationRouter = require('./routers/authenticationRouter');

// create the server
const app = express();
const port = 8000;

// connect to the database
connectDB();

// middleware
app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    cookie: {
        httpOnly: true,
        secure: false,
        sameSite: 'none',
        expires: Date.now() + 1000 * 60 * 60 * 24,
        maxAge: 1000 * 60 * 60 * 24
    }
}));

// sessions
app.use(
    session({
        secret: "boostapp",
        resave: false,
        saveUninitialized: false,
        store: new MongoStore({ mongoUrl: "mongodb://localhost:27017/boostappProject3DB" }),
    })
);

// passport middleware
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// server routing
app.use("/members", membersRouter);
app.use("/movies", moviesRouter);
app.use("/subscriptions", subscriptionsRouter);
app.use("/users", usersRouter);
app.use("/", authenticationRouter)

// run the server
app.listen(port, () => {
    console.log("Server is running");
})