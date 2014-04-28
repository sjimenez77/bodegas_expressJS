var Schema = require('jugglingdb').Schema;
var users = require('../models/users');

module.exports.controller = function(app) {

    /**
     * a home page route
     */
    app.get('/signup', function(req, res) {
      // any logic goes here
      res.render('users/signup')
    });

    /**
     * About page route
     */
    app.get('/login', function(req, res) {
        // any logic goes here
        res.render('users/login')
    });
}
