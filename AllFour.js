var groups = [ "adult", "teen", "child" ]
/** 
 * @param {Number} age 
 */
function GetAgeGroup(age) {
    if (age < 10) return groups[2]
    if (10 < age && age <= 18) return groups[1]
    if (18 < age) return groups[0]
}

/**
 * @param {Number} count 
 */
function Fibonacci(count) {
    let f = 0;
    let l = 1;
    for (let i = 0; i < count; i++) {
        let tf = f;
        f = l;
        l = tf + l;
    }
    return f;
}

/**
 * @param {string} str 
 */
function IsPalindrome(str) {
    return str.toLowerCase().split("").reverse().join("") == str.toLowerCase()
}

/**
 * @param {Number} num 
 */
function OddOrEven(num) {
    return num%2 ? "odd" : "even";
}