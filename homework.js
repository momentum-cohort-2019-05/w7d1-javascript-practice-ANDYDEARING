// 1. Set the variable `givenName` to the string "Addison".
let givenName = "Addison"

// 2. Set candies equal to 20, people to 6, and leftover equal
// to the remainder of dividing 20 by 6.
let candies = 20
let people = 6
let leftover = candies % people

// 3. Create a function called greeting that returns "Hello, <name>!",
// where <name> is the name given as an argument to the function.
function greeting(name) {
    return `Hello, ${name}!`
}

// 4. Create a function called isOdd that, given a number, will
// return true if it is odd and false if it is not. An odd number is a
// number which, when divided by 2, has a remainder of 1 or -1.
function isOdd(number) {
    const remainder = number % 2
    if ( (remainder === -1) || (remainder === 1) ){
        return true
    } else {
        return false
    }
}

// 5. Create a function called isEven that, given a number, will
// return true if it is even and false if it is not. An even number is a
// number which, when divided by 2, has a remainder of 0.
function isEven(number) {
    const remainder = number % 2
    if ( remainder === 0 ){
        return true
    } else {
        return false
    }
}

// 6. Create a function called fahrenheitToCelsius that takes a
// Fahrenheit temperature as an argument and returns the
// temperature in Celsius.
function fahrenheitToCelsius(number) {
    return ( (number-32) * (5/9) )
}

// 6. Create a function called celsiusToFahrenheit that takes a
// Celsius temperature as an argument and returns the
// temperature in Fahrenheit.
function celsiusToFahrenheit(number) {
    return ( (number*(9/5)) + 32 )
}

// 7. Create a function called fahrenheitToKelvin that takes a
// Fahrenheit temperature as an argument and returns the
// temperature in Kelvin. This function must use your previous
// fahrenheitToCelsius function.
// Absolute zero (0 K) is equivalent to −273.15 C.
// 1 degree Kelvin equals 1 degree Celsius.
function fahrenheitToKelvin(number) {
    let temperature = fahrenheitToCelsius(number)
    return temperature + 273.15
}

// 8. Create a function called lesser that takes two numbers as
// arguments and returns the lesser of them. This function should
// use an if/else statement.
function lesser(x,y){
    if (x<y){
        return x
    } else {
        return y
    }
}

// 9. Create a function called multigreeting that takes a name
// and a language code and returns a version of "Hello, <name>!"
// in the specified language. The supported languages and their
// translations are below.
//
// en - Hello, <name>!
// es - ¡Hola, <name>!
// fr - Bonjour, <name>!
// eo - Saluton, <name>!
//
// If any other language code is used, return nothing.
function multigreeting(name,lang){
    let greeting
    if (lang === "en"){
        greeting = "Hello"
    } else if (lang === "es") {
        greeting = "¡Hola"
    } else if (lang === "fr") {
        greeting = "Bonjour"
    } else if (lang === "eo") {
        greeting = "Saluton"
    } else {
        return undefined
    }
    return `${greeting}, ${name}!`
}

// 10. Create a function called "sum" that takes an array of numbers and
// returns the sum of those numbers.
function sum(array) {
    let total = 0
    for (let number of array){
        total = total + number
    }
    return total
}

// 11. Create a function called "average" that takes an array of numbers
// and returns the average of those numbers.
// works with "arrayOfNumbers" but not "array". Why?
function average(array) {
    if (array.length < 1) {
        return undefined
    } else {
        let total = sum(array)
        return total/array.length
    }
}

// 12. Create a function called "minimum" that takes an array of numbers and
// returns the smallest number in that array.
function minimum(array) {
    if (array.length < 1) {
        return undefined
    } else {
        let minimum = array[0]
        for (let number of array) {
            if (number < minimum) {
                minimum = number
            }
        }
        return minimum
    }
}

// 13. There are many techniques to sort arrays in programming. Your programming
// language will likely include the ability to do this. We are going to
// implement sorting ourselves, however.
//
// A "selection sort" is one of the most simple sorting algorithms. To implement it,
// you start with an unsorted array of numbers. You search the array and find the
// smallest number in the array. You then insert that into a new array as the first
// element and remove it from the original array. You continue doing this until
// there are no numbers left in the original array.
//
// Create a function called selectionSort that takes an array of numbers and returns
// a sorted array using the above technique.
//
// Note 1: You do not actually want to delete things from the original array. You
// should copy it first. To copy an array, use the following code:
//
// var arrayCopy = array.slice(0);
//
// Think about why this works.
//
// Note 2: Selection sort can be implemented using one array. Read the explanation at
// https://courses.cs.vt.edu/csonline/Algorithms/Lessons/SelectionSort/index.html
// to see how. This may make more sense to you.

function selectionSort(array){
    if (array.length <= 1) {
        return array
    } else {
        let sorted = true
        // original solution
        // for (let index = 1; index<array.length; index++){
        //     if (array[index] < array[index-1]){
        //         sorted = false
        //     }
        // }
        // how would you do this without index++?
        // solved it
        let testNumber = array[0]
        for (let number of array){
            if (number < testNumber){
                sorted = false
            }
            testNumber = number
        }
        if (sorted){
            return array
        } else {
            // original solution
            // let arrayCopy = array.slice(0)
            // let sortedArray = []
            // let nextElement = undefined
            // for (let number of array){
            //     nextElement = minimum(arrayCopy)
            //     sortedArray.push(nextElement)
            //     arrayCopy.splice(arrayCopy.indexOf(nextElement),1)
            // }
            // return sortedArray

            // single array solution
            // how is this done without index manipulation?
            // asked in class, this solution is ok

            // make a copy of the array
            let arrayCopy = array.slice(0)

            let lowestRemaining = undefined

            for (let idx = 0; idx < arrayCopy.length; idx++){
                lowestRemaining = minimum(arrayCopy.slice(idx))

                // if the current index value isn't the lowest
                if (lowestRemaining !== arrayCopy[idx]){
                    // store the current index value
                    let temp = arrayCopy[idx]

                    // find the first index of the lowest remaining value
                    let lowestRemainingIndex = arrayCopy.indexOf(lowestRemaining)

                    // put the current index value there
                    arrayCopy[lowestRemainingIndex] = temp

                    // and put the lowest value in the current index
                    arrayCopy[idx] = lowestRemaining
                }
            }
            return arrayCopy
        }
    }
}
