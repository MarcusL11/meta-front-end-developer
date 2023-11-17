// Exercise 1: Using the logical && operator
// var score = 8
// var compare = score > 0 && score < 10
// console.log("Mid-level skill: " + compare)

// Exercise 2: Using the logical || operator
// var timeRemaining = 0
// var energy = 10
// var gameover = timeRemaining === 0 || energy === 0
// console.log("Game over: " + gameover)

// Exercise 3: Using the modulus operator, %, to test if a given number is odd
// var num1 = 2
// var num2 = 5
// var test1 = num1 % 2
// var test2 = num2 % 2
// var result1 = test1 == 0
// var result2 = test2 == 0
// console.log("Is " + num1 + " an even number?", result1)
// console.log("Is " + num2 + " an even number?", result2)

// Exercise 4: Add numbers using the + operator
// console.log(5 + 10)

// Exercise 5: Concatenate strings using the + operator
// var now = "Now in "
// var three = 3
// var d = "D!"
// console.log(now + three + d)

// Exercise 6: Use the += operator to accumulate values in Variables
// var counter = 0
// counter += 5
// counter += 3
// console.log(counter)

// If else  Condition Statement 
// var age = 10
// if (age >= 65) {
//     console.log("You get your income from your pension")
// }
// else if (age <= 65 && age >= 18) {
//     console.log("Each month you get a salary")
// }
// else if (age < 18) {
//     console.log("You get an allowance")
// }

// else {
//     console.log("The value of the age variable is not numerical")
// }

// Switch Statement

// var day = "Sunday"
// switch(day) {
//     case "Monday":
//         console.log("Today is Monday")
//         break
//     case "Tuesday":
//         console.log("Today is Tuesday")
//         break
//     case "Wednesday":
//         console.log("Today is Wednesday")
//         break
//     case "Thursday":
//         console.log("Today is Thursday")
//         break
//     case "Friday":
//         console.log("Today is Friday")
//         break
//     case "Saturday":
//         console.log("Today is Saturday")
//         break
//     case "Sunday":
//         console.log("Today is Sunday")
//         break
//     default:
//         console.log("Today is not a day of the week. Your not on Earth")
// }
    
// For Loop
// for (var i = 1; i < 10; i++) {
//     console.log(i);
// }

// var i = 1
// while (i < 4) {
//     console.log(i);
//     i = i + 1;
// }

// Exercise: Working with conditionals and loops
// for (var i = 1; i < 11; i++) {
//     if (i == 1) {
//         console.log("Gold Medal")
//     }
//     else if (i == 2) {
//         console.log("Silver Medal")
//     }
//     else if (i == 3) {
//         console.log("Bronze Medal")
//     }
//     else {
//         console.log(i)
//     }
// }

// for (var i = 1; i <= 10; i++) {
//     switch (i) {
//         case 1:
//             console.log("Gold Medal")
//             break
//         case 2:
//             console.log("Silver Medal")
//             break
//         case 3:
//             console.log("Bronze Medal")
//             break
//         default:
//             console.log(i)        
//     }
// }

/*
* coimment
*/

// Functions
// function listArrayItems(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         console.log(arr[i]) //display the array item where the index is euqal to i
//     }
// }

// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
// listArrayItems(colors); //display all items in the array at once

// Functions with a nested condional statement
// function listArrayItems(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] == 'red') {
//             console.log(i*100, "tomato!")
//         } else {
//             console.log(i*100, arr[i])
//         }
//     }
// }

function letterFinder(word, match) {
    for (var i = 0; i < word.length; i++) {
        if (word[i] == match) {
            console.log("Found the " + match + " at " + i)
        }
        else {
            console.log("---No match found at" + i)
        }
    }
}

letterFinder("test", "t")