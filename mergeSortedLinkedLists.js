class Node {
    constructor(val=null, next=null) { 
        this.val  = val 
        this.next = next
        return this
    }
}

class List {
    constructor(...nodes) {
        this.head = nodes[0]
        let curr = this.head
        for (let i=1; i<nodes.length; i++) {
            curr.next = nodes[i]
            curr = curr.next
        }
    }

    addNodes(...nodes) {
        let curr = head
        for (let i=1; i<nodes.length; i++) {
            curr.next = nodes[i]
            curr = curr.next
        }
        return this
    }
}

const getList = function(listPtr) {
    let vals = []
    let head = listPtr.head
    while(head != null) {
        vals.push(head.val + ' ')
        head = head.next
    }
    return vals
}

// Merge lists
const mergeLists = function (l1, l2) {
	// Base cases
	if (list1 == undefined && list2 == undefined) return null
	if (list1 == undefined) return list2
	if (list2 == undefined) return list1

	// Save references to initial lists (removable?)
	let list1Ptr = list1
	let list2Ptr = list2
	let outListPtr = null
	
	// Handle first iteration (edge cases)
	if(list1Ptr.val >= list2Ptr.val) {
		outListPtr = list2Ptr
		list2Ptr = list2Ptr.next
	}
	else {
		outListPtr = list1Ptr
		list1Ptr = list1Ptr.next
	}
	
	// Save pointer to head of list for returning at the end
	let outListPtrHead = outListPtr

	// Note: lists are sorted already
	while(list1Ptr != null && list2Ptr != null) {
		if (list2Ptr.val >= list1Ptr.val) {
			outListPtr.next = list1Ptr
			list1Ptr = list1Ptr.next
			outListPtr = outListPtr.next
			outListPtr.next = null
		}
		else {
			outListPtr.next = list2Ptr
			list2Ptr = list2Ptr.next
			outListPtr = outListPtr.next
			outListPtr.next = null
		}
	}

	// Handle final interaion (edge case)
	if (list2Ptr != null) {
		outListPtr.next = list2Ptr
	}        
	else if (list1Ptr != null) {
		outListPtr.next = list1Ptr
	}

	// Return head of output list
	return outListPtrHead
}

// Test 1
{
    console.log("Test 1")
    console.log("----------------------------------------------")
    let list1 = new List(new Node(1), new Node(3), new Node(5))
    let list2 = new List(new Node(2), new Node(4), new Node(6))
    console.log("List1: ", getList(list1))
    console.log("List2: ", getList(list2))
    console.log("Merged lists: ", getList(mergeLists(list1, list2)))
    console.log("----------------------------------------------")
}

// Test2
{
    console.log("Test 2")
    console.log("----------------------------------------------")
    let list1 = new List(new Node(1), new Node(3))
    let list2 = new List(new Node(2), new Node(4), new Node(4), new Node(5))
    console.log("List1: ", getList(list1))
    console.log("List2: ", getList(list2))
    console.log("Merged lists: ", getList(mergeLists(list1, list2)))
    console.log("----------------------------------------------")
}

// Test3
{
    console.log("Test 3")
    console.log("----------------------------------------------")
    let list1 = new List(new Node(1), new Node(3), new Node(5), new Node(6))
    let list2 = new List(new Node(2), new Node(4))
    console.log("List1: ", getList(list1))
    console.log("List2: ", getList(list2))
    console.log("Merged lists: ", getList(mergeLists(list1, list2)))
    console.log("----------------------------------------------")
}

// Test 4
{
    console.log("Test 4")
    console.log("----------------------------------------------")
    let list1 = new List(new Node(1))
    let list2 = new List()
    console.log("List1: ", getList(list1))
    console.log("List2: ", getList(list2))
    console.log("Merged lists: ", getList(mergeLists(list1, list2)))
    console.log("----------------------------------------------")
}

// Test 5
{
    console.log("Test 5")
    console.log("----------------------------------------------")
    let list1 = new List()
    let list2 = new List(new Node(1))
    console.log("List1: ", getList(list1))
    console.log("List2: ", getList(list2))
    console.log("Merged lists: ", getList(mergeLists(list1, list2)))
    console.log("----------------------------------------------")
}

// Test 6
{
    console.log("Test 6")
    console.log("----------------------------------------------")
    let list1 = new List(new Node(2))
    let list2 = new List(new Node(1))
    console.log("List1: ", getList(list1))
    console.log("List2: ", getList(list2))
    console.log("Merged lists: ", getList(mergeLists(list1, list2)))
    console.log("----------------------------------------------")
}

// Test 7
{
    console.log("Test 6")
    console.log("----------------------------------------------")
    let list1 = new List(new Node(1), new Node(2), new Node(3), new Node(4))
    let list2 = new List(new Node(5), new Node(6))
    console.log("List1: ", getList(list1))
    console.log("List2: ", getList(list2))
    console.log("Merged lists: ", getList(mergeLists(list1, list2)))
    console.log("----------------------------------------------")
}