// quickSort recursive method

function quickSort(array) {
    if (array.length <= 1) return array;
    let pivot = array[array.length - 1];  //setting   pivot 
    let left = [];
    let right = [];

    for (let i = 0; i < array.length - 1; i++) {
        if (pivot > array[i]) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }

    return [...quickSort(left),pivot,...quickSort(right)];
}

//example
console.log(quickSort([2,5,1,8,4,6,3]))