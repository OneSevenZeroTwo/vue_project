var http = require('http');
var url = require('url');
var querystring = require('querystring');
var mysql = require('mysql');

//配置数据库
var connection = mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"",
	database:"jj",
});

//链接数据库
connection.connect();

// connection.end();
//建立一个服务器
http.createServer(function(request,response){
	response.setHeader("Access-Control-Allow-Origin","*");

	//获取ID
	var id = url.parse(request.url).query;
	var getid = querystring.parse(id).id;



	connection.query("SELECT * FROM lagou where id = "+getid,function(error,results,fields){
	console.log(results);
		response.end(JSON.stringify(results))
	});

		
}).listen(12000);


