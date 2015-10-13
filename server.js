var express = require('express');
var app = express();

app.get('/',function (request, response){
	response.sendfile(__dirname + '/client/index.html');
});

app.use('/js', express.static(__dirname + '/client/js'));



app.listen(3500, function() {
	console.log('The listener is listening');
})