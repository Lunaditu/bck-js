/**
 * @param {string} str 
 */
function IsPalindrome(str) {
    return str.toLowerCase().split("").reverse().join("") == str.toLowerCase()
}