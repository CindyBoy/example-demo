var seqqueue = require('seq-queue');
var request  = require('request');

var queue = seqqueue.createQueue(1000);

queue.push(
  function(task) {
	var id1  = "111-c2294793-5e3e-4893-a1a1-37e034f0777d";
	// var url1  = "http://demo.wemagic.oa.com/api/act_test?act_id"+id1;
	var url1 = "https://act.tgp.qq.com/api/match/v1/index?uuid=bf8fd133-2c52-40cb-98b0-d5f89d654fe8&appid=10001&sign=0fffc00e467eaf4d61ea002a69d394b9";
	request({url:url1, method:"GET",}, function(err, response, body){
		console.log('success  111 ... ', body)
		task.done();
	});
  },
  2
);

queue.push(
  function(task) {
    var id2  = "222-c2294793-5e3e-4893-a1a1-37e034f0777d";
	// var url2  = "http://demo.wemagic.oa.com/api/act_test?act_id"+id2;
	var url2 = "https://act.tgp.qq.com/api/match/v1/matchGuessDetail?match_id=12502&uuid=34696d16-19ea-4393-88ea-a2e863a38d1e&appid=10001&sign=6381459ed2ce3f1cc111edc8563a6b02";
	request({url:url2, method:"GET",}, function(err, response, body){
		console.log('success  222 ... ', body)
		if(body.result != 0){
			console.log('success  body result == 0 ... ');
			process.exit();
		}
		task.done();
	});
  },
  2
);

queue.push(
  function(task) {
    var id3  = "222-c2294793-5e3e-4893-a1a1-37e034f0777d";
	var url3  = "http://demo.wemagic.oa.com/api/act_test?act_id"+id3;
	console.log(url3);
	task.done();
  }
);