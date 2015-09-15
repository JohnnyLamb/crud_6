var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/users');

// get ALL users
router.get('/users', function(req, res, next) {
  User.find(function(err,userData){
      if(err){
        res.json({
          'message':err
        });
      }else{
        res.json(userData);
      }
  });
});

router.post('/users',function(req,res,next){
  newUser = new User ({
    name:req.body.name,
    age:req.body.age,
    active:req.body.active,
  });
  newUser.save(function(err,userData){
    if(err){
      res.json({
        'message':err
      });
    } else {
      res.json(userData);
    }
  });

});


module.exports = router;
