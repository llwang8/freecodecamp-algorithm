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