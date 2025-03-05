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

class ObjectStack {
    constructor() {
        this.items = {};
        this.top = 0;
    }

    push(item) {
        this.items[this.top] = item;
        this.top++;
    }

    pop() {
        if (this.top == 0) return null;
        this.top--;
        let temp = this.items[this.top];
        delete this.items[this.top];
        return temp;
    }

    peek() {
        if (this.top == 0) return null;
        return this.items[this.top - 1];
    }

    display() {
        if (this.top == 0) {
            console.log("the stack is empty");
        } else {
            for (let item in this.items) {
                console.log(`${this.items[item]}`);
            }
        }
    }

    isEmpty() {
        if (this.top == 0) return true;
        return false;
    }

    size() {
        return this.top;
    }
}

const myObjectStack = new ObjectStack();
// myObjectStack.push("jishad");
// myObjectStack.push("fuhad");
// myObjectStack.push("irfan");
// myObjectStack.push("jameela");
myObjectStack.peek();
myObjectStack.pop();
myObjectStack.display();
console.log(myObjectStack.isEmpty());

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
