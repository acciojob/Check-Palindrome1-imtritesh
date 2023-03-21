// complete the given function

function palindrome(str){
	// var ans = str.trim();
	var str1 = str.toLowerCase();
for(var i=0; i<str1.length/2; i++){
	if(str1[i]!==str1.length-1-i){
		return "false";
		}
	}
	return "true";
}
	
module.exports = palindrome
