console.time('fib1')
function fib1(n){
    //Brute-Force
    let x = 1;
    let y = 0;
    let sum = 1;
    if (n === 1) {
        return sum
    }
    while (n > 1) {
        sum = x + y
        y = x
        x = sum
        n -= 1
    }
    return sum
}
console.timeEnd('fib1')
console.time('fib2')
function fib2(n) {
    //Binet's Formula
    return Math.round((Math.pow((1+Math.sqrt(5))/2, n) - Math.pow((1-Math.sqrt(5))/2, n)) / Math.sqrt(5));
}
console.timeEnd('fib2')

// nth digit of Fibonacci Sequence
let n = 6
console.log(fib1(n))
console.log(fib2(n))

