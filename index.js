
//Question number 1
function calculateSum(a, b) {
    return a + b;
}
let result = calculateSum(10, 20);
console.log(result);



//Question number 2
function isEven(number) {
    return number % 2 === 0;
}

let result1 = isEven(10);
console.log(result1); // Output: true

let result2 = isEven(9);
console.log(result2); // Output: false



//Question number 3
function findMax(arr) {
    if (arr.length === 0) {
        throw new Error("Array is empty");
    }
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

let numbers = [10, 9, 8, 20, 15 , 11 , 17];
let maxNumber = findMax(numbers);
console.log(maxNumber);


//Question number 4
function reverseString(str) {
    return str.split('').reverse().join('');
}

let originalString = "Mosaeb";
let reversedString = reverseString(originalString);
console.log(reversedString);


//Question number 5
function filterOddNumbers(arr) {
    return arr.filter(num => num % 2 !== 0);
}

let numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let oddNumbers = filterOddNumbers(numbers1);
console.log(oddNumbers);


//Question number 6
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

let numbers2 = [10, 20, 30, 40, 50];
let sum = sumArray(numbers2);
console.log(sum);


//Question number 7
function sortArray(arr) {
    return [...arr].sort((a, b) => a - b);
}

let number3 = [5, 2, 8, 1, 4 , 10 , 11 , 7];
let sortedNumbers = sortArray(numbers3);
console.log(sortedNumbers);


//Qusetion number 8
function capitalizeFirstLetter(str) {

    return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(capitalizeFirstLetter("hello"));
console.log(capitalizeFirstLetter("mosaeb"));