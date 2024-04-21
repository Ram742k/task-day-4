const removeDuplicates = function(arr) {
    return arr.filter((value, index) => arr.indexOf(value) === index);
};

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
