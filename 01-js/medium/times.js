/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateSumTime(n) {
    const startTime = new Date();

    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    const endTime = new Date();

    const timeDiff = endTime - startTime;
    const seconds = timeDiff / 1000;
    return { sum, seconds };
}

const result1 = calculateSumTime(100);
console.log(`Sum from 1 to 100: ${result1.sum}, Time: ${result1.seconds} seconds`);

const result2 = calculateSumTime(100000);
console.log(`Sum from 1 to 100000: ${result2.sum}, Time: ${result2.seconds} seconds`);

const result3 = calculateSumTime(1000000000);
console.log(`Sum from 1 to 1000000000: ${result3.sum}, Time: ${result3.seconds} seconds`);