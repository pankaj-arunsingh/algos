function last(stack) {
  return stack[stack.length - 1];
}
class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(val) {
    if (this.minStack.length === 0 || val < last(this.minStack)) {
      this.minStack.push(val);
    }
    this.stack.push(val);
  }

  pop() {
    if (last(this.minStack) === last(this.stack)) {
      this.minStack.pop();
    }
    return this.stack.pop();
  }

  peek() {
    return last(this.stack);
  }

  min() {
    return last(this.minStack);
  }
}
var minstack = new MinStack();
minstack.push(4);
minstack.push(7);
minstack.push(3);
minstack.push(2);
minstack.push(6);
var min1 = minstack.min();
minstack.pop();
var min2 = minstack.min();
minstack.pop();
var min3 = minstack.min();
minstack.pop();
var min4 = minstack.min();
minstack.pop();
console.log("min1 to be 2", min1);
console.log("min2 to be 2", min2);
console.log("min3 to be 3", min3);
console.log("min4 to be 4", min4);
