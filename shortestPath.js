/*
    Given a 2d array 
        - with 0 marking empty spots 
        - with 1 marking occupied spots
        - traversal allowed in up, down, left, right directions
        - a starting position coordinate, start = [x, y]
        - an ending position coordinate,  end   = [x, y]
    find the smallest number of steps required to reach end from start, if a valid path exists,
    or return -1, otherwise.
    Note: the 2d array may have multiple valid paths from start to end
*/

const isInBounds = function (grid, coordinate) {
    let yOk = (coordinate[0] >= 0 && coordinate[0] < grid.length)
    let xOk = (coordinate[1] >= 0 && coordinate[1] < grid[0].length)

    return yOk && xOk
}

const getNeighbors = function(coordinate) {
    let upElem    = [ coordinate[0] - 1,  coordinate[1]     ]
    let downElem  = [ coordinate[0] + 1,  coordinate[1]     ]
    let leftElem  = [ coordinate[0],      coordinate[1] - 1 ]
    let rightElem = [ coordinate[0],      coordinate[1] + 1 ]

    return [ upElem, downElem, leftElem, rightElem ]
}

const isValidPath = function (grid, coordinate) {
    return (grid[coordinate[0]][coordinate[1]]==0)
}

const canReach_explicitStack = function(grid, start, end) {
    let stack    = [start]
    let visited  = [start.toString()]
    let pathLens = {}
    let targetReachedPathLens = []
    let prevElem = []

    pathLens[start.toString()] = -1

    while (stack.length) {
        let currElem = stack.shift()

        if (currElem[0]==end[0] && currElem[1]==end[1]) {
            targetReachedPathLens.push(pathLens[currElem.toString()] + 1)
        }

        let neighbors = getNeighbors(currElem)
        for (let n of neighbors) {
            /* Handle possiblity of multiple paths starting from same origin */
            if (visited.includes(n.toString())) {
                if (n != prevElem) 
                    visited.delete(n.toString())
                else
                    continue
            }

            if (isInBounds(grid, n) && !visited.includes(n.toString()) && isValidPath(grid, n)) {
                stack.push(n)
                visited.push(n.toString())
                pathLens[n.toString()] = pathLens[currElem.toString()] + 1
            }
        }

        prevElem = currElem
    }

    if (targetReachedPathLens.length) 
        return Math.min(...Object.values(targetReachedPathLens))
    else 
        return -1
}

const shortestPath_implicitStack = function(grid, start, end, visited=new Set()) {
    console.log(start)
    if (start[0]==end[0] && start[1]==end[1]) return 0

    visited.add(start.toString())

    let neighbors = getNeighbors(start)
    let currMin = Infinity
    let currPathLen = 0
    for (let n of neighbors) {
        if (isInBounds(grid, n) && isValidPath(grid, n) && !visited.has(n.toString())) {
            visited.add(n.toString())
            currPathLen = shortestPath_implicitStack(grid, n, end, visited)
            if (currPathLen == 0) return 1
            else currPathLen++
            currMin = Math.min(currMin, currPathLen)
            visited.delete(n.toString())
        }
    }
    // console.log(currPathLen)


    return currMin
}

const grid_test = [
    [0, 1, 1],
    [0, 0, 0],
    [0, 0, 0]
]
console.log(shortestPath_implicitStack(grid_test, [0,0], [2,2]))

const grid1 = [
    [0, 0, 0, 0, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0]
]
// console.log("Shortest path in grid1 is 10?", canReach_explicitStack(grid1, [0,0], [4,0])==10)

const grid2 = [
    [0, 0, 0, 1, 1],
    [1, 1, 0, 1, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 0, 0, 1]
]
// console.log("Is Shortest path to (3,1( and (3,3) the same?", 
// canReach_explicitStack(grid2, [0,0], [3,1])==canReach_explicitStack(grid2, [0,0], [3,3]))