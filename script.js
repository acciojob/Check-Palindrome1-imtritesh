// complete the given function

function palindrome(str){
	var ans = str.trim();
	var str1 = ans.toLowerCase();
for(var i=0; i<str1.length/2; i++){
	if(str1[i]==str1.length-i){
		return "true";
	}else{
		return "false";
	}
}
}
module.exports = palindrome
