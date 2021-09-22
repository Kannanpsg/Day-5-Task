
//Write a function called “addFive”.
//Given a number, “addFive” returns 5 added to that number.

let addFive = (num) => {
    return num + 5
}

console.log("Calling Add Five Function:" + addFive(10))

//Write a function called “getOpposite”.
//Given a number, return its opposite

let getOppposite = (data) => {

    if (data === 0)
        return 0

    if (Number.isInteger(data)) {
        return (-data)
    } else {
        return -1
    }

}
console.log("Opposite of 5 is: " + getOppposite(5))
console.log("Opposite of 5a is: " + getOppposite(1.1))
console.log("Opposite of 5.5 is: " + getOppposite('a'))

//Create a function that takes a string and returns it as an integer.

let strToNum = (str) => {

    return +str

}

console.log("Converting string to num: " + strToNum('6'))

/// Create a function that takes a number as an argument, 
// increments the number by + 1 and returns the result.

let addOne = (num) => {
    return num + 1
}

console.log("Calling Add One Function:" + addOne(10))

//Find the maximum number in an array of numbers

function findMax(ar)
{
    var max = ar[0];

    for(var i = 0; i < ar.length; i++)
    {
        if (ar[i] > max)
        {
            max = ar[i];
        }
    }

    return max;
}

var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var max = findMax(ar);
console.log("Max: ", max);

// Create a function that takes an array and returns the first element.

let firstArrayEle = (arr) => {
    return arr[0]
}

let arr = [1, 2, 3, 4]

console.log("First Element for array is: " + firstArrayEle(arr))

//Create a function that will merge two arrays and return the result as a new array

var ar1 = [1, 2, 3];
var ar2 = [4, 5, 6];

var ar = mergeArrays(ar1, ar2);
console.log(ar);

function mergeArrays(ar1, ar2)
{
    var ar = [];

    for(let el of ar1)
    {
        ar.push(el);
    }

    for(let el of ar2)
    {
        ar.push(el);
    }

    return ar;
}

//Reverse a string
var s = reverseString("JavaScript");
console.log(s);

function reverseString(s)
{
    var s2 = "";

    for(var i = s.length - 1; i >= 0; i--)
    {
        var char = s[i];
        s2 += char;
    }

    return s2;
}

//Print the first 100 prime numbers
printPrimes(100);

// Function prints the first nPrimes numbers
function printPrimes(nPrimes)
{
    var n = 0;
    var i = 2;

    while(n < nPrimes)
    {
        if (isPrime(i))
        {
            console.log(n, " --> ", i);
            n++;
        }

        i++;
    }
}


// Returns true if a number is prime
function isPrime(n)
{
    if (n < 2)
        return false;

    if (n == 2)
        return true;

    var maxDiv = Math.sqrt(n);

    for(var i = 2; i <= maxDiv; i++)
    {
        if (n % i == 0)
        {
            return false;
        }
    }

    return true;
}

//


// Convert Hours into Seconds
// Write a function that converts hours into seconds.

let hourToSeconds = (hour) => {
    return hour * 60
}

console.log("Converted value of hour to second: " + hourToSeconds(2) + "sec")

// Find the Perimeter of a Rectangle
// Create a function that takes height and width and finds the perimeter of a rectangle.
let perimeterRect = (l, b) => {
    return 2 * (l + b)
}

console.log("Perimeter of rectangle is: " + perimeterRect(10, 10))

// Calculate the sum of numbers received in a comma delimited string

let str = '1.5,2.3,3.1,4,5.5,6,7,8,9,10.9'



let sumOfStringArray = (str) => {

    let stringArray = str.split(',').map(Number)

    console.log(stringArray)

    let sum = stringArray.reduce((currentTotal, item) => {
        return currentTotal + item
    }, 0)
    return sum
}

console.log("Sum of string array: " + sumOfStringArray(str))



