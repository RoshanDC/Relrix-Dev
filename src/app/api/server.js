var express = require('express');
var mongojs = require('mongojs');
var bodyParser = require('body-parser');

var app = express();
var db = mongojs('abiralFrontend', ['abiralFrontend']);

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
};

app.use(bodyParser.json());
app.use(allowCrossDomain);


app.get('/login/:username/:password', function(req, res){
	var username = req.params.username;
	var password = req.params.password;

	db.login.findOne({username: username, password: password}, function(err, docs){
		res.json(docs);
	});
});

app.get('/superadmin/:id', function(req, res){
	var id = req.params.id;

	db.superadmin.findOne({sid: id}, function(err, docs){
		res.json(docs);
	});
});

app.get('/username/:username', function(req, res){
	var username = req.params.username;

	db.login.count({username: username}, function(err, docs){
		res.json(docs);
	});	
});

app.get('/vendors/', function(req, res){

	db.vendor.count(function(err, docs){
		res.json(docs);
	});	
});

app.get('/login/', function(req, res){

	db.login.count(function(err, docs){
		res.json(docs);
	});	
});

app.post('/new/login', function (req, res) {
   var postData  = req.body;
   db.login.insert(postData);
});

app.post('/new/vendor', function (req, res) {
   var postData  = req.body;
   db.vendor.insert(postData);
});


app.listen(5000);

console.log('Server is running on port 5000');
