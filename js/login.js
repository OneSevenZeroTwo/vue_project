var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mysql = require('mysql');

var connection = mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"",
	database:"jj"
});

//连接数据库
connection.connect();


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.post('/denglu',function(req,res){
	connection.query("SELECT * FROM login where username = "+req.body.username,function(error,results,fields){
		if(results[0].username==req.body.username&&results[0].psw==req.body.psw){
			console.log(666);
			res.send("1");					
		}else{
			res.send("0");
		}
	// console.log(results,results[0].username,results[0].psw);
	})
	res.append('Access-Control-Allow-Origin',"*");
	connection.end();
});


app.post('/zhuce',function(req,res){
	console.log(req.body);
	connection.query("insert into login(username,psw) values('"+req.body.username+"','"+req.body.psw+"')",function(error,results,fields){
		res.send("1");		
	});
	res.append('Access-Control-Allow-Origin',"*");
	// res.send('home post')
});



var server = app.listen(2090,function(){
	var host = server.address().address
	var port = server.address().port
});