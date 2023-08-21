// Write a JavaScript function that finds the maximum value in an array of numbers using a for
// loop.




function findMaxValue(numbers) {
    var result = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > result)
            result = numbers[i]
        else
            continue
    }
    return result
}

var nums = [5, 6, 2, 4, 3, 55, 66, 88, 87, 259, 165]
console.log(findMaxValue(nums));