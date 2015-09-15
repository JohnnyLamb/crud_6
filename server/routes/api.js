var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/users');


router.get('/users', function(req, res, next) {
  res.send('hello');
});

module.exports = router;
