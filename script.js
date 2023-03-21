// complete the given function

function palindrome(str){
for(var i=0; i<str.length/2; i++){
	if(str[i]==str.length-i){
		return "true";
	}else{
		return "false";
	}
}
}
module.exports = palindrome
