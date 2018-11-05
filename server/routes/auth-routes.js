const router = require('express').Router();
const passport = require('passport');

// auth login
router.get('/login', (req, res) => {
    res.render('login');
});

// auth logout
router.get('/logout', (req, res) => {
    //handle with passport
    res.send('Logging out.');
})

// auth with google
router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));

// callback route for google redirect
router.get('/google/redirect', (req, res) => {
    res.send('You reached the callback URI');
})
module.exports = router;