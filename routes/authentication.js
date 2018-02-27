const express = require("express");
const authRoutes = express.Router();

// require user model
const User = require("../models/user");



// login form display
authRoutes.get('/login', (req, res, next) => {
  res.render('authentication/login');
});


// login form submission





// sign up form display
authRoutes.get('/signup', (req, res, next) => {
  res.render('authentication/signup');
});


// sign up form submission





module.exports = authRoutes;