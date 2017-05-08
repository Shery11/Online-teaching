var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

var PORT = 3000;

app.listen(PORT);
console.log('Starting on '+ PORT);
