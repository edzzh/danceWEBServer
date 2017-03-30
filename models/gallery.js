//Gallery datu bazes shema
var mongoose = require('mongoose');
var autoIncrement = require("mongodb-autoincrement");
Schema = mongoose.Schema;

var GallerySchema = new mongoose.Schema({
  _id: Number,
  link: String
});

GallerySchema.plugin(autoIncrement.mongoosePlugin);
mongoose.model('gallery', GallerySchema, 'imageGallery');
