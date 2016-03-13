//Sum all numbers in a range from a given array.
//Return the sume of those two numbers and all numbers between them
function sumAll(arr) {
  var i = Math.min(arr[0], arr[1]) + 1;
  var n = Math.max(arr[0], arr[1]);

  for (i; i < n; i ++) {
    arr.push(i);
  }
  return arr.reduce(sum, 0);
}
function sum(preval, curval) {
  return preval + curval;
}

sumAll([1, 4]);


//Diff Two Arrays
//Compare two arrays and return a new array with any items only found in one of
//the two given arrays, but not both. (return the symmetric fiff of the two arrays)
function diff(arr1, arr2) {
  var newArr = [];
  function notInArray(elem, arr){
    if (arr.lastIndexOf(elem) == -1){
      return true;
    }
  }

  for (var i = 0; i < arr1.length; i++){
    if (notInArray(arr1[i], arr2)){
      newArr.push(arr1[i]);
    }
  }
  for (var j = 0; j < arr2.length; j++){
    if (notInArray(arr2[j], arr1)){
      newArr.push(arr2[j]);
    }
  }

  // Same, same; but different.
  return newArr;
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);

//Roman Numeral Converter
//convert the given number into a roman numeral
function convert(num) {
  var ones = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
  var tens = ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  var hundreds = ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  var thousands = Math.floor(num/1000);
  var roman = [];
  roman.push(hundreds);
  roman.push(tens);
  roman.push(ones);
  // return roman;

  var result = "";
  if (thousands !== 0) {
    for (var i=0; i<thousands; i++) {
      result += "M";
    }
     num = num - thousands * 1000;
  }

  var arr = num.toString().split(""); //change (num - thousands) to array
  var n = arr.length;  // how many digits,
  for (var j=0; j<n; j++) {
    if (arr[j] != "0") {
      var index = arr[j] -1;
      //return roman[j][index];
      result += roman[j+3-n][index];
    }
  }

 return result;
}

convert(97);


function toRomanSimpleSolution(n) {
    var r = '',
        decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
        roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    for (var i = 0; i < decimals.length; i++) {
        while (n >= decimals[i]) {
            r += roman[i];
            n -= decimals[i];
        }
    }
    return r;
}

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
  var sourceKeys = Object.keys(source);
  // What's in a name?
  return collection.filter(function(obj) {
    for (var i = 0; i < sourceKeys.length; i++) {
      var k = sourceKeys[i];
      if (!obj.hasOwnProperty(k) || obj[k] != source[k]) {
        return false;
      }
    }
    return true;
  });

}

where([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });



