# Split-Numeric
A javascript library that splits a string into an array containing all leading numeric digits as one value and the rest (non-numeric) of the string as the second value.
https://stackoverflow.com/questions/59368077/split-string-into-array-on-first-non-numeric-character-in-javascript/59369138#59369138

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
    const firstString = "20pt10";

    console.log(splitNumeric(alphaNumericString));
    // ['20', 'pt10']

    const secondString = "pt10";
    
    console.log(splitNumeric(secondString));
    // ['', 'pt10']

    const thirdString = "01";

    console.log(splitNumeric(thirdString));
    // ['01', '']

    const fourthString = "300,5";

    console.log(splitNumeric(fourthString));
    // ['300', ',5']
```