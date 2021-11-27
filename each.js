//Basic each
function each(array, func) {
  for (var i = 0; i < array.length; i++) {
    func(array[i]);
  }
}
//Example 

function sumSquares(numbers) {
  var total = 0;
  each(numbers, function (number) {
    total += number * number;
  });
  return total;
}

//Improved each

function ImprovedEach(array, func) {
  for (var i = 0; i < array.length; i++) {
    func(array[i], i);
  }
}
//Example

function indexedExponentials(numbers) {
  var result = [];
  ImprovedEach(numbers, function (number, index) {
    result.push(number ** index);
  });
  return result;
}

//Array/Object each

function ImprovedObjectEach(coll, func) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      func(coll[i], i);
    }
  } else {
    for (var key in coll) {
      func(coll[key], key);
    }
  }
}

//Example

function KeysLongerThan(obj){
    var result = {}
    ImprovedObjectEach(obj, function(value, key){
        if(key.length > 3){
            result[key] = value
        } else{
            continue
        }
    })
    return result
}