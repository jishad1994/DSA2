// merge function to sort two sorted array

function merge(left, right) {
    let i = 0;
    let j = 0;
    let result = [];
    //iterative sorting method
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i++]);
        } else {
            result.push(right[j++]);
        }
    }

    return result.concat(left.slice(i).concat(right.slice(j)));
}

//function to mergerSort the array (recursive method)

function mergeSort(array) {
    if (array.length <= 1) return array; //base case
    let middle = Math.floor(array.length / 2);

    let left = mergeSort(array.slice(0, middle));
    let right = mergeSort(array.slice(middle));

    return merge(left, right);
}

//example 
console.log(mergeSort([4,7,2,9,4,0,1,6,4])) // output :[ 0, 1, 2, 4, 4, 4, 6, 7, 9]


//