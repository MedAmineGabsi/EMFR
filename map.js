//Always declare the each

function each(coll, func) {
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

// Basic map

function map(array, f) {
  var acc = [];
  each(array, function (element) {
    acc.push(f(element));
  });
  return acc;
}

//Example

function IncrementValues(numbers) {
  return map(numbers, function (number) {
    return (number = number + 1);
  });
}

//Improved map

function ImprovedMap(array, f) {
  var acc = [];
  each(array, function (element, i) {
    acc.push(f(element, i));
  });
  return acc;
}

//Example

function IndexedExponential(numbers) {
  return ImprovedMap(numbers, function (number, index) {
    return (number = number ** index);
  });
}

//Array Object map

function ImprovedObjectMap(coll, f) {
  var acc = [];
  if (!Array.isArray(coll)) {
    acc = {};
  }
  each(coll, function (element, key) {
    acc[key] = f(element, key);
  });
  return acc;
}

//Example
function IncrementValueWithKeyLength(obj) {
  return map(obj, function (value, key) {
    return (value = value + key.length);
  });
}
