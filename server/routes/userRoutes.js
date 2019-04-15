var express = require('express');
var router = express.Router();
var bCrypt = require('bcrypt-nodejs');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var userAgeCollection = require('../models/UserSchema');

router.use(passport.initialize());
router.use(passport.session());

passport.serializeUser(function(user, done) {
    done(null, user._id);
});

passport.deserializeUser(function(id, done) {
    userCollection.findById(id, function(err, user) {
        done(err, user);
    });
});

var isValidPassword = function(user, password){
    return bCrypt.compareSync(password, user.password);
};

var createHash = function(password){
    return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
};


router.get('/', (req, res)=>{
    if(req.session.username) {
        console.log("session live");
        res.send(req.session.username);
    }
    else {
        console.log("else");
        res.send(null);
    }
});

router.post('/', passport.authenticate('signup', ))

module.exports = router;
