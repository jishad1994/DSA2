//queue using array

class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(item) {
        this.items.push(item);
        return true;
    }

    dequeue() {
        if (this.items.length == 0) {
            console.log("the queue is empty");
            return false;
        } else {
            return;

            this.items.shift();
        }
    }

    front() {
        if (this.items.length == 0) {
            console.log("the queue is empty ");
            return null;
        } else {
            return this.items[0];
        }
    }

    isEmpty() {
        return this.items.length == 0;
    }

    print() {
        if (this.items.length == 0) {
            console.log("the queue is empty");
            return null;
        } else {
            console.log(this.items.join(" "));
        }
    }
}

// let queue = new Queue();
// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);
// queue.print();

//queue using linked lists

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class ListQueue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }

    enqueue(value) {
        let node = new Node(value);

        if (this.front == null) {
            this.front = node;
            this.rear = node;
        } else {
            this.rear.next = node;
            this.rear = node;
        }
        this.size++;
    }

    dequeue() {
        if (this.isEmpty) {
            console.log("the queue  is empty ");
        } else {
            let dequedValue = this.front;
            this.front = this.front.next;
            this.size--;

            if (this.front == null) {
                this.rear = null;
            }

            return dequedValue;
        }
    }

    getFront() {
        if (this.size == 0) {
            console.log("the queue is empty");
            return null;
        } else {
            return this.front.value;
        }
    }

    isEmpty() {
        return this.size == 0;
    }

    print() {
        if (this.size == 0) {
            console.log("the queue is empty");
        } else {
            let nodeString = "";
            let currentNode = this.front;

            while (currentNode) {
                nodeString += currentNode.value + "<-";
                currentNode = currentNode.next;
            }

            console.log(nodeString);
        }
    }
}

// Example usage:
// let queue = new ListQueue();
// console.log(queue.isEmpty())
// queue.print()
// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);

// console.log(queue.getFront()); // Output: 10
// queue.dequeue();
// console.log(queue.getFront()); // Output: 20
// console.log(queue.isEmpty()); // Output: false

// console.log(queue.isEmpty()); // Output: true
// queue.print()

