const express = require('express');
const authRoutes = require('./server/routes/auth-routes');
const profileRoutes = require('./server/routes/profile-routes');
const passportSetup = require('./server/config/passport-setup');
const mongoose = require('mongoose');
const keys = require('./server/config/keys');
const path = require('path');
const cookieSession = require('cookie-session');
const passport = require('passport');

const app = express();

// Set up view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/server/views'));

app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey]
}));

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// Connect to MongoDB
mongoose.connect(keys.mongodb.dbURI, { useNewUrlParser: true }, ()=> {
    console.log('Connected to mongodb');
});

// Set Up Routes
app.use(express.static(__dirname + '/public'));
app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);


app.get('/', (req, res) => {
    res.render('home', {
        user: req.user
    });
});

app.listen(3000, () => {
    console.log('App now listening for requests on http://localhost:3000');
});