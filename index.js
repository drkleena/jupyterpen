var express = require('express');
var app = express();
var http = require('http').Server(app);
var port = process.env.PORT || 3000;
var user_session = {};
var room_users = {}; //this is the big boy data base

app.get('/', function(req, res){
  res.sendFile(__dirname + '/static/landing.html');
});

app.use('/', express.static('static/'));

http.listen(port, function(){
  console.log('listening on *:' + port);
});
