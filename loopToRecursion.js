/*
  Rewrite the function using a for loop to use recursion instead of a for loop
*/
const items = [
  { name: "name1", value: 1 },
  { name: "name1", value: 4 },
  { name: "name2", value: 9 }
]
const target = "name1"  // = 1 + 4 = 5

const sumAllElementsByName_loop = function(itemsArr, targetName) {
  let result = 0;
  for (let i = 0; i < itemsArr.length; i++) {
    if (itemsArr[i].name === targetName) {
      result += itemsArr[i].value;
    }
  }
  return result;
}

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
