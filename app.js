




	var exec = require('child_process').exec, child;
	var exec_path = "java -jar h.jar " + '此处传参数给java';

	child = exec(exec_path,function (error, stdout, stderr){	
		console.log(111,error)	
		console.log(222,stdout)	
		console.log(333,stderr)

	});	


 

 
