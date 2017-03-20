var port = process.argv[2] || process.env.PORT || 3000;

var http = require('http')
var express = require('express')
var join = require('path').join;

var app = express()
var server = http.createServer(app);

var Gun = require('gun');
var gun = new Gun({web: server});

var public = join(__dirname, 'build');
app.use(express.static(public));

server.listen(port, function () {
	console.log('Server started on port', port, 'with /gun');
});