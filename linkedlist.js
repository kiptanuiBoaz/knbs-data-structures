// JavaScript
//  creates a new node for each node in the original linked list,
//  copying the data and the arbitrary reference
// returns the head node of the copied linked list.
// Any operations on the original list will not affect the copied list (deep copy)

class Node {
    constructor(data, next = null, arbitrary = null) {
      this.data = data;
      this.next = next;
      this.arbitrary = arbitrary;
    }
  }
  
  const copyList = head => {
    let current = head;
    let copiedHead = null;
    let copiedCurrent = null;
  
    // create a new node for each node in the original list
    while (current !== null) {
      // create a new node with the same data and arbitrary reference
      const newNode = new Node(current.data, null, current.arbitrary);
      if (copiedHead === null) {
        // set the head of the copied list
        copiedHead = newNode;
      } else {
        // link the new node to the previous node in the copied list
        copiedCurrent.next = newNode;
      }
      copiedCurrent = newNode;
      current = current.next;
    }
  
    return copiedHead;
  };
  

//   Example
//   create a linked list with some arbitrary reference

const node1 = new Node(1);
const node2 = new Node(2, node1, node1);
node1.arbitrary = node2;
const node3 = new Node(3, node2, node1);

console.log(copyList(node3));


// The output will be 
// Node {
//     data: 3,
//     next: Node { data: 2, next: Node { data: 1, next: null, arbitrary: [Circular] }, arbitrary: [Circular] },
//     arbitrary: Node { data: 2, next: Node { data: 1, next: null, arbitrary: [Circular] }, arbitrary: [Circular] }
//   }

// confirming that the list is unmodified  