/*No repeats please
Return the number of total permutations of the provided string that don't have
repeated consecutive letters. Assume that duplicate characters are each unique.
For example, aab should return 2 because it has 6 total permutations (aab, aab,
aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter
(in this case a) repeating.
*/
//recursive permutation
function permAlone(str) {
  var lettersArr, arrPermu, i, j, result = [];
  if (typeof str !== "string"){
      return "Input is not string.";
  }
  arrPermu = permutation(str);
  //console.log(arrPermu);

  for (i=0; i<arrPermu.length; i++){
    if(!isRepeating(arrPermu[i])){
      //console.log(arrPermu[i]);
      result.push(arrPermu[i]);
    }
  }
  return result.length;
}

function permutation(str){
  var lastChar, allCharsExceptLast, permuAllCharsExceptLast, permu,
      resultPermu = [];

  if (str.length <= 1){
    return [str];
  }

  lastChar = str[str.length-1];
  allCharsExceptLast = str.slice(0, str.length-1);
  permusAllCharsExceptLast = permutation(allCharsExceptLast);
  //console.log(permuAllCharsExceptLast);

  permusAllCharsExceptLast.forEach(function(eachPermuAllCharsExceptLast){
    for (var pos=0; pos<=allCharsExceptLast.length; pos++){
        permu = eachPermuAllCharsExceptLast.slice(0, pos) + lastChar + eachPermuAllCharsExceptLast.slice(pos);
        resultPermu.push(permu);
     }
  });
  return resultPermu;
}

function isRepeating(str){
  for(var i=0; i<str.length-1; i++){
    if (str.charAt(i) == str.charAt(i+1))
      return true;
  }
  return false;
}

permAlone('aab');




//Heap's Algorithm
//Heap's algorithm generates all possible permutations of N objects. It was
//first proposed by B. R. Heap in 1963
function permAlone2(str) {
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

permAlone2('abc');

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
