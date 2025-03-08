// quickSort recursive method

function quickSort(array) {
    if (array.length <= 1) return array;
    let pivot = array[array.length - 1]; //setting   pivot
    let left = [];
    let right = [];

    for (let i = 0; i < array.length - 1; i++) {
        if (pivot > array[i]) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

//example
console.log(quickSort([2, 5, 1, 8, 4, 6, 3]));

// *************************************

//quick sort using lomuto partiotion method

function partition(array, low, high) {
    let pivot = array[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
        if (array[j] < pivot) {
            i++;
            [array[j], array[i]] = [array[i], array[j]];
        }
    }
    [array[i + 1], array[high]] = [array[high], array[i + 1]];
    return i + 1;
}

function LumotoQuickSort(array, low = 0, high = array.length - 1) {
    if (low < high) {
        let pivot = partition(array, low, high);
        LumotoQuickSort(array, low, pivot-1);
        LumotoQuickSort(array, pivot + 1, high);
    }
    return array;
}


console.log(LumotoQuickSort([4,6,7,3,4,8]))