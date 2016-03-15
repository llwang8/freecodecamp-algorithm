//Validate US Telephone Numbers
//Return true if the passed string is a valid US phone number
//The user may fill out the form field any way they choose as long as it is a
//valid US number. The following are examples of valid formats for US numbers
//(refer to the tests below for other variants):
function telephoneCheck(str) {
  // Good luck!
  return true;
}



telephoneCheck("555-555-5555");

//Symmetric Difference
//Create a function that takes two or more arrays and returns an array of the
//symmetric difference (△ or ⊕) of the provided arrays.
//Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the
//mathematical term "symmetric difference" of two sets is the set of elements
//which are in either of the two sets, but not in both (A △ B = C = {1, 4}). For every
//additional symmetric difference you take (say on a set D = {2, 3}), you should get
//the set with elements which are in either of the two the sets but not both
//(C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).
function sym(args) {
  if (arguments.length !== 0){
    var result=[], obj={}, i, n;
    n = arguments.length;
    result = arguments[0];
    for (i = 1; i<n; i++){
      result = symDiff(result, arguments[i]);
      console.log(result);
    }
    return result;
  }else {
    return null;
  }

}
function symDiff(arr1, arr2) {
  var i, res = [];
  arr1.forEach(function(item){
    if((arr2.indexOf(item) < 0) && (res.indexOf(item) < 0)){
      res.push(item);
    }
  });
  arr2.forEach(function(item){
    if((arr1.indexOf(item) < 0) && (res.indexOf(item) < 0)){
       res.push(item);
       }
  });
  return res;
}



sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);

/*Exact Change
Design a cash register drawer function that accepts purchase price as the
first argument, payment as the second argument, and cash-in-drawer (cid) as the
third argument.
cid is a 2d array listing available currency.
Return the string "Insufficient Funds" if cash-in-drawer is less than the change due.
Return the string "Closed" if cash-in-drawer is equal to the change due.
Otherwise, return change in coin and bills, sorted in highest to lowest order.
*/







/*Inventroy Update
Compare and update inventory stored in a 2d array against a second 2d array of a
fresh delivery. Update current inventory item quantity, and if an item cannot be
found, add the new item and quantity into the inventory array in alphabetical order.
*/
function inventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    var i, j;
    for(i=0; i<arr1.length; i++){
      for (j=0; j<arr2.length; j++){
        if (arr1[i][1] == arr2[j][1]){
          arr1[1][0] += arr2[j][0;
          arr2.splice(j, 1);
        }
      }
    }
    for(i=0; i<arr2.length; i++) {
      for(j=0; j<arr1.length; j++){
        arr1.splice(j, 0, arr2[i]);
      }
    }


    return arr1;
}

/* Example inventory lists
Compare and update inventory stored in a 2d array against a second 2d array of a
fresh delivery. Update current inventory item quantity, and if an item cannot be
found, add the new item and quantity into the inventory array in alphabetical order.
*/
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

inventory(curInv, newInv);

//====================================================
/*No repeats please
Return the number of total permutations of the provided string that don't have
repeated consecutive letters. Assume that duplicate characters are each unique.
For example, aab should return 2 because it has 6 total permutations (aab, aab,
aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter
(in this case a) repeating.
*/
function permAlone(str) {
  var letters, result, final, i, j, temp;
  if (typeof str === "string"){
    letters = str.split("");
    for (i=0; i<letters.length; i++){
      temp = letters;
      temp.splice(i, 1);
      permutation(letters[i], temp);

    }
  }else {
    return "Input is not string.";
  }



  function permutation(item, arr){

  }
  return str;
}

permAlone('aab');
//Heap's Algorithm
//Heap's algorithm generates all possible permutations of N objects. It was
//first proposed by B. R. Heap in 1963
function permAlone(str) {
  var i, j, n, arr, stack, result, count, final;
  if (typeof str != "string"){
    return "Input should be an array or a string.";
  }
  arr = str.split("");
  stack = arr;
  result = [];
  n = arr.length;
  count = 0;
  for (j=0; j<n; j++){
    for (i=1; i<n; i++){
      if (count == permCount(n-1)-1){
        break;
      }else if (i == n-1) {
        i = 1;
      }
      swap(0, i);
      count ++;
    }
    if (n % 2 === 0){
      if(j == n-1){
        result.push(str);
        break;
      }
       swap(j, n-1);
    }else {
       swap(0, n-1);
    }
    count = 0;
  }
  return result;
  final = result.filter(nonRepeatConsecutive);
  //return final;
  return final.length;

  function swap(p, q){
    var temp = stack[p];
    stack[p] = stack[q];
    stack[q] = temp;
    result.push(stack.join(""));
  }

  function permCount(num){
    if (num == 1){
      return 1;
    }
    return num * permCount(num-1);
  }

  function nonRepeatConsecutive(string){
    /*
    for(var k=0; k<string.length; k++){
      if(string.charAt[k] == string.charAt[k+1]){
        return false;
      }
    }
    return true;
    */
    var repeats = /(.)\1/;
    return !repeats.test(string);
  }
}

