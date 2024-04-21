const getPalindromes = function(arr) {
    const isPalindrome = str => str === str.split('').reverse().join('');

    return arr.filter(isPalindrome);
};

console.log(getPalindromes(["radar", "hello", "level", "world"]));
