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
function checkCashRegister(price, cash, cid){
  var change = (cash - price).toFixed(2);
  console.log("change: " + change);
      unitCoinValue = {
        "PENNY": 0.01,
        "NICKEL": 0.05,
        "DIME": 0.10,
        "QUARTER": 0.25,
        "ONE": 1.00,
        "FIVE": 5.00,
        "TEN": 10.00,
        "TWENTY": 20.00,
        "ONE HUNDRED": 100.00
      };
      result = {};
  var cidTotal = cid.map(function(each){return each[1];})
                 .reduce(function(a, b){return a + b;});

  if (change < 0){
    throw new Error ("Not enough money to pay the price");
  }else if (change === 0){
    return ("Just the right amount to pay for the price.");
  }

  if (change > cidTotal){
    return "Insufficient Funds";
  }else if (change == cidTotal){
    return "Closed";
  }

  for (var i=cid.length-1; i>=0; i--){
    var coinName = cid[i][0],
        unitValue = unitCoinValue[coinName];
        coinValue = cid[i][1];
        console.log(coinName);
    while (change - unitValue >= 0 && coinValue - unitValue >= 0){
        change = (change - unitValue).toFixed(2);
        coinValue = (coinValue - unitValue).toFixed(2);

        console.log("change: " + change);
        //result[coinName] ?  result[coinName] += unitValue : result[coinName] = unitValue;
        if (!result[coinName]){
          result[coinName] = unitValue;
        }else {
          result[coinName] += unitValue;
        }
    }
  }

  if(change > 0){
    return "Insufficient Funds";
  }

  var changeArr = [];
  for (var key in result){
    changeArr.push([key, result[key]]);
  }
  console.log(changeArr);
  return changeArr;
}

checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0],
                                ["QUARTER", 0], ["ONE", 0], ["FIVE", 0],
                                ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);



checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05],
                                ["DIME", 3.10], ["QUARTER", 4.25],
                                ["ONE", 90.00], ["FIVE", 55.00],
                                ["TEN", 20.00], ["TWENTY", 60.00],
                                ["ONE HUNDRED", 100.00]]);

checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10],
                                ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00],
                                ["TEN", 20.00], ["TWENTY", 60.00],
                                ["ONE HUNDRED", 100.00]]);

/*Inventroy Update
Compare and update inventory stored in a 2d array against a second 2d array of a
fresh delivery. Update current inventory item quantity, and if an item cannot be
found, add the new item and quantity into the inventory array in alphabetical order.
*/
function updateInventory(arrInventory, arrDelivery) {
    // All inventory must be accounted for or you're fired!
    var i, j, result=[];
    if(arrInventory.length === 0){
      if (arrDelivery.length === 0) {
        return [];
      }else {
        return sortIt(arrDelivery);
      }
    }
    if (arrDelivery.length === 0 ){
      if (arrInventory.length === 0) {
        return [];
      }else {
        return sortIt(arrInventory);
      }
    }
    sortIt(arrInventory);
    sortIt(arrDelivery);
    //console.log(arrDelivery.join("\n"));
    for (i=0; i<arrInventory.length; i++){
        if (!arrInventory[i]){
          continue;
        }
        var invItemName = arrInventory[i][1],
            invItemQuantity = arrInventory[i][0],
            delItemName = arrDelivery[0][1],
            delItemQuantity = arrDelivery[0][0];
        console.log(invItemName);
        console.log(delItemName);
        if(invItemName == delItemName){
            arrInventory[i][0] += delItemQuantity;
            console.log("after update: " + invItemQuantity);
            arrDelivery.shift();
        }else if (invItemName > delItemName && arrDelivery.length > 0){
            arrInventory.splice(i, 0, arrDelivery.shift());
        }

    }
    //console.log(arrDelivery);
    while (arrDelivery.length >0){
      arrInventory.push(arrDelivery.shift());
    }
    return arrInventory;
}

function sortIt(arr){
  arr.sort(function(a, b){
      if (a[1] > b[1]){
        return 1;
      }else if (a[1] < b[1]){
        return -1;
      }else {
        return 0;
      }
    });
  return arr;
}

updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]);
updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]);

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

updateInventory2(curInv, newInv);
function updateInventory(arrInventory, arrDelivery) {
    // All inventory must be accounted for or you're fired!
    var i, j, found = false;
    for (i=0; i<arrDelivery.length; i++){
        delItemName = arrDelivery[i][1];
        delItemQuantity = arrDelivery[i][0];
        console.log(delItemName);
        arrInventory.forEach(function(item){
          if (item[1] == delItemName){
            item[0] += delItemQuantity;
            found = true;
          }

        }, this);
        if (!found){
          arrInventory.push(arrDelivery[i]);
        }
        found = false;
        console.log(arrInventory);
    }
    return arrInventory;
}

//====================================================
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

function monthFormat(monthStr){
  var monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "Novement", "December"];
  return monthName[parseInt(monthStr) - 1];

}

function noZeroPrefix(numStr){
  if (parseInt(numStr) < 10){
    return parseInt(numStr).toString();
  }else {
    return numStr;
  }
}
function dateFormat(dateStr){
    var date = "";
    dateStr = noZeroPrefix(dateStr);
    switch (dateStr) {
      case "1":
        date = "1st";
        break;
      case "2":
        date = "2nd";
        break;
      case "3":
        date = "3rd";
        break;
      case "21":
        date = "21st";
        break;
      case "22":
        date = "22nd";
        break;
      case "23":
        date = "23rd";
        break;
      default:
        date = dateStr + "th";
    }

    return date;
}