permAlone('abc');

var result = ["aabb", "baab", "abab", "abab", "baab", "baab", "abab", "abab", "baab", "aabb",
"aabb", "abba", "baba", "baba", "abba", "bbaa", "bbaa", "bbaa", "bbaa", "abba", "baba", "baba", "abba", "aabb"];
var final = result.filter(nonRepeatConsecutive);
function nonRepeatConsecutive(string){
  var repeats = /(.)\1/;
  return !repeats.test(string);
}
console.log(final);

//by Sabba Kilam
/*
Some of the names are long, but descriptive.

Features:

No longer get the "too much recursion" message.
Only one argument is passed to the function.
Takes a string or a number argument.
Variables are not global but enclosed in the outer function.
The inner function does the recursion using closure variables
Doesn't use splice, but uses slice only once.
*/
//====================================================
function getPermutations(str){
    //Enclosed data to be used by the internal recursive function permutate():
    var permutations = [],  //generated permutations stored here
        nextWord = [],      //next word builds up in here
        chars = []          //collection for each recursion level
    ;
    //---------------------
    //split words or numbers into an array of characters
    if (typeof str === 'string') chars = str.split('');
    else if (typeof str === 'number') {
      str = str + ""; //convert number to string
      chars = str.split('');//convert string into char array
    }
    //============TWO Declaratives========
    permutate(chars);
    return permutations;
    //===========UNDER THE HOOD===========
    function permutate(chars){ //recursive: generates the permutations
        if(chars.length === 0)permutations.push(nextWord.join(''));
        for (var i=0; i < chars.length; i++){
            chars.push(chars.shift());  //rotate the characters
            nextWord.push(chars[0]);    //use the first char in the array
            permutate(chars.slice(1));  //Recurse: array-less-one-char
            nextWord.pop();             //clear for nextWord (multiple pops)
        }
    }
    //--------------------------------
}//==============END of getPermutations(str)=============

//======================================================
/*Friendly Date Ranges
Convert a date range consisting of two dates formatted as YYYY-MM-DD into a more
readable format.

The friendly display should use month names instead of numbers and ordinal dates
instead of cardinal ("1st" instead of "1").

Do not display information that is redundant or that can be inferred by the user:
if the date range ends in less than a year from when it begins, do not display the
ending year. If the range ends in the same month that it begins, do not display the
ending year or month.

Additionally, if the date range begins in the current year and ends within one year,
the year should not be displayed at the beginning of the friendly range.
*/
function friendly(arr) {
  var temp;
  var result = [];
  arr[0] = arr[0].split("-");
  arr[1] = arr[1].split("-");
  if(arr[0][0] == arr[1][0]){

  }else {
    result.push(formatDate(arr[0]));
    result.push(formatDate(arr[1]));
  }
  return result;
  function formatDate(date){

  }

  function formatMonth(str){

  }
  function formatDay(str){

  }
}

friendly(['2016-07-01', '2016-07-04']);




/*Make a Person
Fill in the object constructor with the methods specified in the tests.

Those methods are getFirstName(), getLastName(), getFullName(), setFirstName(first),
setLastName(last), and setFullName(firstAndLast).

All functions that take an argument have an arity of 1, and the argument will be a
string.

These methods must be the only available means for interacting with the object.
*/

var Person = function(firstAndLast) {
    return firstAndLast;
};

var bob = new Person('Bob Ross');
bob.getFullName();



/*Map the Debris
Return a new array that transforms the element's average altitude into their
orbital periods.

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

You can read about orbital periods on wikipedia.

The values should be rounded to the nearest whole number. The body being orbited
is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is
398600.4418
*/
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);

/*Pairwise
Return the sum of all indices of elements of 'arr' that can be paired with one
other element to form a sum that equals the value in the second argument 'arg'.
If multiple sums are possible, return the smallest sum. Once an element has been
used, it cannot be reused to pair with another.

For example, pairwise([1, 4, 2, 3, 0, 5], 7) should return 11 because 4, 2, 3 and
5 can be paired with each other to equal 7.

pairwise([1, 3, 2, 4], 4) would only equal 1, because only the first two elements
can be paired to equal 4, and the first element has an index of 0!
*/
function pairwise(arr, arg) {
  return arg;
}

pairwise([1,4,2,3,0,5], 7);






//A thinking Ape
/*
PUZZLE

Imagine you have a circle of people and you go around the circle removing every second person until one person is left.

If you have 3 people in the circle, then the 3rd person will be the last one remaining.
If you have 4 people then the 1st person will be the last one remaining.
If you have 11 people then the 7th person will be the one remaining.

If you have N people in the circle, who will be the last one remaining?
*/




