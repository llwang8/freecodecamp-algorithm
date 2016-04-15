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