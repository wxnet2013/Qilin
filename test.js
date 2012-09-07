var qilin = require("qilin"),
	fs = require("fs");
try {
	var data = fs.readFileSync(__dirname + '/conf.json','utf-8');
	var CONFIG = JSON.parse(data.toString());
	qilin.start(CONFIG);
}catch(e){
	console.log("error" + e.message);
}

