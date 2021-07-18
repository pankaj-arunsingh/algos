/* A linked list is defined as a lineardata structurewhere each element is a separate object. 
Each element (we will call it a node) of a list is comprising of two items - 
the data and a reference to the next node
https://algodaily.com/challenges/implement-a-linked-list
*/
class LinkedListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}
class MyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  toString() {
    const toPrint = [];
    let currNode = this.head;

    while (currNode) {
      toPrint.push(currNode.val);
      currNode = currNode.next;
    }

    return toPrint.join(" -> ");
  }
  append(newVal) {
    const newNode = new LinkedListNode(newVal);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
  prepend(newVal) {
    const currentHead = this.head;
    const newNode = new LinkedListNode(newVal);
    newNode.next = currentHead;
    this.head = newNode;
    if (!this.tail) {
      this.tail = newNode;
    }
  }
}

var linkedList1 = new MyLinkedList();
linkedList1.prepend(25);
linkedList1.prepend(15);
linkedList1.prepend(5);
linkedList1.prepend(9);
console.log(linkedList1.toString());
var linkedList3 = new MyLinkedList();
linkedList3.prepend(25);
linkedList3.prepend(15);
linkedList3.prepend(5);
linkedList3.prepend(9);

linkedList3.append(15);
linkedList3.append(5);
linkedList3.append(9);
console.log(linkedList3.toString());
