'use strict';

var express = require('express');
// var cors = require('cors')
var app = express();

// app.use(cors());
app.set('port', (process.env.PORT || 9000));

// app.use(express.static(__dirname + '/'));
// app.use(express.static(__dirname + '/app'));
// app.use(express.static(__dirname + '/app/scripts'));
app.use(express.static(__dirname + '/dist'));

// views is directory for all template files
//app.set('views', __dirname + '/app');
//app.set('view engine', 'ejs');

//app.get('/', function(request, response) {
//  response.render('index');
//});

app.use(require('prerender-node').set('prerenderToken', 'nLDTqmJK87BXuSIBIs4x'));

app.all('/*', function(req, res, next) {
    // Just send the index.html for other files to support HTML5Mode
    res.sendFile('index.html', { root: __dirname + '/dist' });
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});