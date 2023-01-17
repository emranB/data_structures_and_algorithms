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

/*
  Based on the function declarartion, the following data structure can be deduced to be in use
  - Data structure: Array of Objects
  - Each object has two fields:
    - name -> string
    - value -> number
*/
const items = [
  { name: "name1", value: 1 },
  { name: "name1", value: 4 },
  { name: "name2", value: 9 }
]
const target = "name1"  // = 1 + 4 = 5

/*
    Using nested function calls to encapsulate whole function declaration within a single scope
    Alternatively, two separate function declarations can be used, or the use of a class
*/
const sumAllElementsByName_recursion = function(itemsArr, targetName) {
  let result = 0
  
  const sumElems = function(iArr, tName) {
    if (iArr.length == 0) return
    
    let currElem = iArr.pop()
    if (currElem.name === tName) result += currElem.value
    sumElems(iArr, targetName)
  }
  sumElems(itemsArr, targetName)
  
  return result
} 

console.log("Loop method result: ", sumAllElementsByName_loop(items, target) == 5)
console.log("Recursion method result: ", sumAllElementsByName_recursion(items, target) == 5)
console.log("Is loop and recursion yielding same result?: ", sumAllElementsByName_recursion(items, target) == sumAllElementsByName_recursion(items, target))
