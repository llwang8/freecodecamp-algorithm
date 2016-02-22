//Sum all numbers in a range from a given array.
//Return the sume of those two numbers and all numbers between them



//Diff Two Arrays
//Compare two arrays and return a new array with any items only found in one of
//the two given arrays, but not both. (return the symmetric fiff of the two arrays)


//Roman Numeral Converter
//convert the given number into a roman numeral


//Where art thou
/*
Make a function that looks through an array of objects (first argument) and
returns an array of all objects that have matching property and value pairs
(second argument). Each property and value pair of the source object has to be
present in the object from the collection if it is to be included in the returned
array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" },
{ first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }],
and the second argument is { last: "Capulet" }, then you must return the third
object from the array (the first argument), because it contains the property and
t's value, that was passed on as the second argument.
*/
function where(collection, source) {
  var arr = [];
  var count = 0;
  // What's in a name?
  find: for (var i =0; i<collection.length; i++) {
    var x;
    next:for (x in collection[i]) {

      if (source.hasOwnProperty(x)) {
        if (collection[i][x] == source[x]) {
            count ++;

        }
      }
      if (count == Object.keys(source).length) {
        arr.push(collection[i]);
        count = 0;
        continue find;
      }

    }
  }
  return arr;
}

where([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });



//Search and Replace
//Performs a search and replace on the sentence using the arguments provided and
//return the new sentence
//First argument is the sentence to perform search and replace on
//Second argument is the word that you will be replacing (before)
//Third arguemnt is what you will be replacing the second argument with (after)


//Pig Latin
//Takes the first consonat(or consonant cluster) of an English word, moved it to the
//end of the word and suffixed an 'ay'
//If a word begins with a vowel, just add "way" to the end.


//DNA Paring
//The DNA strand is missing the paring element.  Take each character, get its pair,
//and return the result as a 2nd array
//AT and CG


//Missing Letters
//Find the missing letter in the passed letter range and return it
//If all letters are present in the range, returned undefined


//Boo Who
//Check if a value is classified as a boolean primitive.  Return true or false
//Boolean primitives are true and false


//Sorted Union
//Write a function that takes two or more arrays and returns a new array of unique
//values in the order of the original provided arrays


//Convert HTML Entities
//Convert the charater &, <, >, ", ' in a string to their corresponding HTML entities


//Spinal Tap Case
//all-lowercase-workd-joined-dashes

function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  str = str.replace(/([a-z])([A-Z])/, "$1-$2").toLowerCase;

  str = str.toLowerCase().split(" ").join("-");
  str = str.toLowerCase().split("_").join("-");
  return str;
}

//Sum all odd fibonacci numbers up to and including the passed number if it is
//Fibonocci number
function sumFibs(num) {
    var arr = [1, 1];
    var sum = 0;
    for(var i=2; i++) {
        var n = arr.[i-1] + arr.[i-2];
        if (n<= num) {
            arr.push();
        } else {
            break;
        }
    }
    sum = arr.reduce(function(a,b){
        if (b % 2 === 0) {
            return a + b;
        }
    });
    return sum;
}

sumFibs(4)

//Sum all primes numbers up to and including the  providing number

function sumPrimes(num) {
    var arr = [];
    var sum = 0;
    main:for (var i=1; i<= num; i++) {
        for (var j=2; j<i; j++){
            if (i%j === 0) {
                continue main;
            }
        }
        arr.push(i);
    }

    sum = arr.reduce(function(a,b){
        return a + b;
    })
    return sum;
}

//Smalles Common Multiple of the provided parameters that can be evenly divided by
//both, as well as by all sequential numbers in the range between these parameters
//The range will be an array of two numbers that will not necessarily be in numerical
//order
function smalllestCommons(arr) {
    arr = arr.sort(function(a,b) {return a - b});
    var set = []
    var multiples = [];
    for (var i = arr[0]; i <= arr[1]; i++) {
        set.push(i);
    }
    m:for (var j = arr[0] ** 2; j < arr[1] ** 2; j++) {
        for (var i = 0; i < set.length; i++) {
            if (j % set[i] != 0) {
                continue m;
            }
        }
       multiples.push(j);
    }
    return multiples.sort(function(a,b){return a -b});
}


//Finders Keepers
//create a function that looks through an array (first args) and returns the first element
//in the array that passes a truth test (2nd args)
function find(arr, func) {
    var num = 0;
    return num;
}

find([1, 2,3,4], function(num){return num%2 === 0;});

//Drop it
//Drop the elements of an array (1st args) starting from the front, until the predicate
//(2nd args) return true
//return the rest of the array, otherwise return an empty array
function drop(arr, func) {

    return arr;
}
drop([1,2,3], function(n){return n < 3;});


//Steamroller
//Flatten a nested array. You must account for varying levels of nesting


//Binary Agents
//Return an English translated sentence of the passed binary string
//The binary string will be space separated
//


//everything Be true
//Check if the predicate (2nd args) is truthy on all elements of a collection
//(first args)

//Arguments Optional
//Create a function that sums two arguments together.  If only one argument is
//provide, then return a function that expects one argument and return the sum.






