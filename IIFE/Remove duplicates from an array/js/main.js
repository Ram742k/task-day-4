const uniqueArray = (function(arr) {
    return arr.filter((value, index) => arr.indexOf(value) === index);
})([1, 2, 2, 3, 4, 4, 5]);

console.log(uniqueArray);
