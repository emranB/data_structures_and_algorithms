from optional import *

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def kthLargestLevelSum(root, k):
    levelSums = {} # {level, sum}
    stack = [ [root, 1] ] # [ {node, level} ] 

    currLevel = 1
    while(len(stack)):
        currElem = stack.pop(0)[0]

        if (currLevel not in levelSums): levelSums[currLevel] = 0
        levelSums[currLevel] += currElem.val

        if (currElem.left):  stack.append([currElem.left, currLevel])
        if (currElem.right): stack.append([currElem.right, currLevel])
        currLevel += 1
        
    print(levelSums[k] if k in levelSums else -1)
    return levelSums[k] if k in levelSums else -1


kthLargestLevelSum([5,8,9,2,1,3,7,4,6], 2)