var port = process.argv[2] || process.env.PORT || 8080;

var http = require('http')

var server = http.createServer();

var Gun = require('gun');
var gun = new Gun({web: server});

server.listen(port, function () {
	console.log('Server started on port', port, 'with /gun');
});