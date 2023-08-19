// Write a JavaScript function that takes an array of numbers and returns the sum of all positive numbers in the array.

const array = [1, 8, -9, 3, 5, -4, 0, 1, 10, 10, 10, -5, 5, 5];


function positiveSum(a) {
    var result = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] > 0)
            result += a[i];
        else
            continue;
    }
    return result;
}

console.log(positiveSum(array))

