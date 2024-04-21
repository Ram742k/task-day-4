const rotateArray = function(arr, k) {
    const rotations = k % arr.length;
    return arr.slice(rotations).concat(arr.slice(0, rotations));
};

console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 2));
