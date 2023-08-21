// Write a JavaScript function that counts the number of even numbers in an array of integers
// using a for loop.




function countEvenNumbers(numbers) {
    var count = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 == 0)
            count++;
        else
            continue
    }
    return count
}

var nums = [5, 6, 2, 4, 3, 55, 66, 88, 87, 259, 165]
console.log(countEvenNumbers(nums));