const router = require('express').Router();


const authCheck = (req, res, next) => {
    if (!req.user) { //!req.isAuthenticated()
        // if user is not logged in
        res.redirect('/auth/login');
    } else {
        // if loggined in
        next();
    }
};

router.get('/', authCheck, (req, res) => {
    res.send('You are logged in, this is your profile -' + req.user.username);
});

module.exports = router;