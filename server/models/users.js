var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var User = new Schema({
  name:String,
  age:Number,
  active:Boolean
});

mongoose.connect(process.env.MONGO_LAB_URI || 'mongodb://localhost/users');

module.exports= mongoose.model('users',User);
