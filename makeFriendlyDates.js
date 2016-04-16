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

      if (y1 == y2 || isWithinAYear){
        if (y1 == currentYear){
          y1 = "";
          y2 = "";
        }else {
          y2 = "";
        }
      }

      if (m1 == m2 && y1 == y2){
          m2 = "";
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