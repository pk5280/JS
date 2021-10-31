
function fibonacci(n){
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
console.log(fibonacci(1))
console.log(fibonacci(2))
console.log(fibonacci(3))
console.log(fibonacci(6))
console.log(fibonacci(16))