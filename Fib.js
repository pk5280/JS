
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

function fib2(n) {
    //Binet's Formula
    return Math.round((Math.pow((1+Math.sqrt(5))/2, n) - Math.pow((1-Math.sqrt(5))/2, n)) / Math.sqrt(5));
}

console.log(fib1(1), fib1(2), fib1(3), fib1(4), fib1(5), fib1(16))
console.log(fib2(1), fib2(2), fib2(3), fib2(4), fib2(5), fib2(16))

