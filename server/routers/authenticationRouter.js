const express = require('express');
const passport = require('passport');

const router = express.Router();

// login a user
router.post('/login', passport.authenticate('local', { failureRedirect: '/login/failed' }), async (request, response) => {
    response.status(200).json({
        success: true,
        message: 'Login successful',
        userData: {
            id: request.user._id,
            fullname: request.user.fullname,
            email: request.user.email
        }
    });
});

// login failed redirection
router.get("/login/failed", async (request, response) => {
    response.json({
        success: false,
        message: 'Username or password is incorrect'
    });
});

// logout
router.get('/logout', (request, response, next) => {
    request.logout(function (err) {
        if (err) {
            return next(err);
        }
        response.json({
            success: true,
            message: 'Logged out'
        });
    });
});

// checks user authentication
router.get("/checkAuthentication", (req, res) => {
    if (req.isAuthenticated()) {
        return res.json({ authenticate: true, message: 'welcome' });
    } else {
        return res.json({ authenticate: false, message: 'No permission' });
    }
});

module.exports = router;