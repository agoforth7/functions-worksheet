// 1-a. Write a function called yell that logs out an uppercase version of a string.
// 1-b. Write a function called yell10 that uses your yell function to log out an uppercase version of a string 10 times.

// 1-a.
var yell = function (string) {
	var result = string.toUpperCase();
	console.log(result);
};

yell('have a piece of cake.');


// 1-b.
var yell10 = function (string) {
	for (var i = 0; i < 10; i++) {
		yell(string);
	}
};

yell10('put feta cheese on my pizza!');



// 2. Write a function called max that takes two numbers as arguments and returns the larger number.

var max = function (a, b) {
	if (a > b) {
		return a;
	} else {
		return b;
	}
};

console.assert(max(24, 39) === 39);



// 3-a. Write a function called longest that returns the longest of two input strings or arrays.
// 3-b. Write a function called findLongestWord that uses your maxLength function to return the longest word in a sentence.

// 3-a.
var maxLength = function (a, b) {
	if (a.length > b.length) {
		return a;
	} else {
		return b;
	}
};

console.assert(maxLength('Punchy cows give sour milk.', [82, 19, 'forty-seven', 912, 'yes, that\'s right']) === 'Punchy cows give sour milk.');



// 3-b.
var findLongestWord = function (string) {
	var array = string.split(' ');
	var longest = '';
	for (var i = 0; i < array.length; i++) {
		longest = maxLength(array[i], longest);
	}
	return longest;
};

console.assert(findLongestWord('My grandmother played the violin.') === 'grandmother');



// 4. Write a function called isVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, uppercase or lowercase. The function should return false if the character is not a vowel.

var isVowel = function (char) {
	if (char.toLowerCase() === 'a'.toLowerCase()) {
		return true;
	}
	if (char.toLowerCase() === 'e'.toLowerCase()) {
		return true;
	}
	if (char.toLowerCase() === 'i'.toLowerCase()) {
		return true;
	}
	if (char.toLowerCase() === 'o'.toLowerCase()) {
		return true;
	}
	if (char.toLowerCase() === 'u'.toLowerCase()) {
		return true;
	} else {
		return false;
	}
};

console.assert(isVowel('U') === true);
console.assert(isVowel('r') === false);



// 5-a. Write a function called reverseString that returns the reversed version of an input string.
// 5-b. Write a function called reverseStrings that uses your reverseString function to reverse every string in a single input array.

// 5-a.
var reverseString = function (string) {
	var reverse = '';
	for (var i = string.length - 1; i >= 0; i--) {
		reverse += string[i];
	}
	return reverse;
};

console.assert(reverseString('cucumbers') === 'srebmucuc');
console.assert(reverseString('dissarray') === 'yarrassid');



// 5-b.
var reverseStrings = function (array) {
	for (var i = 0; i < array.length; i++) {
		array[i] = reverseString(array[i]);
	}
	return array;
};

var arr = ['dog', 'cat', 'hamster']

console.assert(reverseStrings(arr)[0] === 'god' && arr[1] === 'tac' && arr[2] === 'retsmah');



// 6. A person looking to adopt an animal walks into your animal shelter. He says,

// "I want a female cat, neutered, either white or tan; or a male cat, neutered, any color but white; or I’ll take any cat you have as long as it’s black."

// Your animal database is full of entries but no one has implemented a search feature yet. Write a function called adopt that takes three parameters, gender (a string), neutered (a boolean) and color (a string). The function should return true if the input parameters match the person's criteria.

var adopt = function (gender, neutered, color) {
	if (gender === 'female' && neutered === true && color === 'white' || color === 'tan') {
		return true;
	} else if (gender === 'male' && neutered === true && color !== 'white') {
		return true;
	} else if (color === 'black') {
		return true;
	} else {
		return false;
	}
};

console.assert(adopt('male', 'false', 'black') === true);
console.assert(adopt('male', 'true', 'white') === false);










