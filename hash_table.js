//hash table using chaining collision technique

class HashTable {
    constructor(size = 7) {
        this.size = size;
        this.buckets = new Array(this.size).fill(null).map(() => []);
    }

    //hashing function
    hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }

        return hash % this.size;
    }

    //display the hash table function
    display() {
        this.buckets.forEach((bucket) => {
            if (bucket) {
                bucket.forEach(([key, value]) => console.log(`${key}: ${value}`));
            }
        });
    }

    //setting value function
    set(key, value) {
        let index = this.hash(key);
        let bucket = this.buckets[index];

        //check if already the key existes in the bucket

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                //if exists replace the value

                bucket[i][1] = value;
                return;
            }
        }

        bucket.push([key, value]); //else add the new key value pair to bucker
    }

    //get the value using key

    get(key) {
        let index = this.hash(key);

        let bucket = this.buckets[index];
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] == key) {
                return bucket[i][1];
            }
        }

        //else
        return false;
    }

    //delete key value pair

    delete(key) {
        let index = this.hash(key);

        let bucket = this.buckets[index];
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] == key) {
                bucket.splice(i, 1);
                return true;
            }
        }
        //else
        return false;
    }
}

// const hashTable = new HashTable(7);
// hashTable.set("name", "jishad");
// hashTable.set("age", 30);
// hashTable.set("place", "tirur");
// hashTable.set("gender", "male");
// console.log(hashTable.get("age"));

// console.log(hashTable.display());
// console.log(hashTable.buckets.flat(2));

//three types of collison handing techniqs in open addressing
//* linear probing
//*quadratic probing
//* double hashing

//hashtable using collision technique linear probing(index or index+1);

class LhashTable {
    constructor(size = 10) {
        this.size = size;
        this.buckets = new Array(this.size).fill(null);
    }

    //hash

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % this.size;
    }

    //seting function

    set(key, value) {
        let index = this._hash(key);

        while (this.buckets[index] !== null && this.buckets[index][0] !== key) {
            index = (index + 1) % this.size;
        }

        this.buckets[index] = [key, value];
    }

    //getting the key value pairs function

    get(key) {
        let index = this._hash(key);

        while (this.buckets[index] !== null) {
            if (this.buckets[index][0] == key) {
                return this.buckets[index][1];
            }
            index = (index + 1) % this.size;
        }

        return null;
    }

    delete(key) {
        let index = this._hash(key);
        while (this.buckets[index] !== null) {
            if (this.buckets[index][0] === key) {
                this.buckets[index] = "DELETED";
                return true;
            }
            index = (index + 1) % this.size;
        }

        return false;
    }

    //print the hashtable

    // Print the hash table
    print() {
        this.buckets.forEach((slot, index) => {
            if (slot !== null && slot !== "DELETED") {
                console.log(`${slot[0]} : ${slot[1]}`);
            }
        });
    }
}

//Example usage
// const hashTable = new LhashTable();

// hashTable.set("name", "Alice");
// hashTable.set("age", 25);
// hashTable.set("city", "Wonderland");

// console.log(hashTable.get("name")); // Output: Alice
// console.log(hashTable.get("age")); // Output: 25

// hashTable.delete("age");
// console.log(hashTable.get("age")); // Output: null

// hashTable.print();

//coliision handling using quadratinc probing

class QhashTable {
    constructor(size = 7) {
        this.size = size;
        this.table = new Array(this.size).fill(null);
    }

    //hashing
    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = hash + key.charCodeAt(i);
        }

        return hash % this.size;
    }

    //setting pairs

    set(key, value) {
        let index = this._hash(key);
        let i = 0;

        while (this.table[index] !== null && this.table[index][0] !== key) {
            i++;
            index = (this._hash(key) + i * i) % this.size;
        }

        this.table[index] = [key, value];
    }

    //get function

    get(key) {
        let index = this._hash(key);
        let i = 0;

        while (this.table[index] !== null) {
            if (this.table[index][0] === key) {
                return this.table[index][1];
            }
            i++;
            index = (this._hash(key) + i * i) % this.size;
        }

        return null;
    }

    //delete function

    delete(key) {
        let index = this._hash(key);
        let i = 0;
        while (this.table[index] !== null) {
            if (this.table[index][0] === key) {
                this.table[index] = "DELETED";
                return true;
            }
            i++;
            index = (this._hash(key) + i * i) % this.size;
        }
        return false;
    }

    //display function

    display() {
        this.table.forEach((slot, index) => {
            if (slot !== null && slot !== "DELETED") {
                console.log(`${slot[0]} : ${slot[1]}`);
            }
        });
    }
}

// const myHashTable = new QhashTable();

// myHashTable.set("name", "Alice");
// myHashTable.set("age", 25);
// myHashTable.set("city", "Wonderland");

// console.log(myHashTable.get("name")); // Output: Alice
// console.log(myHashTable.get("age")); // Output: 25

// myHashTable.delete("age");
// console.log(myHashTable.get("age")); // Output: null

// myHashTable.display();

// collison handling using double hashing

//collision resolution using double hashing

class DHashTable {
    constructor(size = 7) {
        this.size = size;
        this.table = new Array(this.size).fill(null);
    }

    hash1(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % this.size;
    }

    hash2(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i) * (i + 1); //wighed by someof charcodes
        }

        return (hash % this.size) - 1 + 1;
    }

    //set function

    set(key, value) {
        let index = this.hash1(key);
        let step = this.hash2(key);
        let i = 0;

        while (this.table[index] !== null && this.table[index][0] !== key) {
            i++;
            index = (this.hash1(key) + i * step) % this.size; // Double hashing formula
        }

        this.table[index] = [key, value];
    }

    //get function

    get(key) {
        let index = this.hash1(key);
        let step = this.hash2(key);
        let i = 0;
        while (this.table[index] !== null) {
            if (this.table[index][0] === key) {
                return this.table[index][1];
            }
            i++;
            index = (this.hash1(key) + i * step) % this.size;
        }
        return null;
    }

    delete(key) {
        let index = this.hash1(key);
        let step = this.hash2(key);
        let i = 0;

        while (this.table[index] !== null) {
            if (this.table[index][0] === key) {
                this.table[index] = "DELETED";
                return true;
            }
            i++;
            index = (this.hash1(key) + i * step) % this.size;
        }

        return false;
    }

    //display functiion

    display() {
        this.table.forEach((slot, index) => {
            if (slot !== null && slot !== "DELETED") {
                console.log(`${slot[0]} : ${slot[1]}`);
            }
        });
    }
}

const myTable = new DHashTable(7);

myTable.set("name", "jishad");
myTable.set("age", 30);
myTable.set("place", "tirur");
myTable.delete("place");
console.log(myTable.get("age"));
