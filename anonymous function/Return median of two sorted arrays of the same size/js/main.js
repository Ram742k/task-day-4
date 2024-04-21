const getMedian = function(arr1, arr2) {
    const merged = arr1.concat(arr2).sort((a, b) => a - b);
    const mid = Math.floor(merged.length / 2);
    
    if (merged.length % 2 === 0) {
        return (merged[mid - 1] + merged[mid]) / 2;
    } else {
        return merged[mid];
    }
};

console.log(getMedian([1, 2, 3], [4, 5, 6]));
