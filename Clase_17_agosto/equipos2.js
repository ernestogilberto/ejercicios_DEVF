/*
Write a JavaScript function that checks whether a passed string is palindrome or not?
    Note: A palindrome is word, phrase, or sequence that reads 	the same backward as forward*/

var word = "Anita lava la tina"

function palindrome(word){
    var copy = word.replace(/\s+/g, "").toLowerCase();
    var comp = copy.split("").reverse().join("");
    return copy === comp;
}

console.log(palindrome(word))