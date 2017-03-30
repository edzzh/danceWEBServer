//route sistema, kas izvada noteiktu funkciju no member.js
//app.get (datu izgushana) vai app.post (datu ievietoshana)
var cors = require('cors');

module.exports = function(app){
    var gallery = require('./controllers/galleries');

    app.post('/insertPic', cors(), gallery.insertPicture);
    app.get('/getPic', cors(), gallery.getPicture);
    app.get('/getMember', cors(), member.getMember)
}
