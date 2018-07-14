var express = require('express');
var app = express();
var http = require('http');
var https = require('https');
var os = require('os');
var fs = require('fs');
var host = os.platform() === 'win32' ? '127.0.0.1' : '0.0.0.0';
app.set('port', process.env.PORT || 4201);
var port = process.env.PORT || 4201;
var server = http.createServer(app);


app.use(express.static(__dirname));



app.all('*', function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
	res.header('Access-Control-Allow-Headers', 'Content-Type');

	next();
});

app.get('/', function(req, res){
	console.log('/index.html', __dirname.replace('server', 'src\\index.html'));
	var file = __dirname.replace('server', 'src/index.html');
	res.sendFile(file);
});

app.get('/api/getBusSchedules', function(req, res) {
	fs.readFile(__dirname+'/bus-services-data.json', function(err, content){
        res.write(content);
        res.end();
    });
});


// export start module to start server via grunt file
/*module.exports = {
	start: function(port) {
		server.listen(port);
	}
}*/

// Use the below 2 lines while running server directly
console.log('Server listening to http://' + host + ':' + port);
app.listen(port, host); 
