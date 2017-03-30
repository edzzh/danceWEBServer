var fs = require('fs');
var mongoose = require('mongoose');
Member = mongoose.model('members');

//Izvada Attelu Info
exports.getMember = function(req,res){
  Member.find(function(err, results){
    return res.send(results);
  });
}
