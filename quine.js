// The main quine function is stored here as array of string characters
var charData = [
	'(', 'f', 'u', 'n', 'c', 't', 'i', 'o', 'n', ' ', 'q', 'u', 'i', 'n', 'e', ' ', '(', ')', ' ', '{',
		'v', 'a', 'r', ' ', 'r', 'e', 'c', 'r', 'e', 'a', 't', 'e', 'C', 'h', 'a', 'r', 'D', 'a', 't', 'a', 'C', 'o', 'd', 'e', ' ', '=', ' ',  '\'', 'v', 'a', 'r', ' ', 'c', 'h', 'a', 'r', 'D', 'a', 't', 'a', ' ', '=', ' ', '[', '\'', ';',
		'c', 'h', 'a', 'r', 'D', 'a', 't', 'a', '.', 'f', 'o', 'r', 'E', 'a', 'c', 'h', '(', 'f', 'u', 'n', 'c', 't', 'i', 'o', 'n', ' ', '(', 'c', 'h', 'a', 'r', ')', ' ', '{',
			'i', 'f', ' ', '(', 'c', 'h', 'a', 'r', ' ', '=', '=', ' ', '\'', '\\', '\'', '\'', ')', ' ', '{',
				'c', 'h', 'a', 'r', ' ', '=', '\'', '\\', '\\', '\\', '\'', '\'', ';',
			'}',
			'i', 'f', ' ', '(', 'c', 'h', 'a', 'r', ' ', '=', '=', ' ', '\'', '\\', '\\', '\'', ')', ' ', '{',
				'c', 'h', 'a', 'r', ' ', '=', '\'', '\\', '\\', '\\', '\\', '\'', ';',
			'}',
			'r', 'e', 'c', 'r', 'e', 'a', 't', 'e', 'C', 'h', 'a', 'r', 'D', 'a', 't', 'a', 'C', 'o', 'd', 'e', ' ', '=', ' ', 'r', 'e', 'c', 'r', 'e', 'a', 't', 'e', 'C', 'h', 'a', 'r', 'D', 'a', 't', 'a', 'C', 'o', 'd', 'e', ' ', '+', ' ' , '\'' , '\\' , '\'' , '\'' , ' ' , '+' , ' ', 'c', 'h', 'a', 'r', ' ', '+', ' ' , '\'' , '\\' , '\'' , '\'' , ' ' , '+', ' ', '\'', ',', '\'', ';',
		'}', ')', ';',
		'r', 'e', 'c', 'r', 'e', 'a', 't', 'e', 'C', 'h', 'a', 'r', 'D', 'a', 't', 'a', 'C', 'o', 'd', 'e', ' ', '=', ' ', 'r', 'e', 'c', 'r', 'e', 'a', 't', 'e', 'C', 'h', 'a', 'r', 'D', 'a', 't', 'a', 'C', 'o', 'd', 'e', ' ', '+', '\'', ']', ';', '\'', ';',
		'c', 'o', 'n', 's', 'o', 'l', 'e', '.', 'l', 'o', 'g', '(', 'r', 'e', 'c', 'r', 'e', 'a', 't', 'e', 'C', 'h', 'a', 'r', 'D', 'a', 't', 'a', 'C', 'o', 'd', 'e', ' ', '+', ' ', 'c', 'h', 'a', 'r', 'D', 'a', 't', 'a', '.', 'j', 'o', 'i', 'n', '(', '\'', '\'',  ')', ')', ';',
	'}', ')', '(', ')', ';',
];

(function quine () {
	
	// Recreate the charData variable as string
	var recreateCharDataCode = 'var charData = [';
	charData.forEach(function (char) {
		// Account for (re)escaping characters
		if (char == '\'') {
			char = '\\\'';
		}
		if (char == '\\') {
			char = '\\\\';
		}
		recreateCharDataCode = recreateCharDataCode + '\'' + char + '\'' + ',';
	});
	recreateCharDataCode = recreateCharDataCode + '];';
	
	// Add the recreate charData code to the code contained in the charData itself
	
	console.log(recreateCharDataCode + charData.join(''));
})();