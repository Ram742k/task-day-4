const palindromes = (function(arr) {
    const isPalindrome = str => str === str.split('').reverse().join('');

    return arr.filter(isPalindrome);
})(["radar", "hello", "level", "world"]);

console.log(palindromes);
