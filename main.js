/*1. Add (1 point)
Write a function named "add" which takes two arguments (as input variables) and returns their sum.

You may use built-in operators in order to finish this kata.

For example, calling add(2, 4) should return a result of 6.*/

function add (x, y){
    return x + y
}

console.log(add(4, 6))
console.log(add(5, 10))

/*2. Multiply (2 points)
Write a function named "multiply" which takes two arguments (as input variables) and returns their product.

You may not use built-in math operators or functions (such as the * multiplication operator). Instead, you will use a FOR loop which calls your add function from the first kata.

For example, calling multiply(6, 4) should return a result of 24, which could be expressed by adding 6 to itself 4 times:*/

function multiply (x, y){
    let total = 0
    for (let index = 0; index < y; index += 1){
        total = add(x, total)

    }
    return total

}
console.log(multiply(4, 4))

/*3. Power/Exponentiation (2 points)
Write a function named "power" which takes two arguments ( x and n) and returns the the result of raising x to the nth power.

You may not use built-in math operators or functions (such as the * multiplication operator), or the ** operator for power/exponentiation). Instead, you will re-use functions you wrote in earlier katas to write this function.

For example, if we called power(2, 8), we should return 256 by multiplying 2 by itself 8 times:*/

function power (x, y){
    let total = 1
    for (let index =0; index < y; index += 1){
        total = multiply(x, total)
    }
    return total

}
console.log(power(3, 4))

function factorial (x){
    let total = 1
    for (let index = x; index > 1; index -= 1){
        total = multiply(index, total)
    }
    return total
}
console.log(factorial(5))



