//js fails prieksh funckijam ar Members datu bazi
//funkciju piemers:
//exports.[tava funkcijas vards] = function(req,res){};
var fs = require('fs');
var mongoose = require('mongoose');
Gallery = mongoose.model('gallery');

exports.insertPicture = function(req,res){
  console.log("Hello!");
}

//Izvada Attelu Info
exports.getPicture = function(req,res){
  Gallery.find(function(err, results){
    return res.send(results);
  });
}
