/*
    Given a 2d matrix of m x n dimensions and a target value, 
    find every element in the array that matches the target value
    and replace the values in that row and column to the target value

    eg. 
    target = 2
    input = [               
        [1, 1, 2, 1],
        [1, 1, 1, 1],
        [1, 1, 1, 1]
    ]
    ------------------
    output = [
        [2, 2, 2, 2],
        [1, 1, 2, 1],
        [1, 1, 2, 1]
    ]

    eg. 
    target = 2
    input = [               
        [1, 1, 2, 1],
        [1, 2, 1, 1],
        [1, 1, 1, 1]
    ]
    ------------------
    output = [
        [2, 2, 2, 2],
        [2, 2, 2, 2],
        [1, 2, 2, 1]
    ]
*/

const coordinateAsString = function(x, y) {
    return (String(x) + "_" + String(y))
} 

const rewriteRowsAndCols = function(matrix, targetValue) {
    let visited = new Set() // Array of coordinates: String(row_col), eg. (2_3) -> need to store as string, since an array value cannot be used to comparison

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            
            let coordinate = coordinateAsString(row, col)
            
            if (matrix[row][col] === targetValue) {
                if (!(visited.has(coordinate))) {

                    // Found matching value, run operations
                    visited.add(coordinate)                    
    
                    // rewrite all row elems
                    for (let i = 0; i < matrix.length; i++) {
                        // If value of coordinate is already target value, 
                        // don't store it in 'visited' as it will need to be processed as operable coordinate
                        if (matrix[i][col] != targetValue) {    
                            matrix[i][col] = targetValue
                            visited.add(coordinateAsString(i, col))
                        }
                    }
    
                    // rewrite all col elems
                    for (let i = 0; i < matrix[row].length; i++) {
                        // If value of coordinate is already target value, 
                        // don't store it in 'visited' as it will need to be processed as operable coordinate
                        if (matrix[row][i] != targetValue) {    
                            matrix[row][i] = targetValue
                            visited.add(coordinateAsString(row, i))
                        }
                    }
                }
            }

        }
    }

    return matrix
}

// Unit tests
const areArraysEqual = function(arr1, arr2) {
    // Check if row and col sizes are equal
    if (arr1.length != arr2.length) return false
    for (let i = 0; i < arr1.length; i++) {
        if (arr2[i] == undefined) return false
        if (arr2[i].length != arr1[i].length) return false
    }
    
    // Check if value at each coordinate is equal
    let isEqual = false
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr1[0].length; j++) {
            if (arr1[i][j] != arr2[i][j]) return false
        }
    }

    return true
}

// Test 1
const target1 = 2
const input1  = [ [1, 1, 2, 1], [1, 1, 1, 1], [1, 1, 1, 1] ]
const output1 = [ [2, 2, 2, 2], [1, 1, 2, 1], [1, 1, 2, 1] ]
console.log(areArraysEqual(rewriteRowsAndCols(input1, target1), output1))

// Test 2
const target2 = 2
const input2  = [ [1, 1, 2, 1], [1, 2, 1, 1], [1, 1, 1, 1] ]
const output2 = [ [2, 2, 2, 2], [2, 2, 2, 2], [1, 2, 2, 1] ]
console.log(areArraysEqual(rewriteRowsAndCols(input2, target2), output2))

// Test 3
const target3 = 2
const input3  = [ [1, 1, 2, 2], [1, 2, 1, 1], [1, 1, 1, 1] ]
const output3 = [ [2, 2, 2, 2], [2, 2, 2, 2], [1, 2, 2, 2] ]
console.log(areArraysEqual(rewriteRowsAndCols(input3, target3), output3))