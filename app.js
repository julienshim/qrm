const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/client'));

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