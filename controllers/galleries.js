//js fails prieksh funckijam ar Members datu bazi
//funkciju piemers:
//exports.[tava funkcijas vards] = function(req,res){};


var fs = require('fs');
var mongoose = require('mongoose');
var express = require('express');
var path = require("path");
var multer = require("multer");
Gallery = mongoose.model('gallery');
var app = express();
var db = mongoose.connection;

//storage for multer
var storage =   multer.diskStorage({
	destination: function (req, file, callback) {
    callback(null, './staticDirectory');
  },
  filename: function (req, file, callback) {
    callback(null, file.originalname);
  }
});
var upload = multer({ storage : storage}).single('photo');


//Attelu Insert
exports.insertPicture = function(req,res){

upload(req,res,function(err) {
    if(err) {
      return res.end("Error uploading file.");
    }
		var picture = {"link": "http://localhost:3004/staticDirectory/"+ req.file.filename};
		Gallery.collection.insert(picture, function(err, results){});

        res.end("File is uploaded");
    });

}

//Izvada Attelu Info
exports.getPicture = function(req,res){
  Gallery.find(function(err, results){
    return res.send(results);
  });
}
