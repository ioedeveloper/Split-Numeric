![travis build](https://travis-ci.org/ioedeveloper/Split-Numeric.svg?branch=master)
# Split-Numeric
A javascript library that splits a string into an array containing all leading numeric digits as one value and the rest (non-numeric) of the string as the second value.

# How To Use
## 1. Install
`npm install split-numeric`
## 2. Import
```
    // ES6 import
    import { split as splitNumeric } from 'split-numeric';

    // Older versions
    const splitNumeric = require('split-numeric').split;
```
## 3. Make use (Examples)
```
    console.log(splitNumeric("20pt10"));
    // ['20', 'pt10']
    
    console.log(splitNumeric("pt10"));
    // ['', 'pt10']

    console.log(splitNumeric("01"));
    // ['01', '']

    console.log(splitNumeric("300,5"));
    // ['300', ',5']
```
