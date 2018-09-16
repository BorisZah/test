	var num = 33721;
	var res = prompt('Введи число');
	res = parseInt(res);
	console.log(typeof(res));
	res = num * res * res * res * res;
	document.write(res);