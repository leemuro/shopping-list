var port = process.argv[2] || process.env.PORT || 8080;

var express = require('express');
var app = express();
var join = require('path').join;

var Gun = require('gun');
var gun = new Gun();

gun.wsp(app);

var pub = join(__dirname, 'public');
app.use(express.static(pub));

app.listen(port, function () {
	console.log('Server started on port', port, 'with /gun');
});
