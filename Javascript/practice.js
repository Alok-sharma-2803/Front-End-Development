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
priceArray = [234,345,4543,22,3454];
discountedPriceArray = [];
for (let i of priceArray){
    discountedPriceArray.push(Math.round(i * 0.9))
}

console.log(discountedPriceArray)
console.log(discountedPriceArray.slice(3, 5))