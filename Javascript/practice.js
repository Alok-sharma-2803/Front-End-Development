// const product = {
//     productName: "Parker Jotter Standard CT Ball Pen",
//     productColor: "Black",
//     productRating: 4,
//     reviewCount: 7002,
//     hasActiveDeal: true,
//     percentOff: 5,
//     productMRP: 285,
// };


// const profile = {
//     firstName: "Alok",
//     lastName: "Sharma",
//     isProfileVerified: true,
//     postsCount: 195,
//     followersCount: 569000,
//     followingCount: 4,
//     jobRole: "Data Analyst",
//     currentWorkPlace: "Sprinklr",
//     lastWorkplace1: "Udaan",
//     lastWorkPlace2: "Vedantu",
//     lastWorkPlace3: "Cure.Fit",
//     objective: "To complete my M.S. in Analytics"
// };

// Q) Iterate through a string and prin all individual characters
// str_test = "Javascript"

// V1 ans
// for (let i = 0; i < str_test.length; i++){
//     console.log("String Char: ", str_test[i])
// }

// V2 ans
// for (let val of str_test){
//     console.log("String Char: ", val)
// }

// for (let val in profile){
//     console.log("Key:", val, "has value", profile[val])
// }

// Q) Print all even numbers from 0-100
// let output = []
// for (let i = 0; i <= 100; i++){
//     if (i % 2 === 0){
//         output.push(i)
//     }
// };
// console.log(output)

// Q) Number guessing - No cap on no. of tries
// setTimeout( () => {
// let num_var = Math.floor(Math.random() * 100);
// console.log(num_var)

// let input_num;
// let guess_count = 1;
// let min_var = 0;
// let max_var = 100;

// while(1 === 1){
//     input_num = Number(prompt(`Guess the number:\n(Hint: Number is between ${min_var} and ${max_var}`));
    
//     if (input_num === num_var){
//         alert(`Your guess ${input_num} is right! You took ${guess_count} attempt(s)`);
//         break;
//     } else if (input_num >= num_var) {
//         max_var = Math.floor(max_var - (max_var - num_var) /2);
//         guess_count++;
//         alert("Incorect! Try again");
//     } else if (input_num < num_var) {
//         min_var = Math.floor(min_var + (num_var - min_var) / 2);
//         guess_count++;
//         alert("Incorect! Try again");
//     } else {
//         guess_count++;
//         alert("Incorect! Try again");
//     }
// }
// }, 5000);


// Q) Take user's first and last name from user in a prompt and create a username as firstNameLastNameLengthOfBothNames

// let user_input = prompt("Enter your first and last name:\nE.g. Alok Sharma")
// let userName;

// if (user_input.trim().indexOf(" ") >= 0){
//     firstName = user_input.split(" ")[0].toLowerCase()
//     lastName = user_input.split(" ")[1].toLowerCase()
//     userName = "@" + firstName + lastName + (firstName.length + lastName.length)
// } else {
//     userName = "@" + user_input.trim().toLowerCase() + user_input.length
// }

// // console.log(`Your user name is: ${userName}`)
// console.log(userName);



// Q) For a given array of students marks, find the average marks of the entire class
// student_marks = [23,4,5,66,78,99,0,11];
// let sum_marks = 0;

// for (let i of student_marks){
//     sum_marks = sum_marks + i
// };

// let class_avg = sum_marks/(student_marks.length);
// console.log(class_avg);



// take an array of prices and revert with the values after 10% off
// priceArray = [234,345,4543,22,3454];
// discountedPriceArray = [];
// for (let i of priceArray){
//     discountedPriceArray.push(Math.round(i * 0.9))
// }

// console.log(discountedPriceArray)
// console.log(discountedPriceArray.slice(3, 5))



// Funstions as arrow functions:
// Q) calculate a multiplication

// const arrowMultiply = (a,b) => {return a * b}

// function multiply_v2(a, b){
//     return a * b
// }


// Q) Create a function which takes a str argumnet and return the count of vowels
// function vowel_count(str){
//     let output = 0;
//     let vowels = ["a", "e", "i", "o", "u"]
//     for (let val of str){
//         if (vowels.includes(val)){
//             output++;
//         }
//     }
//     return output;
// }

// const arrowVowelCount = (str) => {
//     let output = 0;
//     let vowels = ["a", "e", "i", "o", "u"]
//     for (let val of str){
//         if (vowels.includes(val)){
//             output++;
//         }
//     }
//     return output;
// }


// forEach in arrays
// arr_var = [100,234,43,45,6,78,88,91];

// V1 ans
// const discountedPrice = (price) => {return price * 0.9}

// arr_var = [100,234,43,45,6,78,88,91]
// arr_var_2 = arr_var.map(discountedPrice)
// console.log(arr_var_2)

// V2 ans
// arr_var.forEach((a) => {console.log(a * 0.9)});


// Q) For an array of numbers, print the square of values
// let arr_num = [1,2,3,4,5,6];
// let arr_sq_num = arr_num.map((a) => {return a**2});
// console.log(arr_sq_num)
// // Filter arrays - Even numbers

// Array - Filter
// console.log(arr_num.filter((val) => {return val % 2 == 0}))

// const moreThan3 = (a) => {
//     return a > 3
// }
// console.log(arr_num.filter(moreThan3))



// Array - summarise (sum, min, max, avg etc)
// array.reduce()
// arr_num = [1,2,3,4,5,6]

// console.log(`Sum: ${arr_num.reduce((prev, curr) => {return prev + curr})} `)
// console.log(`Multiply: ${arr_num.reduce((prev, curr) => {return prev * curr})}`)
// console.log(`Average: ${(arr_num.reduce((prev, curr) => {return prev + curr}))/arr_num.length}`)


// Q) filter for marks 90+
// studentMarks = [90,80,54,65,76,89,91,93,96,99,40];
// studentMarks90Plus = studentMarks.filter((a) => {return a > 90});
// console.log(studentMarks90Plus);


// Q) Take a num input from user. create an array of numbers 1-n. calculate sum and product of array
// let userInput = prompt("Enter a number:");
// let arr_n = [];
// for (let i = 1; i <= userInput; i++){
//     arr_n.push(i)
// }
// let sumArray = arr_n.reduce((prev, curr) => {return prev + curr})
// let productArray = arr_n.reduce((prev, curr) => {return prev * curr})

// console.log(`Sum of an array of numbers 1 - ${userInput} is ${sumArray}.\nAnd product of the same is ${productArray}`)
