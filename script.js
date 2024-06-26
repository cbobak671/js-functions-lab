/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. It should take two numbers as inputs and return the larger number. If they're equal, return either one.

Exercise 1 has been completed for you:
*/

const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  
  console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));

  /*
Exercise 2: isAdult()

Write a function named isAdult. It should take an age (number) and return 'Adult' if the age is 18 or over and 'Minor' otherwise.

Example: isAdult(21) should return 'Adult'.

Complete the exercise in the space below:
*/

function isAdult(age){
    if(age >= 18) {
        return 'Adult';
    } else {
        return 'Minor'
    }

}

console.log('Exercise 2 Result:', isAdult(2));

/*
Exercise 3: isCharAVowel()

Write a function named isCharAVowel that takes a single character as an argument. It should return true if the character is a vowel and false otherwise. For the purposes of this exercise, the character y should not be considered a vowel.

Example: isCharAVowel('a') should return true.

Complete the exercise in the space below:
*/

let vowel = ("a", "e", "i", "o", "u");
function isCharAVowel(vowel){
    if(vowel === "a" || vowel === "e" || vowel === "i" || vowel === "o" || vowel === "u"){
        return 'true'; 
    } else{
        return 'false';
    }
}

console.log('Exercise 3 Result:', isCharAVowel("e"));

/*
Exercise 4: generateEmail()

Create a function named generateEmail. It should take two strings: a name and a domain. It should return a simple email address.

Example: generateEmail('johnsmith', 'example.com') should return 'johnsmith@example.com'.

Complete the exercise in the space below:
*/

function generateEmail(name, domain){
    return name + "@" + domain;
}

console.log('Exercise 4 Result:', generateEmail("johnjacobjingleheimersmith", "example.com"));

/*
Exercise 5: greetUser()

Define a function called greetUser. It should take a name and a time of day (morning, afternoon, evening) and return a personalized greeting.

Example: greetUser('Sam', 'morning') should return "Good morning, Sam!"

Complete the exercise in the space below:
*/

function greetUser(name, timeOfDay){
    return `Good ${timeOfDay}, ${name}!`
}

console.log('Exercise 5 Result:', greetUser("Sam", "morning"));

/*
Exercise 6: reverseString()

Define a function called reverseString. It should take a string and return it with its characters in reverse order. 

Example: reverseString('rockstar') should return the string "ratskcor".

Complete the exercise in the space below:
*/

function reverseString(str){
    let splitString = str.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");
    return joinArray;
}

console.log('Exercise 6 Result:', reverseString("rockstar"));

/*
Exercise 7: checkPalindrome()

Define a function called checkPalindrome. It should take a string and return true if the string is a palindrome (reads the same forwards and backwards) and false otherwise.

Example: checkPalindrome('radar') should return true.
Example: checkPalindrome('taco') should return false.

Complete the exercise in the space below:
*/

function checkPalindrome(str){
    let splitString = str.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");
    if(joinArray === str){
        return true;
    } else
    return false;
}

console.log('Exercise 7 Result:', checkPalindrome("eye"));
  
/*
Exercise 8: maxOfThree()

Define a function, maxOfThree. It should accept three numbers and return the largest among them.

Example: maxOfThree(17, 4, 9) should return 17.

Complete the exercise in the space below:
*/

function maxOfThree(num1, num2, num3){
    return Math.max(num1, num2, num3);
}

console.log('Exercise 8 Result:', maxOfThree(5, 10, 8));


/*
Exercise 9: calculateTip()

Create a function called calculateTip. It should take two arguments: the bill amount and the tip percentage (as a whole number). The function should return the amount of the tip.

Example: calculateTip(50, 20) should return 10.

Complete the exercise in the space below:
*/

function calculateTip(billAmount, tipPercentage){
    return (billAmount * tipPercentage) / 100;
}

console.log('Exercise 9 Result:', calculateTip(50, 20));

/*
Exercise 10: convertTemperature()

Write a function named convertTemperature. It takes two arguments: a temperature and a string representing the scale ('C' for Celsius, 'F' for Fahrenheit). Convert the temperature to the other scale.

Example: convertTemperature(32, 'C') should return 89.6 (Fahrenheit).
Example: convertTemperature(32, 'F') should return 0 (Celsius).

Complete the exercise in the space below:
*/

function convertTemperature(numTemp, scale){
    if(scale === 'C'){
        return ((numTemp * 1.8) + 32);
    } else if (scale === 'F'){
        return ((numTemp - 32) * 1.8);
    }
}

console.log('Exercise 10 Result:', convertTemperature(32, "F"));

/*
Exercise 11: basicCalculator()

Create a function named basicCalculator. It should take three arguments: two numbers and a string representing an operation ('add', 'subtract', 'multiply', 'divide'). Perform the provided operation on the two numbers. In operations where the order of numbers is important, treat the first parameter as the first operand and the second parameter as the second operand.

Example: basicCalculator(10, 5, 'subtract') should return 5.

Complete the exercise in the space below:
*/

// function basicCalculator(num1, num2, action) {
//     switch(action) {
//         case 'subtract':
//             return num1 - num2;
//         case 'add':
//             return num1 + num2;
//         case 'multiply':
//             return num1 * num2;
//         case 'divide':
//             if(num2 !== 0) {
//                 return num1 / num2;
//             } else {
//                     return 'Cannot divide by zero'
//                 }
//             }
//     }

function basicCalculator(num1, num2, action) {
    if(action === 'subtract'){
        return num1 - num2;
    } else if(action === 'add'){
        return num1 + num2;
    } else if(action === 'multiply'){
        return num1 * num2;
    } else if(action === 'divide'){
        return num1 / num2; 
        } else if (num2 === 0){
            return "Invalid - enter number greater than 0"
        }
    }

console.log('Exercise 11 Result:', basicCalculator(10, 0, 'divide'));

