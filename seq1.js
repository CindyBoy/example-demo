var seqqueue = require('seq-queue');
 
var queue = seqqueue.createQueue(1000);

queue.push(
  function(task) {
    setTimeout(function() {
      console.log('hello ');
      task.done();
	  queue.close(true)
    }, 100);
  }, 
  function() {
    console.log('task timeout');
  }, 
  1,
);
 
queue.push(
  function(task) {
	  console.log(111)
    setTimeout(function() {
      console.log('world~');
      task.done();
	  queue.close(true)
    }, 500);
  }
);

