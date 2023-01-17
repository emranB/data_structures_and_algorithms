1. numWays.js:

Given number of rolls allowed for a single dice, and a threshold value to reach, find the number of ways the threshold value can be reached or surpassed by summing the value of each dice roll

 
    unsigned int findWays(unsigned int numRolls, signed int target)
    eg. findWays(2, 10) = [[4,6], [5,5], [5,6], [6,6], [6,4], [6,5]] = 6
    eg. findWays(2, 11) = [[5,6], [6,6], [6,5]] = 3
    eg. findWays(1, 7)  = [] = 0
    eg. findWays(1, 4)  = [[4], [5], [6]] = 3


2. loopToResursion.js

/*
  Rewrite the following function using a for loop to use recursion instead of a for loop
*/

    const sumAllElementsByName_loop = function(itemsArr, targetName) {
      let result = 0;
      for (let i = 0; i < itemsArr.length; i++) {
        if (itemsArr[i].name === targetName) {
          result += itemsArr[i].value;
        }
      }
      return result;
    }
