var mongoose = require('mongoose');
Schema = mongoose.Schema;

var MemberSchema = new mongoose.Schema({
  _id: Number,
  name: String,
  surname: String,
  occupation: String,
  gender: String,
  motto: String,
  dancing_since: String,
  dance_group: String
});

mongoose.model('members', MemberSchema, 'dancers');
