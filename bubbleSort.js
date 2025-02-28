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

console.log(optimizedBubbleSort([1,2,8,4,5,6]))
