// bubble sort an unsorted array

let array = [3, 6, 8, 3, 9, 10, 11, 2];

function bubbleSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }

    return array;
}

console.log(bubbleSort(array));

// optimized version of bubble sort if no sort needed

function optimizedBubbleSort(array) {
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

console.log(optimizedBubbleSort([1, 2, 8, 4, 5, 6]));

//modify the bubble sort to do descending order instead of ascending order;

function descendingSort(array) {
    let swapped = false;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] < array[j + 1]) {
                swapped = true;
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }

        if (!swapped) break;
    }
    return array;
}

console.log(descendingSort([1, 2, 8, 4, 5, 6]));

//count the number of swaps

function countSwaps(array) {
    let count = 0;
    let swapped = false;
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                count++;
                swapped = true;
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
        if (!swapped) break;
    }
    return count;
}

console.log(countSwaps([1, 2, 8, 4, 5, 6]));

//recursive bubble sort

function recursiveBubbleSort(array, index = 0) {
    if (index == array.length - 1) return array;
    if (array[index] > array[index + 1]) {
        [array[index], array[index + 1]] = [array[index + 1], array[index]];
    }

    return ;
}