function displayFormat(m, d, y){
  var str = "";
  if (m){
    str += monthFormat(m) + " ";
  }
  if (d){
    str += dateFormat(d);
  }
  if (y){
    str += ", " + y;
  }
  return str;
}

function TheDate(dateStr){
  var dateArr = dateStr.split("-");
  this.year = dateArr[0];
  this.month = dateArr[1];
  this.date = dateArr[2];
}

function makeFriendlyDates(datesArr) {
  var i, result = [], m1, d1, y1, m2, d2, y2,
      today = new Date(),
      currentYear = today.getFullYear(),
      date1 = new TheDate(datesArr[0]),
      date2 = new TheDate(datesArr[1]),
      daysBetween2Dates = (Date.parse(datesArr[1]) - Date.parse(datesArr[0])) / (1000 * 60 * 60 * 24);
      if (daysBetween2Dates >= 365){
        isWithinAYear = false;
      }else {
        isWithinAYear = true;
      }

      m1 = date1.month;
      d1 = date1.date;
      y1 = date1.year;

      m2 = date2.month;
      d2 = date2.date;
      y2 = date2.year;

      if (m1 == m2 && y1 == y2){
          m2 = "";
      }

      if (y1 == y2 || isWithinAYear){
        if (y1 == currentYear){
          y1 = "";
          y2 = "";
        }else {
          y2 = "";
        }
      }

      if (d1 == d2 && isWithinAYear){
        d2 = "";
      }


      result.push(displayFormat(m1, d1, y1));
      if (y2 || m2 || d2) {
        result.push(displayFormat(m2, d2, y2));
      }

      return result;
}

makeFriendlyDates(["2018-01-13", "2018-01-13"]);

/*Make a Person
Fill in the object constructor with the methods specified in the tests.
Those methods are getFirstName(), getLastName(), getFullName(), setFirstName(first),
setLastName(last), and setFullName(firstAndLast).
All functions that take an argument have an arity of 1, and the argument will be a
string.
These methods must be the only available means for interacting with the object.
*/

var Person = function(firstAndLast) {
  var firstName = firstAndLast.split(" ")[0];
  var lastName = firstAndLast.split(" ")[1];
  var fullName = firstName + " " + lastName;

  this.getFirstName = function(){
    return firstName;
  };
  this.getLastName = function(){
    return lastName;
  };
  this.getFullName = function(){
    return fullName;
  };
  this.setFirstName = function(firstNameStr){
    firstName = firstNameStr;
    fullName = firstName + " " + lastName;
  };
  this.setLastName = function(lastNameStr){
    lastName = lastNameStr;
    fullName = firstName + " " + lastName;
  };
  this.setFullName = function(fullNameStr){
    firstName = fullNameStr.split(" ")[0];
    lastName = fullNameStr.split(" ")[1];
    fullName = firstName + " " + lastName;
    //fullName = fullNameStr;
    return fullName;
  };
};
var bob = new Person('Bob Ross');
bob.setFirstName("Haskell");
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
function getOrbitalPeriod(orbitObjAlt, GM, planetRadius){
  var avgDistance = planetRadius + orbitObjAlt;
  var orbitalPeriod = 2 * Math.PI * Math.sqrt(Math.pow(avgDistance, 3) / GM);
  return Math.round(orbitalPeriod);
}

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  return arr.map(function(curObj){
    var newObj = {
      name: curObj.name,
      orbitalPeriod: getOrbitalPeriod(curObj.avgAlt, GM, earthRadius)
    };
    console.log(newObj);
    return newObj;
  });
}

orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])

//========================
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
  var i, num, numPair, numIndexHash = {}, numUniqueArr=[], numPairArr, indexPairArr = [], result = [];
  if (arr.length < 0){
    return 0;
  }

  for (i=0; i<arr.length; i++){
    num = arr[i];
    if(numIndexHash[num]){
      numIndexHash[num].push(i);    // {num: [index]}
    }else {
      numIndexHash[num] = [i];
    }
  }

  numUniqueArr = Object.keys(numIndexHash);

  numPairArr = sumOfTwoEqualToArg(arr, arg);
  console.log(numPairArr.join('\n'));

  if (!numPairArr){
    return "";
  }
  for (i=0; i<numPairArr.length; i++){
    numPair = numPairArr[i];
    addIndexPairToArr(numPair);
  }
  console.log("indexPairArr: " + indexPairArr);

  result = indexPairArr.map(function(element){
        return element[0] + element[1];
  });

  return result.reduce(function(sum, cur){
    return sum + cur;
  }, 0);

  function addIndexPairToArr(pairArr){
    var temp = [];
    pairArr.forEach(function(num){
      console.log("num: " + num);
      if (numIndexHash[num].length > 0){
        //temp.push(Math.min.apply(numIndexHash[num]));
        temp.push(numIndexHash[num].shift());
      }
      console.log("temp: " + temp);
    });
    if (temp.length === 2){
      indexPairArr.push(temp);
    }
  }

  function sumOfTwoEqualToArg(arr, arg){
    var i, diff, length = arr.length, numPairArray = [];
    for (i=0; i<length; i++){
        diff = arg - arr[i];
        arrCopy = arr.slice(0);
        arrCopy.splice(i, 1);
        if (arrCopy.indexOf(diff) >= 0){
            numPairArray.push([arr[i], diff]);
        }
    }
    console.log("numPairArray: " + numPairArray.join('\n'));
    return numPairArray;
  }
}
//sumOfTwoEqualToArg([0, 0, 0, 0, 1, 1], 1);
pairwise([0, 0, 0, 0, 1, 1], 1);
pairwise([1,4,2,3,0,5], 7);






