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
	var getid = querystring.parse(id).page;

	var pageCount = 5 * (getid - 1);

	//获取要改的或增加的值
 	var content = url.parse(request.url).query;
	var getcontent = querystring.parse(content).content;

			console.log(pageCount);
			console.log("SELECT * FROM lagou limit "+pageCount+",5")
	connection.query("SELECT * FROM lagou limit "+pageCount+",5",function(error,results,fields){
			response.end(JSON.stringify(results))
		});
}).listen(10101);


