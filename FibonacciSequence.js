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
