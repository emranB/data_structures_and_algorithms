/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = {}

    for (let str of strs) {
        let sortedStr = str.split('').sort().join('')
        if (!(sortedStr in map)) map[sortedStr] = []
        map[sortedStr].push(str)
    }

    let anagrams = []
    for (const [k,v] of Object.entries(map))
        anagrams.push(v)

    return anagrams
};

console.log(groupAnagrams(["bbdd","bdbd","bdd", "dbd"])) // [ [ 'bbdd', 'bdbd' ], [ 'bdd', 'dbd' ] ]