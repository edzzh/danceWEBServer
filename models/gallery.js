//Gallery datu bazes shema
var mongoose = require('mongoose');
Schema = mongoose.Schema;

var GallerySchema = new mongoose.Schema({
  _id: Number,
  link: String
});

mongoose.model('gallery', GallerySchema, 'imageGallery');
