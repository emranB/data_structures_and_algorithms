/*
    Implement pow(x, n), which calculates x raised to the power n (i.e., xn).
*/

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n, memo={}) {
    if (n in memo) return memo[n]
    if (x==0 || x==1) return x
    if (n==0) return 1
    if (n==1) return x
    if (n==-1) return 1/x

    val = 0
    if (n<0) {
        x = 1/x
        n = -n
    }

    if (!(n%2)) 
        val = (x*x) * myPow(x*x, (n/2) - 1)
    else        
        val = x * myPow(x, n-1)

    // val = x * myPow(x, n-1, memo)
    // memo[n] = val
    return val
};

console.log(myPow(2, 3))
console.log(myPow(2, 4))
console.log(myPow(2, 5))
console.log(myPow(2, 6))
console.log(myPow(2, 7))
console.log(myPow(2, 8))
console.log(myPow(2, 9))
console.log(myPow(2, 10))
// console.log(myPow(0.00001, 2147483647))