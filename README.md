# Resume of Week 3

#### Callback function:

A callback is a function passed as an argument to another function
This technique allows a function to call another function
A callback function can run after another function has finished

#### High-order function:

A higher order function is a function that either:

1.Takes one or more functions as arguments
2.Returns a function as its result

### Functions definition:

#### `each.js`

#### 1.Basic each:

##### A function that loop over an array and return each element alone.

#### 2. Improved each:

##### The same as the basic each but the difference is that improved each return each element with his index

#### 3. Object, Array each:

##### We create an each function with data structure, we are taking each to the next level by taking arrays and object with for loop

#### `map.js`

#### 1. Basic map:

##### We use map function like each but we create an empty array that takes new values of each element

#### 2. Improving map:

##### Same like normal map ans it works with array and objects

#### `filter.js`

#### 1. Basic filter:

##### It is very similar to the map but instead of returning another array wih the same length, we can return a smaller array, the reason that can happen is that the new values are answering true to a predicate function which return a condition.

#### 2. Improved filter:

##### Identical to the basic filter the improved filter can take either the index and the element in the predicate function to return specific values.

#### 3. Array, Object filter:

##### We create a filter function with Data Structure so it is the same as the improved filter but if we have an array it is exactly as improved filter and if we have an object we can filter with key, value instead of value and index.

#### `reduce.js`

#### 1. Basic reduce:

##### First of all, the reduce function takes three parametres (array, function, and start). The start can be a number, boolean values or empty strings etc...

##### It reduces the colection of one number (reducing things) "Reduces always reduce the array to one value"

#### 2. Improving reduce:

##### We make the third parameter optional and take in consideration, if it is not provided then we're going to start from the first element of the array and we remove that element from the array to not repeat.

##### it is the same thing for objects
