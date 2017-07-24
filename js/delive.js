var express = require('express');
var app = express();
var multer = require('multer');
app.listen(1780);

var storage = multer.diskStorage({
	destination: function(req, file, cb) {
		cb(null, '../delive')
	},
	filename: function(req, file, cb) {
		var fileFormat = (file.originalname).split(".");
		//给图片加上时间戳格式防止重名名
		//比如把 abc.jpg图片切割为数组[abc,jpg],然后用数组长度-1来获取后缀名
		cb(null, file.fieldname + '-' + Date.now() + "." + fileFormat[fileFormat.length - 1]);
	}
})

var upload = multer({
	storage: storage
});


app.post('/upload', upload.any(), function(req, res, next) {	
	res.append("Access-Control-Allow-Origin","*");
	res.send({
		wscats_code: '0'
	});
});