//servera galvene => visa darbiba notiek te
var express = require('express');
var mongoose = require('mongoose');

var cors = require('cors');
var multer = require('multer');
var bodyParser = require('body-parser');

var mongoUrl = 'mongodb://localhost/webGallery';
var port = 3004, app = express();



require('./models/members');
require('./models/gallery');
require('./routes')(app);

mongoose.connect(mongoUrl);
var mongodb = mongoose.connection;
mongodb.on('error', function(){
  throw new Error('unnable to connect to database at ' + mongodb);
});

//app.use(multer({dest: '.'}));

app.listen(port, '127.0.0.1',function(){
    console.log('Started server');
});
