const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const google = require('./config.js');

passport.use(
    new GoogleStrategy({
        // options for the Google strategy.
        clientID: google.clientID;
        clientSecret: google.clientSecret;
    }), () => {
        // passport callback function
    }
)