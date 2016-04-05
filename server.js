var express = require('express');
var app = express();
app.listen(3000);

app.get('/', function(req, res){
  console.log('request!');
  console.log('response!');
  path.join('/index.html', './server.js');
});

app.post('/', function(req, res){
  res.sendstatus(204);
});
