//find the occurance of each char in a string using hashtable;

function coutnOccurance(string) {
    let hashTable = {};

    for (char of string) {
        if (char !== " ") {
            hashTable[char] = (hashTable[char] || 0) + 1;
        }
    }

    for (let key in hashTable) {
        console.log(` char ${key} apperas ${hashTable[key]} times`);
    }
}

//testing✅
coutnOccurance("hello world");

//find the first non repeating chracter in an a string using hashtable;

function firstUnique(string) {
    let hashTable = {};

    for (let char of string) {
        if (char !== " ") {
            hashTable[char] = (hashTable[char] || 0) + 1;
        }
    }

    for (char of string) {
        if (hashTable[char] == 1) {
            console.log(`${char} is the first non repeating character`);
            return;
        }
    }
}

//✅ testing

firstUnique("swiss");