//Search and Replace
//Performs a search and replace on the sentence using the arguments provided and
//return the new sentence
//First argument is the sentence to perform search and replace on
//Second argument is the word that you will be replacing (before)
//Third arguemnt is what you will be replacing the second argument with (after)
function myReplace(str, before, after) {
  var arr = str.split(" ");
  if (before.toLowerCase() != before) {
        after = after.charAt(0).toUpperCase() + after.substr(1);

  }
  for (var i=0; i<arr.length; i++) {
    if (arr[i] == before) {

      arr.splice(i, 1, after);
    }
  }
  str = arr.join(" ");
  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");



//Pig Latin
//Takes the first consonat(or consonant cluster) of an English word, moved it to the
//end of the word and suffixed an 'ay'
//If a word begins with a vowel, just add "way" to the end.
function translate(str) {
  var result = "";
  //if (str.match(/^[aeiou]/i)) {
  //    str = str + "ay";
  //}
  var arr = str.split('');
    for (var i=0; i<arr.length; i++) {
    if (arr[i].match(/[aeiou]/i)) {
      if (i === 0) {
        str = str + "way";
        break;
      } else {
        str = str.substr(i) + str.substr(0, i) + "ay";
        break;
      }
    }
  }
  //"bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ"
  return str;
}

translate("eight");

//DNA Paring
//The DNA strand is missing the paring element.  Take each character, get its pair,
//and return the result as a 2nd array
//AT and CG
function pair(str) {
  var arr = str.split("");
  var result = [];
  for (var i=0; i<arr.length; i++) {
    switch (arr[i]) {
      case "C":
        result.push(["C", "G"]);
        break;
      case "G":
        result.push(["G", "C"]);
        break;
      case "A":
        result.push(["A", "T"]);
        break;
      case "T":
        result.push(["T", "A"]);
        break;
      }
  }
  return result;
}

pair("GCG");

//Missing Letters
//Find the missing letter in the passed letter range and return it
//If all letters are present in the range, returned undefined
function fearNotLetter(str) {
  var result = undefined;
  var count = 0;
  for (var i=0; i<str.length; i++) {
    if (i == str.length-1) {
      return result;
    }
    count = str.charCodeAt(i);
    if (count+1 != str.charCodeAt(i+1)) {
      return String.fromCharCode(count+1);
    }

  }
  return result;
}

fearNotLetter("abcd");



//Boo Who
//Check if a value is classified as a boolean primitive.  Return true or false
//Boolean primitives are true and false
function boo(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  if ((typeof bool) == "boolean") {
    return true;
  } else {
    return false;
  }
  //return result;
}

boo(null);

//Sorted Union
//Write a function that takes two or more arrays and returns a new array of unique
//values in the order of the original provided arrays
function unite(arr1, arr2, arr3) {
  var arr = [];
  for(var i=0; i<arguments.length; i++) {
    arr.push(arguments[i]);
  }
  arr = arr.reduce(function(a, b) {
    return a.concat(b);
  }, []);
  var result = arr.filter(unique);
  return result;
}
function unique(elem, index, self) {
    return self.indexOf(elem) == index;
}

unite([1, 3, 2], [5, 2, 1, 4], [2, 1]);

//Convert HTML Entities
//Convert the charater &, <, >, ", ' in a string to their corresponding HTML entities
function convert(str) {
  // &colon;&rpar;
  //str = str.replace(/\&/g, &amp, &lt, &gt, &quot, &apos );
  str = str.replace(/&/g, "&amp;" );
  str = str.replace(/</g, "&lt;");
  str = str.replace(/>/g, "&gt;");
  str = str.replace(/"/g, "&quot;");
  str = str.replace(/'/g, "&apos;");

  return str;
}

convert("Dolce & Gabbana");



//Spinal Tap Case
//all-lowercase-workd-joined-dashes

function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  str = str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();

  str = str.toLowerCase().split(" ").join("-");
  str = str.toLowerCase().split("_").join("-");
  return str;
}


//Sum all odd fibonacci numbers up to and including the passed number if it is
//Fibonocci number
 function sumFibs(num) {
    var sum = 0;
    var prefib = 0;
    var curfib = 1;
    while (curfib <= num) {
      if (curfib % 2 !== 0) {
            sum += curfib;
       }
       temp = prefib + curfib;
      prefib = curfib;
      curfib = temp;
    }

   return sum;
}

sumFibs(4)

//Sum all primes numbers up to and including the  providing number
//(divide and conquer algorithm)

function sumPrimes(num) {
    var arr = [];
    var sum = 0;
    main:for (var i=2; i<= num; i++) {
        for (var j=2; j<i; j++){
            if (i%j === 0) {
                continue main;
            }
        }
        arr.push(i);
    }

    sum = arr.reduce(function(a,b){
        return a + b;
    });
    return sum;
}

//Smalles Common Multiple of the provided parameters that can be evenly divided by
//both, as well as by all sequential numbers in the range between these parameters
//The range will be an array of two numbers that will not necessarily be in numerical
//order
function smallestCommons(arr) {
    var range = createRange(arr);
    var j = range[range.length-1];
    while(true) {
       var passed = range.every(function(multiple){
          return j % multiple === 0;
       });
      if (passed) {
        return j;
      } else {
        j++;
      }
    }

    function createRange() {
        var range = [];
        var max = arr.reduce(function(a, b){
            return Math.max(a, b);
        });
        var min = arr.reduce(function(a, b){
            return Math.min(a, b);
        });
        for (var i = min; i <=max; i++) {
            range.push(i);
        }
        return range;
    }

}
// that Eucliden gcd algorithm
function smallestCommons(array) {
    var range = createRange(array);

    return range.reduce(function(a, b) {
        return lcm(a, b);
    });

    function lcm(a, b) {
        return (Math.abs(a * b) / gcd(a, b));
    }

    function gcd(a, b) {
        var temp;
        while (b != 0) {
            temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    function createRange(array) {
        var range = [];
        var highest = array.reduce(function(a, b) {
            return Math.max(a, b);
        });
        var lowest = array.reduce(function(a, b) {
            return Math.min(a, b);
        });
        for (var i = lowest; i <= highest; i++) {
            range.push(i);
        }
        return range;
    }
}
//another version
function leastCommonMultiple(arr) {
    /*
      function range(min, max) {
        var arr = [];
       for (var i = min; i <= max; i++) {
        arr.push(i);
      }
       return arr;
    }
    */
    var min, range;
     range = arr;
    if(arr[0] > arr[1]){
       min = arr[1];
    }
    else{
       min = arr[0]
    }

    function gcd(a, b) {
        return !b ? a : gcd(b, a % b);
    }

    function lcm(a, b) {
        return (a * b) / gcd(a, b);
    }

   var multiple = min;
    range.forEach(function(n) {
       multiple = lcm(multiple, n);
    });

   return multiple;
}


//Finders Keepers
//create a function that looks through an array (first args) and returns the first
//element in the array that passes a truth test (2nd args)
function find(arr, func) {     //??
    var num = [];
    num = arr.filter(func);
    return num.shift();
}

find([1, 2,3,4], function(num){return num%2 === 0;});

//Drop it
//Drop the elements of an array (1st args) starting from the front, until the predicate
//(2nd args) return true
//return the rest of the array, otherwise return an empty array
function drop(arr, func) {
    for (var i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            return arr.slice(i);
        }
    }
    return [];

}

drop([1,2,3], function(n){return n < 3;});


//Steamroller
//Flatten a nested array. You must account for varying levels of nesting
function steamroller (arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      var temp = steamroller(arr[i]);
      temp.forEach(function(value){ newArr.push(value); })
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}



//Binary Agents
//Return an English translated sentence of the passed binary string
//The binary string will be space separated
//
function binaryAgent(str) {
  var arr = [];
  str = str.split(" ");
  function binaryASCII(str){
    var result;
    result = str.charAt(0) * 128;
    result += str.charAt(1) * 64;
    result += str.charAt(2) * 32;
    result += str.charAt(3) * 16;
    result += str.charAt(4) * 8;
    result += str.charAt(5) * 4;
    result += str.charAt(6) * 2;
    result += str.charAt(7) * 1;
    return result;
  }
  for (var i = 0; i < str.length; i++) {
    arr.push(String.fromCharCode(binaryASCII(str[i])));
  }

  return arr.join("");
}


//everything Be true
//Check if the predicate (2nd args) is truthy on all elements of a collection
//(first args)
 function every(collection, pre) {
  // Is everyone being true?
   //var result = collection.every(function(current){
   //  return current.hasOwnProperty(pre);
   //});
  function every(collection, pre) {
  // Is everyone being true?
  // var result = collection.every(function(current){
  //   return current.hasOwnProperty(pre);
  // });
   if(typeof pre == 'string') {
     for (var i=0; i<collection.length; i++) {
       if (!collection[i].hasOwnProperty(pre) || !collection[i][pre]) {
         return false;
       }
     }
     return true;
   }

}

every([{"single": ""}, {"single": "double"}], "single");  //false

every([{"user": "Tinky-Winky", "sex": "male", "age": 0},
  {"user": "Dipsy", "sex": "male", "age": 3},
  {"user": "Laa-Laa", "sex": "female", "age": 5},
  {"user": "Po", "sex": "female", "age": 4}], "age");  //true


//Arguments Optional
//Create a function that sums two arguments together.  If only one argument is
//provide, then return a function that expects one argument and return the sum.
function add() {
  if ((arguments.length === 1) && (typeof arguments[0] === 'number')) {
    var x = arguments[0];
    return function(y) {
      if (typeof y === 'number')
        return x + y;
    else
      return undefined;
    };
  }
  else if ((typeof arguments[0] === 'number') && typeof arguments[1] === 'number')
      return arguments[0] + arguments[1];
   else
      return undefined;

}

add(2)([3]);








