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

// Basic reduce

function reduce(array, f, start) {
  var acc = start;
  each(array, function (element) {
    acc = f(acc, element);
  });
  return acc;
}

//Example

function product(numbers) {
  return reduce(
    numbers,
    function (acc, number) {
      acc = acc * number;
    },
    1
  );
}

//Improved Reduce

function ImprovedReduce(array, f, acc) {
  if (acc === undefined) {
    acc = array[0];
    array = array.slice(1);
  }
  each(array, function (element, i) {
    acc = f(acc, element, i);
  });
  return acc;
}

//Example

function ImprovedMax(array) {
  return ImproveReduce(array, function (acc, number) {
    if (acc > number) return acc;
  });
}

//Object Array Reduce

function ReduceWithObjectKeys(coll, f, acc) {
  if (acc === undefined) {
    if (Array.isArray(coll)) {
      var acc = coll[0];
      coll = coll.slice(1);
    } else {
      acc = coll[Object.keys(coll)[0]];
      delete coll[Object.keys(coll)[0]];
    }
    each(coll, function (element, i) {
      acc = f(acc, element, i);
    });
    return acc;
  }
}

//No example purposed for the Array Object Reduce
