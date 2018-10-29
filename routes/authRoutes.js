const passport = require('passport');

module.exports = app => {
    app.get('/auth/google', 
        passport.authenticate('google', {
            scope: ['profile']
        })
    );

    app.get('/auth/google/callback', passport.authenticate('google'));
    app.get('/admin/current_admin', (req, res) => {
        res.send(req.user);
    });
    app.get('/admin/logout', (req, res) => {
        req.logout();
        res.send(req.user);
    });
};