// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// 36. creates variable 'name' and give it a string value 'Dane'
// 38. conditional statement evaluates variable type (string?) and value of 'name.' If name is Mary, logs a direct address in console. If name is not Mary, logs a general address.
// 
//

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// 
// 58. creates variable secret but does not give it a value
// 60. creates variable code and gives it number value 123
// 59. conditional statement evalutes if code is number variable with a value of 123.
// 62. if true, value of secret is set to string 'super' AND code is set to new value of 123*2
// 67. if code is greater than 250, secret is set to sring 'duper.' 
// 71. logs value of secret. if code were set to a number other than 123 but less than 250, secret would remain undefined.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// 
// 83. set variable isStudent to boolean true
// 84. set variable age to 34
// 85. set variable zip to (my age and zip! *uncanny*)
// 92. conditional: if student is true and zip is number variable with value greater than 8000, logs 'west coast'
// 94. if student is boolean false OR age is less than 30, logs the 'hobbies' question
// 96. if student student is boolean true, but first conditional statement returns FALSE becuase zip code is less than 80000, logs 'welcome'
// 98. if first three conditions were to return FALSE, logs 'weather.' this would happen if isStudent were other than boolean value.
//

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
  //FIX colorTwo = 'purple';
      // (did not reset colorTwo) 

}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;


//FIX if (temp > 39 && time >= 4) {
    //(conditional currently evaluates if temp is greater than 39 OR if time is greater or equal to 4. needs to evaluate if BOTH conditions are true.)
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;


//FIX if(age >= minAge) {}
    // (conditional reverses prompt. currently bars 21 year olds from enteing venue.)
if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

