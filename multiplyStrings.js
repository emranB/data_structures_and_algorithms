/*
Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.

Example 1:
    Input: num1 = "2", num2 = "3"
    Output: "6"

Example 2:
    Input: num1 = "123", num2 = "456"
    Output: "56088"
*/

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    
    let totalSum = BigInt(0)
    for (let i=num1.length-1; i>=0; i--) {
        let currSum = BigInt(0)
        for (let j=num2.length-1; j>=0; j--) {
            let u = BigInt(num1[i])
            let v = BigInt(num2[j])
            let sum = BigInt(u * v)
            if (num2.length-1-j) sum *= BigInt(Math.pow(10, num2.length-1-j))
            currSum += sum
        }
        if (num1.length-1-i) currSum *= BigInt(Math.pow(10, num1.length-1-i))
        totalSum += currSum
    }

    return String(totalSum)

};

console.log(multiply("123456789", "987654321"))  // 121932631112635260 -> 121932631112635269 (TRUE)
console.log(multiply("401716832807512840963", "167141802233061013023557397451289113296441069"))  
// 67143675422804950950894450486013855453431967744504577914139585479 (FALSE)
// 67143675422804947379429215144664313370120390398055713625298709447 (TRUE)

// 67143675422804950950894450486013855453431967744504577914139585479
// 67143675422804947379429215144664313370120390398055713625298709447