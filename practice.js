// //bubble sort practice

function bubbleSort(array) {
    let swapped = false;
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                swapped = true;
            }
        }
        if (!swapped) break;
    }
    return array;
}

console.log(bubbleSort([3, 5, 7, 2, 3, 6, 9, 4]));

//insertion sort

function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let key = array[i];
        let j = i - 1;

        while (j >= 0 && key < array[j]) {
            array[j + 1] = array[j];
            j--;
        }

        array[j + 1] = key;
    }

    return array;
}

console.log(insertionSort([4, 5, 7, 2, 4, 8, 4, 9, 7, 1]));

//***************************************************
//isertion sort

function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let key = array[i];

        let j = i - 1;
        while (j >= 0 && key < array[j]) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = key;
    }
    return array;
}

console.log(insertionSort([3, 6, 8, 3, 4, 0, 1]));

//************************************************/

//bubble sort
function bubbleSort(array) {
    let swapped = false;
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                swapped = true;
            }
        }
        if (!swapped) break;
    }
    return array;
}

//example
console.log(bubbleSort([4, 7, 33, 5, 11, 9, 99, 77]));

//************************************************* */
// //merge sort

// function mergerSort(array) {
//     if (array.length <= 1) return array;

//     let middle = Math.floor(array.length / 2);

//     let left = mergerSort(array.slice(0, middle));
//     let right = mergerSort(array.slice(middle));
//     return merge(left, right);
// }

// function merge(left, right) {
//     let i = 0;
//     let j = 0;
//     let result = [];
//     while (i < left.length && j < right.length) {
//         if (left[i] < right[j]) {
//             result.push(left[i++]);
//         } else {
//             result.push(right[j++]);
//         }
//     }

//     return result.concat(left.slice(i).concat(right.slice(j)));
// }

// console.log(mergerSort([33, 66, 77, 88, 33, 55, 11, 99]));

//**************************************************************** */

////quick sort using left and right arrays

function quickSort(array) {
    if (array.length <= 1) return array;

    let pivot = array[0];

    let left = [];
    let right = [];
    let i = array.length - 1;

    for (let i = 1; i < array.length; i++) {
        if (array[i] > pivot) {
            right.push(array[i]);
        } else {
            left.push(array[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([44, 66, 2, 3, 8, 4, 1]));

// quicksort without using left and right arrays(lomuto partition scheme)
function partition(array, low, high) {
    let pivot = array[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
        if (array[j] < pivot) {
            i++;
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    [array[high], array[i + 1]] = [array[i + 1], array[high]];

    return i + 1;
}

function lomutoQuickSort(array, low = 0, high = array.length - 1) {
    if (low < high) {
        let pivot = partition(array, low, high);

        lomutoQuickSort(array, low, pivot - 1);
        lomutoQuickSort(array, pivot + 1, high);
    }
    return array;
}

console.log(lomutoQuickSort([44, 8, 3, 0, 5, 1]));

// ***********************************
//hashttable workouts

//hashtable using chainig arrays

class HashTable {
    constructor(size = 7) {
        this.table = new Array(size).fill(null).map(() => []);
        this.size = size;
    }

    hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = hash + key.charCodeAt(i);
        }
        return hash % this.size;
    }

    set(key, value) {
        let index = this.hash(key);
        let bucket = this.table[index];

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] == key) {
                bucket[i][1] = value;
                return true;
            }
        }

        bucket.push([key, value]);
    }

    get(key) {
        let index = this.hash(key);
        let bucket = this.table[index];

        if (bucket !== null) {
            for (let i = 0; i < bucket.length; i++) {
                if (bucket[i][0] === key) {
                    return bucket[i][1];
                }
            }

            return null;
        }
    }

    delete(key) {
        let index = this.hash(key);

        let bucket = this.table[index];

        if (bucket !== null) {
            for (let i = 0; i < bucket.length; i++) {
                if (bucket[i][0] === key) {
                    let deletedValue = bucket.splice(i, 1);
                    return deletedValue;
                }
            }
            return false;
        } else {
            console.log("no mentioned key present in the table");
            return false;
        }
    }

    display() {
        this.table.forEach((bucket, index) => {
            if (bucket.length > 0) {
                console.log(`Index ${index}: ${bucket.map((pair) => `[${pair[0]}: ${pair[1]}]`).join(", ")}`);
            }
        });
    }
}

//***************************************** */

//hashtable using chaining linked list
class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
    }
}

class ListHashTable {
    constructor(size = 7) {
        this.size = size;
        this.table = new Array(this.size).fill(null);
    }

    hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = hash + key.charCodeAt(i);
        }
        return hash % this.size;
    }

    set(key, value) {
        let index = this.hash(key);
        let newNode = new Node(key, value);

        if (this.table[index] === null) {
            this.table[index] = newNode;
        } else {
            let currentNode = this.table[index];

            while (currentNode.next !== null && currentNode.key !== key) {
                currentNode = currentNode.next;
            }

            if (currentNode.key === key) {
                currentNode.value = value; // Update existing value
                return true;
            }

            currentNode.next = newNode; // Add new node at the end of the list
        }
        return true;
    }

    get(key) {
        let index = this.hash(key);
        let currentNode = this.table[index];

        while (currentNode !== null) {
            if (currentNode.key === key) {
                return currentNode.value;
            }
            currentNode = currentNode.next;
        }

        return null; // Return null if key is not found
    }

    delete(key) {
        let index = this.hash(key);
        let currentNode = this.table[index];
        let prevNode = null;

        while (currentNode !== null) {
            if (currentNode.key === key) {
                if (prevNode === null) {
                    this.table[index] = currentNode.next; // Remove head node
                } else {
                    prevNode.next = currentNode.next; // Remove middle/end node
                }
                return currentNode.value; // Return deleted value
            }
            prevNode = currentNode;
            currentNode = currentNode.next;
        }

        return false; // Key not found
    }

    display() {
        this.table.forEach((node, index) => {
            let currentNode = node;
            let output = `Index ${index}:`;

            while (currentNode !== null) {
                output += ` [${currentNode.key}: ${currentNode.value}] ->`;
                currentNode = currentNode.next;
            }

            console.log(output + " null");
        });
    }
}

// Example usage:
let ht = new ListHashTable();
ht.set("name", "Alice");
ht.set("age", 25);
ht.set("city", "New York");
ht.set("age", 30); // Updates "age"

console.log(ht.get("name")); // Output: Alice
console.log(ht.get("age")); // Output: 30
console.log(ht.delete("city")); // Output: New York
console.log(ht.delete("job")); // Output: false

ht.display();

// **********************************************************
//mrege two sorted linkedlists
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function mergeSortedLists(l1, l2) {
    let dummy = new ListNode(-1); // Fix: Use ListNode instead of Node
    let current = dummy;

    while (l1 !== null && l2 !== null) {
        if (l1.value < l2.value) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next; // Fix: Move current forward
    }

    // Attach the remaining nodes
    current.next = l1 !== null ? l1 : l2;

    return dummy.next;
}

function printList(node) {
    let currentNode = node;
    let result = [];
    while (currentNode) {
        result.push(currentNode.value);
        currentNode = currentNode.next; // Fix: Move to the next node
    }
    console.log(result.join(" -> "));
}

// Example Usage:
let a = new ListNode(1);
a.next = new ListNode(3);
a.next.next = new ListNode(5);

let b = new ListNode(2);
b.next = new ListNode(4);
b.next.next = new ListNode(6);

let mergedHead = mergeSortedLists(a, b);
printList(mergedHead); // Output: 1 -> 2 -> 3 -> 4 -> 5 -> 6

// *************************************************
//find valid anagrams using hashmaps

function checkAnagrams(str1, str2) {
    if (str1.length !== str2.length) return false;

    let charFrequency = {};
    for (let char of str1) {
        charFrequency[char] = (charFrequency[char] || 0) + 1;
    }
    //decrece the frequecy in the hashmap according to srt2 char frequency

    for (let char of str2) {
        if (charFrequency[char] <= 0) return false;

        charFrequency[char]--;
    }

    return true;
}

console.log(checkAnagrams("listen", "silent"));

// **********************************

//checking valid paranthesis in a string

function checkParanthesis(string) {
    let map = {
        "{": "}",
        "(": ")",
        "[": "]",
    };

    let stack = [];

    for (let char of string) {
        if (map[char]) {
            stack.push(char);
        } else {
            let lastOpen = stack.pop();
            if (map[lastOpen] !== char) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

function binarySearchRecursive(array, target, left = 0, right = array.length - 1) {
    if (left > right) return -1;

    let middle = Math.floor((left + right) / 2);
    if (array[middle] === target) return middle;

    if (target < array[middle]) return binarySearchRecursive(array, target, left, middle - 1);
    return binarySearchRecursive(array, target, middle + 1, array.length - 1);
}

console.log(binarySearchRecursive([1, 2, 3, 4, 5, 6], 5));

class HashTable {
    constructor(size = 7) {
        this.size = size;
        this.table = new Array(this.size).fill(null).map(() => []);
    }

    hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash + key.charCodeAt(i);
        }

        return hash % this.size;
    }

    set(key, value) {
        let index = this.hash(key);

        if (!this.table[index]) {
            this.table[index] = [];
            this.table[index].push([key, value]);
        } else {
            for (let pair of this.table[index]) {
                if (pair[0] == key) {
                    pair[1] = value;
                    return;
                }
            }

            this.table[index].push([key, value]);
        }
    }

    get(key) {
        let index = this.hash(key);

        if (!this.table[index]) return undefined;

        for (let pair of this.table[index]) {
            if (pair[0] == key) return pair[1];
        }

        return undefined;
    }

    remove(key) {
        let index = this.hash(key);

        if (!this.table[index]) return undefined;

        this.table[index] = this.table[index].filter((pair) => pair[0] !== key);
    }
}

//mrege sort

function merge(left, right) {
    let i = 0;
    let j = 0;
    let res = [];

    while (i > left.length && j > right.length) {
        if (left[i] < right[j]) {
            res.push(left[i]);
            i++;
        } else {
            res.push(right[j]);
            j++;
        }
    }

    return res.concat(left.slice(i).concat(right.slice(j)));
}

function mergerSort(array) {
    if (array.length <= 1) return array;

    let middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle + 1);
    return merge(left, right);
}


console.log(mergerSort([2,6,2,1,33,5]))