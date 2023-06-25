// 1. Always Hungry
function alwaysHungry(arr) {
    let food = false
    for (let i=0; i<arr.length; i++) {
        if (arr[i] === "food") {
            console.log("yummy")
            food = true
        }
    }
    if (food===false) {
        console.log("I'm hungry")
    }
}
alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"


// 2. High Pass Filter
function highPass(arr, cutoff) {
    var filteredArr = [];
    for (let i=0; i<arr.length; i++ ) {
        if (arr[i]>cutoff) {
            filteredArr.push(arr[i])
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]


// 3. Better than average 
function betterThanAverage(arr) {
    var sum = 0;
    for (let i=0; i<arr.length; i++) {
        sum += arr[i]
    }
    var count = 0
    for (let i=0; i<arr.length; i++) {
        if (arr[i]>(sum/arr.length)) {
            count +=1
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4


// 4. Array Reverse 
function reverse(arr) {
    let reversed = []
    for (let i=arr.length; i>0; i--) {
        reversed.push(arr[i-1])
    }
    arr = reversed
    return arr;
}
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]


// 5. Fibonacci Array
function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
        for (let i=2; i<n; i++) {
            fibArr.push(fibArr[i-1]+fibArr[i-2])
        }
    return fibArr;
}
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
