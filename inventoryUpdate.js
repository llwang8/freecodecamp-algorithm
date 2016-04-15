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