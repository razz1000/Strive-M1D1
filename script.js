








/* 










1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/

let twoIntegersFunction = (n1, n2) => {
    if (n1 === n2) {
        return (n1 + n2) * 3
    } else 
    return n1 + n2
}
twoIntegersFunction(2,2) // prints 12
twoIntegersFunction(1,2) // prinst 3


/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/


let checkIfFifty = (n1, n2) => {
    if (n1 === 50 || n2 === 50 || (n1 + n2) === 50) {
        return true
    } else 
    return false 
}
checkIfFifty(10,50) // prints true
checkIfFifty(25,25) // prints true
checkIfFifty(5,1) // prints false


/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/


let randomString1 = "hello"
let newString = randomString1.slice(2,3) 
console.log(randomString1) // prints "hello"
console.log(newString) // prints "l"


/*
4)
Create a function to find the largest of three given integers.
*/

let array1 = [1,110,100]
Math.max(...array1) // prints 110     / Ask teaching assistant why I need to add the "..." for this to work.


/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/


let checkRangeFunction = (n1, n2) => {
    if (n1 >= 40 && n2 <= 60 || n1 >= 70 && n2 <= 100) {
        return true
    } else 
    return false
}
checkRangeFunction(10,10) // prints false 
checkRangeFunction(70,90) // prints true 
checkRangeFunction(60,40) // prints true 
checkRangeFunction(60, 100) // prints false 


/*
6) 
Create a function to create a new string of specified copies (positive number) of a given string.
*/


let stringWithSpecifiedCopy = (str, n) => {
    if (n < 0) {
        return false 
    }else 
    return str.repeat(n)
}
stringWithSpecifiedCopy("Hello", 2) // prints "HelloHello"
stringWithSpecifiedCopy("Hello", -2) // prints false 


/*
7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/


let displayCertainCityNames = (city) => {
    if (city.startsWith("Los") === true || city.startsWith("New") === true) {
        return city 
    } else 
    return ""
}
displayCertainCityNames("NewHello") // Prints "NewHello"
displayCertainCityNames("NwHello") // prints ""
displayCertainCityNames("Los Angeles") // prints "Los Angeles"


/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/


let randomArray2 = [1,2,3]

let calculateSumOfElementsInArray = () => {
    return randomArray2[0] + randomArray2[1] + randomArray2[2] 
}
console.log(calculateSumOfElementsInArray()) // prints 6


/*
9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
*/

let randomArray3 = [1,4];

let functionTotest = () => {
    if (randomArray3[0] === 1 || randomArray3[1] === 1 || randomArray3[0,1] === 3 || randomArray3[0,1] === 3) {
        return true
    } else 
    return false
}
console.log(functionTotest()) // prints true. And if I change the numbers in the array to !== 1 || 3 then it prints false . 



/*
10)
Create a function to test whether an array of integers of length 2 does not contain 1 or a 3
*/

let randomArray4 = [1,4];

let functionTotest2 = () => {
    if (randomArray4[0] !== 1 || randomArray4[1] !== 1 || randomArray4[0,1] !== 3 || randomArray4[0,1] !== 3) {
        return false
    } else 
    return true
}
console.log(functionTotest2()) // Returns false // ASK TEACHING ASSISTANT ABOUT THIS ONE - A BIT TRICKY.



/* 11)
Create a function to find the longest string from a given array of strings.
*/

let arrayOfStrings1 = ["string1", "string20000", "string2"]

let arrayLength = 0;
let longestInTheArray = [];

let findTheLongestString = () => {
    for (let i = 0; i < arrayOfStrings1.length; i++) {
        if (arrayOfStrings1[i].length > arrayLength)
        longestInTheArray.pop(arrayOfStrings1[i].length);
    }
}
findTheLongestString()
console.log(longestInTheArray)

// HAVE SOME ISSUES WITH THIS ONE . cOME BACK TO IT.


/* 
12)
Create a function to find the types of a given angle.
Types of angles:
Acute angle: An angle between 0 and 90 degrees.
Right angle: An 90 degree angle.
btuse angle: An angle between 90 and 180 degrees.
Straight angle: A 180 degree angle.
*/

let angleType = (angle) => { 
    if(angle < 90) {
        return "Acute angle.";
    }
    if(angle === 90) {
        return "Right angle.";
    }
    if(angle > 90 && angle < 180) {
        return "btuse angle.";
    }
    else if (angle === 180)
    return "Straight angle.";
}


/*     
13)
Create a function to find the index of the greatest element of a given array of integers
*/

let arrayRandom2 = [1,2,3,4,5,8,10]
arrayRandom2.indexOf(Math.max(...arrayRandom2)) // Prints 6. 

/* 14)
Create a function to get the largest even number from an array of integers.
*/

let arrayofRandomIntegers = [1,2,5,8,100,1000,10021112,5]
let output2 = [];
let output = 0;

let findLargestEvennumber = () => {
    
    for (let i = 0; i < arrayofRandomIntegers.length; i++) {
        if (arrayofRandomIntegers[i] > output && arrayofRandomIntegers[i] % 2 === 0) {
            output2.push(arrayofRandomIntegers[i]); 
        }
    }
}
findLargestEvennumber()
console.log(output2)/* prints [2, 8, 100, 1000, 10021112] */


/* 16)
Create a function to check from two given integers, whether one is positive and another one is negative.
*/



let checkIfPostitieandNegative = (nr1, nr2) => {
    if (nr1 > 0 && nr2 < 0 || nr1 < 0 && nr2 > 0) {
        return true
    } else 
    return false 
}
checkIfPostitieandNegative(2, -1) // prints true 
checkIfPostitieandNegative(-2, 2) // prints true 
checkIfPostitieandNegative(2, 2) // prints false 


/* 
17)
Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case. 
*/

let functiontoConvertToUpperandLower = (word) => {
    if (word.length < 3) { 
        return  word.toUpperCase();
    } else 
    front = (word.substring(0, 3)).toLowerCase();
    back = word.substring(3, word.length).toUpperCase();  
    return front + back;
}
functiontoConvertToUpperandLower("Helloooooooooooo") // prints 'helLOOOOOOOOOOOO'


/* 
18)
Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.
*/

let functionAndRange2 = (number1, number2) => {
    if(number1 + number2 >= 50 && number1 + number2 <= 80) {
        return 65
    } else 
    return 80
}
functionAndRange2(25,25) // prints 65
functionAndRange2(10,10) // prints 80



/* 
19)
Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:

If the number has 3 as a factor, output 'Diego'.
If the number has 5 as a factor, output 'Riccardo'.
If the number has 7 as a factor, output 'Stefano'.
If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
Examples
28's factors are 1, 2, 4, 7, 14, 28.
this would be a simple "Stefano".
30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
this would be a "DiegoRiccardo".
34 has four factors: 1, 2, 17, and 34.
this would be "34".
*/


let convertNumberToString = (number) => {
    if(number % 3 === 0) {
        return "Diego"
    } else if (number % 5 === 0) {
        return "Riccardo"
    } else if (number % 7 === 0) {
        return "Stefano"
    } else 
    return number   
}
convertNumberToString(20021) // prints 20021
convertNumberToString(10) // prints "Riccardo"
convertNumberToString(3) // prints Diego


/* 
20)
Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC
*/

function firstLetter(word) {
    return word[0];
 };

let functionToGiveAcronym = (str) => {
    let words = str.split(" ");
    let acr = words.map(firstLetter);
    return acr.join("").toUpperCase();
}

let str = "Hello there This is Cool"
let acronym = functionToGiveAcronym(str)
console.log(acronym) // prints "HTTIC"
