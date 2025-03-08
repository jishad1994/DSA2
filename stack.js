//stack using array

class Stack {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        return this.items.pop();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    peek() {
        if (this.isEmpty()) {
            return "the stack is empty";
        } else {
            return this.items[this.items.length - 1];
        }
    }

    reverse() {
        let temp = [];

        while (!this.isEmpty) {
            temp.push(this.pop());
        }

        for (let item of temp) {
            this.push(temp.pop());
        }
    }

    display() {
        if (this.isEmpty()) {
            console.log("the stack is empty");
        } else {
            console.log(this.items.join(" "));
        }
    }
}

const myStack = new Stack();

myStack.push(13);
myStack.push(14);
myStack.push(15);
myStack.push(18);
myStack.push(14);
myStack.push(10);
myStack.display();
myStack.reverse();
myStack.display();

//stack using object
class OStack {
    constructor() {
        this.items = {}; // Store elements as key-value pairs
        this.top = 0; // Track the index of the top element
    }

    // Push operation
    add(value) {
        this.items[this.top] = value;
        this.top++;
        return true;
    }

    // Peek operation (view the top element)
    peek() {
        if (this.top === 0) return null;
        return this.items[this.top - 1]; // Return the last added element
    }

    // Pop operation (remove the top element)
    delete() {
        if (this.top === 0) return false;
        this.top--; // Move top pointer down
        const deletedValue = this.items[this.top]; // Get the topmost element
        delete this.items[this.top]; // Remove it from the stack
        return deletedValue;
    }
}

// Example Usage
const stack = new OStack();
stack.add(10);
stack.add(20);
stack.add(30);
console.log(stack.peek()); // Output: 30
console.log(stack.delete()); // Output: 30
console.log(stack.peek()); // Output: 20

//reverse a string using stack

function reverseString(string) {
    let stack = new Stack();
    let reverseString = "";

    for (char of string) {
        stack.push(char);
    }

    for (let char of string) {
        reverseString += stack.pop();
    }

    return reverseString;
}

console.log(reverseString("army"));

//stack that rejects duplicated(unique stack)

class UniqueStack {
    constructor() {
        this.items = [];
        this.set = new Set();
    }

    //push

    push(element) {
        if (!this.set.has(element)) {
            this.items.push(element);
            this.set.add(element);
            return true;
        } else {
            return false;
        }
    }

    pop() {
        if (this.stack.length == 0) return null;
        let deleted = this.items.pop();
        this.set.delete(deleted);
        return deleted;
    }

    display() {
        if (this.items.length !== 0) {
            console.log(this.stack);
        }
    }
}

////stack using two queues

class StackUsingQueues {
    constructor() {
        this.q1 = [];
        this.q2 = [];
    }

    push(x) {
        this.q1.push(x);
    }

    pop() {
        if (this.q1.length === 0) return null;

        while (this.q1.length > 1) {
            this.q2.push(this.q1.shift());
        }
        let popped = this.q1.shift();
        [this.q1, this, q2] = [this.q2, this.q1];
        return popped;
    }

    idEmpty(){

        return this.q1.length===0;
    }
}
