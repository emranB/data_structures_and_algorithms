/*
 Given number of rolls allowed for a single dice, and a threshold value to reach, find the number of ways the threshold value can be reached or surpassed by summing the value of each dice roll
 
    findWays(numRolls, target)
    eg. findWays(2, 10) = [[4,6], [5,5], [5,6], [6,6], [6,4], [6,5]] = 6
    eg. findWays(2, 11) = [[5,6], [6,6], [6,5]] = 3
    eg. findWays(1, 7)  = [] = 0
    eg. findWays(1, 4)  = [[4], [5], [6]] = 3
*/

const findWays = function(numRolls, target, memo={}) {
    if (target in memo) return memo[target]
    if (numRolls <= 0) {
        if (target <= 0)    return 1
        else                return 0
    }
    
    let ways = 0
    for (let i = 1; i <= 6; i++) {
        let remainder = target - i
        ways += findWays(numRolls - 1, remainder)
        memo[target] = ways
    }
    
    return ways
}

console.log(findWays(2, 10)) // = 6
console.log(findWays(2, 11)) // = 3
console.log(findWays(1, 7))  // = 0
console.log(findWays(1, 4))  // = 3