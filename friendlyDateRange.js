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
function friendly(arrDate) {
  var i;
  var arr = arrDate;
  arr.forEach(transform);
  //return arr;
  var n =  arr.length;
  var result = [];
  var monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "Novement", "December"];
  var today = new Date();
  var currentYear = today.getFullYear();

  if ((arr[0][2] == currentYear) && (arr[1][2] == currentYear)){  //same current year
      arr[0][2] = "";
      arr[1][2] = "";
   }else if(arr[0][2] == arr[1][2]){   //same year
      arr[0][2] = "";
   }

   if(arr[0][0] == arr[1][0]){  //same month
      arr[1][1] = "";
   }
  //return arr;

  formatDate();
  return result;

  function transform(a){

      a = a.split("-");
      a[1] = parseInt(a[1]);
      a[2] = parseInt(a[2]);
      a.push(a[i].shift());

    return a;
  }

  function formatDate(){
    var temp;
    for(var i=0; i<n; i++){
      temp = "";
      if (arr[i][0]){
        temp += monthName[arr[i][0]] + " " + formatDate(arr[i][1]);
      }
      if (arr[i][2]) {
        temp += ", " + arr[i][2];
      }
      result.push(temp);
    }

  }

  function formatDay(num){
    var date = "";
    switch (num) {
      case 1:
        date = "1st";
        break;
      case 2:
        date = "2nd";
        break;
      case 3:
        date = "3rd";
        break;
      case 21:
        date = "21st";
        break;
      case 22:
        date = "22nd";
        break;
      case 23:
        date = "23rd";
        break;
      default:
        date = num + "th";
    }
    return date;
  }
}

friendly(['2016-07-01', '2016-07-04']);

friendly(['2016-07-01', '2016-07-04']);


//test
var arrTest = ['2016-07-01', '2016-07-04'];
function transform(arr){
  var n =  arr.length;
    for (i=0; i<n; i++){
      arr[i] = arr[i].split("-");
      console.log("after split: " + arr[i]);
      arr[i][1] = parseInt(arr[i][1]);
      arr[i][2] = parseInt(arr[i][2]);

      arr[i].push(arr[i].shift());
      console.log("after shift: " + arr[i]);
    }
  return arr;
}
arrTest = transform(arrTest);
console.log(arrTest[0]);
