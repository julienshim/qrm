const express = require('express');
const authRoutes = require('./server/routes/auth-routes');
const passportSetup = require('./server/config/passport-setup');

const app = express();


//s set up routes
app.use(express.static(__dirname + '/public'));
app.use('/auth', authRoutes);

// set up view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/server/views'));

//create home route
app.get('/', (req, res) => {
    res.render('home');
});

app.listen(3000, () => {
    console.log('App now listening for requests on port 3000');
});