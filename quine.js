// The main quine function (copy of below) is stored here as array of string characters
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
	
	// Recreate the charData variable above as a new string
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
	
	// Add the recreated charData variable (now represented as a string) to the code contained in the charData itself (which is thte quine function). Next output the quine via console.log()
	console.log(recreateCharDataCode + charData.join(''));
})();