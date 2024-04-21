const sum = (function(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
})([1, 2, 3, 4, 5, 6, 7]);

console.log(sum);
