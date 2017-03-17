//Gallery datu bazes shema
var mongoose = require('mongoose');
Schema = mongoose.Schema;

var GallerySchema = new Schema({
  id: Number,
  link: String
});

mongoose.model('gallery', GallerySchema);
