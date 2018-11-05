const express = require('express');
const authRoutes = require('./server/routes/auth-routes');
const passportSetup = require('./server/config/passport-setup');
const mongoose = require('mongoose');
const keys = require('./server/config/keys');
const path = require('path');

const app = express();


//s set up routes
app.use(express.static(__dirname + '/public'));
app.use('/auth', authRoutes);

// set up view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/server/views'));

// connect to mongodb 
mongoose.connect(keys.mongodb.dbURI, { useNewUrlParser: true }, ()=> {
    console.log('Connected to mongodb');
});

//create home route
app.get('/', (req, res) => {
    res.render('home');
});

app.listen(3000, () => {
    console.log('App now listening for requests on http://localhost:3000');
});