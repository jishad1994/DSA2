// //bubble sort practice

// function bubbleSort(array) {
//     let swapped = false;
//     for (let i = 0; i < array.length - 1; i++) {
//         for (let j = 0; j < array.length - i - 1; j++) {
//             if (array[j] > array[j + 1]) {
//                 [array[j], array[j + 1]] = [array[j + 1], array[j]];
//                 swapped = true;
//             }
//         }
//         if (!swapped) break;
//     }
//     return array;
// }

// console.log(bubbleSort([3, 5, 7, 2, 3, 6, 9, 4]));

// //insertion sort

// function insertionSort(array) {
//     for (let i = 1; i < array.length; i++) {
//         let key = array[i];
//         let j = i - 1;

//         while (j >= 0 && key < array[j]) {
//             array[j + 1] = array[j];
//             j--;
//         }

//         array[j + 1] = key;
//     }

//     return array;
// }

// console.log(insertionSort([4,5,7,2,4,8,4,9,7,1]))

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
//merge sort

function mergerSort(array) {
    if (array.length <= 1) return array;

    let middle = Math.floor(array.length / 2);

    let left = mergerSort(array.slice(0, middle));
    let right = mergerSort(array.slice(middle));
    return merge(left, right);
}

function merge(left, right) {
    let i = 0;
    let j = 0;
    let result = [];
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i++]);
        } else {
            result.push(right[j++]);
        }
    }

    return result.concat(left.slice(i).concat(right.slice(j)));
}

console.log(mergerSort([33, 66, 77, 88, 33, 55, 11, 99]));

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

console.log(lomutoQuickSort([44,8,3,0,5,1]))