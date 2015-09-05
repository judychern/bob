var Bob = function() {};

Bob.prototype.hey = function(input) {
if (input.slice(-1)==="?" && input != input.toUpperCase()){ 
	return'Sure.';
}
if(input === input.toUpperCase() && input.toLowerCase() !== input){ 
	return'Whoa, chill out!';
}
if(input.slice(-1)==="!" && input != input.toUpperCase()){
	return'Whatever.';
}
// if(input === ''){
// // 	return'Fine. Be that way!';
// // }
// // if(input.match(/^\s*$/)){
// // 	return'Fine. Be that way!';
// }
if(input.trim()===''){
	return 'Fine. Be that way!';
}
if(/^[0-9?]*$/.test(input)){
	return 'Sure.';
}
if(/^[0-9,]*$/.test(input)){
	return 'Whatever.';
}
else{
	return 'Whatever.';
}
};

module.exports = Bob;