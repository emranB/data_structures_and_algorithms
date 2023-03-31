const getValidMoves = function(grid, coordinate) {
    let x = coordinate[0], y = coordinate[1]
    let output = [
        // [ x-1, y   ],
        [ x+1, y   ],
        // [ x,   y-1 ],
        [ x,   y+1 ]
    ]

    // Return only coordinates that are in bound
    return output.filter(out => {
        return (out[0]>=0 && out[0]<grid.length) && 
               (out[1]>=0 && out[1]<grid[0].length) && 
               grid[out[0]][out[1]]==0
    })
}

const findAllPaths = function(grid, startPos, endPos) {
    if (startPos[0]==endPos[0] && startPos[1]==endPos[1]) return [startPos]
    
    let paths = []
    let moves = getValidMoves(grid, startPos)
    for (let move of moves) {
        let currPath = findAllPaths(grid, move, endPos)
        // paths.push(...[startPos, ...currPath])

        if ((move[0]==endPos[0] && move[1]==endPos[1])) {
            paths.push(...[startPos, ...currPath])
            return paths
        }
        else {
            paths.push([startPos, ...currPath])
        }
    }

    return paths
}



let grid = [
    [0, 0, 1],
    [0, 1, 1],
    [0, 0, 1]
]
let startPos = [0,0], endPos=[2,1]
let allPaths = findAllPaths(grid, startPos, endPos)
let pathsCount = allPaths.length
console.log("Valid paths count: ", pathsCount)
allPaths.forEach((path, i) => {
    console.log(`Path(${i}): `, JSON.stringify(path, null))
})