const rotatedArray = (function(arr, k) {
    const rotations = k % arr.length;
    return arr.slice(rotations).concat(arr.slice(0, rotations));
})([1, 2, 3, 4, 5, 6, 7, 8], 2);

console.log(rotatedArray);
