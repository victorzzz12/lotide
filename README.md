# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @victorzzz/lotide`

**Require it:**

`const _ = require('@victorzzz/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(...)`: checks whether eqArrays function is true or false
* `assertEqual(...)`: checks if actual value is expected value
* `assertObjectEqual(...)`: checks whether eqObjects function is true or false
* `countLetters(...)`: counts letters how many of each letter there are in a string
* `countOnly(...)`: count only the values required
* `eqArrays(...)`: checks if two arrays are equal
* `eqObjects(...)`: chekcs if two objects are equal
* `findKey(...)`: find the property key of an object
* `findKeybyValue(...)`: find the property key of an object based on the value
* `head(...)`: returns first element of an array
* `index(...)`: contains all the funnctions mentioned here
* `letterPositions(...)`: returns the positions of a string
* `map(...)`: loops all elements in an array and returns required index elements
* `middle(...)`: returns the middle elements of an array
* `tail(...)`: returns all array elements except the first one
* `takeUntil(...)`: returns all elements before input element equals the current element
* `without(...)`: removes element from a source array when given a value, then returns the remaining elements
