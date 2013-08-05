var express = require('express');
var app = express();
app.use(express.logger());

var fs= require('fs');
app.get('/', function(request, response) {

var buf= new Buffer (fs.readFileSync('index.2.html');

  response.send(buf.toString('utf-8')
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

