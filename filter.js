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

//Basic filter

function filter(array, predicate) {
  var acc = [];
  each(array, function (element) {
    if (predicate(element)) {
      acc.push(element);
    }
  });
  return acc;
}

//Example

function oddNumbers(numbers) {
  return filter(numbers, function (number) {
    return number % 2 === 1;
  });
}

//Improved filter

function ImprovedFilter(array, predicate) {
  var acc = [];
  each(array, function (element, index) {
    if (predicate(element, index)) {
      acc.push(element);
    }
  });
  return acc;
}

//Example

function evenIndexedEvenLengths(strings) {
  return ImprovedFilter(strings, function (string, i) {
    return string.length % 2 === 0 && i % 2 === 0;
  });
}

//Array/Object filter

function ImprovedObjectFilter(coll, predicate) {
  var acc = [];
  if (!Array.isArray(coll)) {
    acc = {};
  }
  each(coll, function (value, key) {
    if (predicate(value, key)) {
      if (Array.isArray(coll)) {
        acc.push(value);
      } else {
        acc[key] = value;
      }
    }
  });
  return acc;
}

//Example

function ZeroValues(obj) {
  return ImprovedObjectFilter(obj, function (element, key) {
    return typeof element === "number";
  });
}
