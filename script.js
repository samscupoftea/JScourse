
/*
40 + 8 + 23 - 10;
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher';
console.log(myFirstJob);
console.log(myCurrentJob);
*/




/*

let javascriptIsFun = true;
console.log(javascriptIsFun);


console.log(typeof true);



const age = 15;


if(age >= 18) {
    console.log('Sarah can start driving license');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

/*

const country = 67.33
const continent = 56.55
console.log(country);
console.log(continent);
console.log(`The population of my country is ${country} million.`);
console.log(`The population of the continent is ${continent} million.`);



let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
//console.log(typeof 23);
//console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);


let year;
console.log(year);
console.log(typeof year);


year = 1991;
console.log(typeof year);

console.log(typeof null);


let age = 30; 
age = 31;

const birthYear = 1990;
//birthYear = 1990 


//Math operators 
const now = 2037;
const ageJonas = now - 1991; 
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2** 3)
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas'; 
const lastName = 'Schedtmann';
console.log(firstName + ' ' + lastName);

//Assignment operators 

let x = 10 + 5; 
x += 10; // x = x + 10 = 25 
x *= 4; // x = x * 4 = 100 
x++; // x = x +1
x--; // x = x - 1 
x--;
console.log(x);

//Comparison operators 
console.log(ageJonas > ageSarah); 
// > GREATER THAN, < LESS THAN, >= GREATER THAN OR EQUAL TO, < LESS THAN OR EQUAL TO.
console.log(ageSarah >= 18);

 const isFullAge = ageSarah >= 18;

 console.log(now - 1991 > now - 2018);


// math operators are usually executed before the comparisson operator . 

 const now = 2037;
const ageJonas = now - 1991; 
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

console.log(25 - 10 -5);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10 Therefore x and y are 10 e.g 10 10 
console.log(x,y);

//Due to precedence, the divide would be executed first which wouldn't make sense. The solution for this it to use parenthesis will be executed first(snajsn )
const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);


//coding challenge 1 
Mark and John are trying to compare their BMI, which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height).

1. Store Mark's and John's Weight and Height in variables. 
2. Calculate both their BMI's using the formula (You can use both versions)

const markWeightKg = 78;
const markHeightM = 1.69;
const johnWeightKg = 92;
const johnHeightM = 1.95;

// **2 means squared. 
const markBMI = markWeightKg / markHeightM **2;

const johnBMI = johnWeightKg / johnHeightM **2; 
console.log (markBMI, johnBMI);

const markHigherBMI = markBMI > johnBMI;
console.log (markHigherBMI);


const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;
const jonas = "I'm " + firstName + ',a' + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas);


const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log (jonasNew);

console.log(`Just a regular string...`);

console.log('string with \n\
multiple \n\
lines');

console.log(`String
multiple 
lines`);
-----------------------------------------

const age = 12; 
const isOldEnough = age >= 18; 

if (isOldEnough) {
    console.log(`Sarah can start driving lessons 🚗 `);
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :) `);
} 

//This is a control structure. 



const birthYear = 1990;
let century;
if (birthYear <= 2000) {
     century = 20;
} else {
     century = 21;
}
console.log(century);
*/
////////////////////////////////////////////////////
// CODING CHALLENGE NUMBER 2 

/* Use the BMI example from Challenge 1, and the code you already wrote, and improve it: 

1. Print a nice output to the console saying who has the higher BMI. The message can be either "Marks's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use template string to include the BMI values in the outputs, Example : "Mark's BMI (28.3) is higher thand John's (23.9)!"

HINT: Use if/else statement :) 



const markWeightKg = 78;
const markHeightM = 1.69;
const johnWeightKg = 92;
const johnHeightM = 1.95;

// **2 means squared. 
const markBMI = markWeightKg / markHeightM **2;

const johnBMI = johnWeightKg / johnHeightM **2; 
console.log (markBMI, johnBMI);

const markHigherBMI = markBMI > johnBMI;
console.log (markHigherBMI);

if (markBMI > johnBMI) {
    console.log(`Marks's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else {
    console.log(`John's BMI is higher than Mark's!`);
}


// type conversion
// type conversion is when we change a number into a string and visa versa. 

// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// // NaN means NOT A NUMBER or INVALID NUMBER. 
// console.log(Number('Jonas'));
// console.log(typeof NaN);

// console.log(String(23), 23);
// // type coercion 
// // type cohersion is when JS automatically changes the variable type. 
// console.log('I am ' + 23 + ' years old')
// console.log('23' - '10' - 3);
// console.log('23' / '2');

// let n = '1' + 1; // '11' 
// n = n - 1; 
// console.log(n);


//Truthy and falsy values 
//5 falsy values: 0, '' , undefined , null, NaN
// Remember that '' means empty string. 
console.log(Boolean(0));
console.log(Boolean(undefined));
//any string that has a name or character is true. 
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100; 
if(money) {
    console.log("Don't spend it all ; )");
} else {
    console.log('You should get a job!');
}

let height = 0;
if (height) {
    console.log('YAY! Height is defined');
} else {
    console.log('Height is UNDEFINED')
}

//equality operator will return a boolean value (true of false)
const age = '18';
if (age === 18) console.log('You just became and adult :D (strict)');
// === strict equality operator
// == loose equality operator 
//TIP - Avoid the loose equality operator as much as possible. It doesn't discriminate between numbers and strings. 
if (age == 18) console.log('You just became and adult :D (loose)');

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {   // 22 === 23 -> FALSE
    console.log('Cool! 23 is an amazing number!')
} else if (favourite === 7) {
    console.log(`7 is also a cool number`)
      
} else if (favourite ===9){
    console.log(`9 is also a cool number`)
}
else {
    console.log('Number is not 23 or 7 or 9')
}
//operator for different is !-- 

if(favourite !== 23) console.log('Why not 23?');


 const hasDriversLicense = true; // A 
 const hasGoodVision = true;
// and operator && 
// or operator || 
// not operator ! 

 console.log(hasDriversLicense && hasGoodVision);
 console.log(hasDriversLicense || hasGoodVision);
 console.log(!hasDriversLicense);

 const shouldDrive = hasDriversLicense && hasGoodVision;

//  if(shouldDrive) {
//     console.log('Sarah is able to drive!')
//  } else {
//     console.log('Someone else should drive.')
//  }
const isTired = false; // C variable 
console.log(hasDriversLicense && hasGoodVision && isTired);

if(hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!')
 } else {
    console.log('Someone else should drive.')
 }

else if (dolphinScoreAverage === koalaScoreAverage >= 100) {
    console.log ('Dolphins and Koalas draw.')


//declare variables for scores and sums of each team 
// used variable to calculate the average and made that a variable. 
// used console log and string and template literals to create a message saying the average score for each team
// to find out which is the winner, I used if else statements to establish which team won from the higher score or whether it was a draw. 

const dolphinScore = (97 + 112 + 81);
console.log (dolphinScore);

const dolphinScoreSum = 3;
const dolphinScoreAverage = dolphinScore / dolphinScoreSum;
console.log (dolphinScoreAverage);
console.log (`The average Dolphin score is ${dolphinScoreAverage}. `);

const koalaScore = (109 + 95 + 86);
console.log (koalaScore);
const koalaScoreSum = 3;

const koalaScoreAverage = koalaScore / koalaScoreSum;
console.log (koalaScore);
console.log (`The average Koala score is ${koalaScoreAverage}.`)


if (dolphinScoreAverage > koalaScoreAverage && dolphinScoreAverage >= 100) {
    console.log ('Dophins are the winners!');
} else if (dolphinScoreAverage < koalaScoreAverage && koalaScoreAverage >= 100) {
        console.log ('Koalas are the winners');
 } else if (dolphinScoreAverage === koalaScoreAverage && dolphinScoreAverage >= 100 && koalaScoreAverage >= 100) 
 {
    console.log ('Dolphins and Koalas draw.');
} else {
    console.log ('No one wins the trophy! :(');
} 







//TEST DATA - Dolphins score 96, 108 and 89. Koalas score 88, 91 and 123. 

// 1st: Find the average number how to:  
// 1 . Find the sum (add all numbers together )
// 2. determine amount of numbers 
// 3. divie the sum by the total numbers ( 



const day = 'tuesday';

switch (day) {
case 'monday': // day === 'monday'
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
case 'tuesday':
        console.log('Prepare theory videos');
        break;
case 'wednesday':
case 'thursday':
    console.log('Write code examples');
    break;
case 'friday':
    console.log('Record vidoes');
    break;
case 'saturday':
case 'Sunday':
    console.log('Enjoy the weekend :D');
    break;
    default:
    console.log('Not a valid day!');
}

if (day === 'monday'){
    console.log('Plan course structure');
    console.log('Go to coding meetup'); 
} else if (day === 'tuesday'){
    console.log('Prepare theory videos');
} else if (day === 'wednesday'|| day === 'thursday'){
    console.log('Write code examples');
} else if (day === 'friday'){
    console.log('Record vidoes');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend! :D');
} else {
    console.log('Not a valid day!');
}



//The conditional Operator (Ternary Operator) 

const age = 23 
age >= 18 ? console.log('I like to drink wine.') : console.log('I like to drink water.');


const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

//Same thing worked out using if/esle statement. 
let drink2;
if(age >=18) {
    drink2 = 'wine';
} else {
    drink2 = 'water';
}
console.log(drink2);

// Because ternary operator is an expression, we can use it within a template literal. Whereas you cannot do this with if/else statements as they are not expressions. 

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water' }`);


const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}.`);

//output string: 'The bull was 275, the tip was 41.25, and the total value 316.25'

*/

'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const interface = 'Audio';

/*


// Everything within the curley braces is called a function buddy. This details what the function will actually do. 
function logger() {
    console.log('My name is Jonas');
}
//This is called UNVOKING THE FUNCTION, RUNNING THE FUNCTION, CALLING THE FUNCTION. 
logger();
logger();
logger();
//When we use functions, we can pass data and return data through the function. Imagine function to be like a food processor. 

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// Function declaration 
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);

//Function expression 
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);
console.log(age1, age2);


// Function Expression 
// const calcAge2 = function (birthYear) {

// return 2037 = birthYear;
// }

// Arrow function 
const calcAge3 = birthYear => 2037 - birthYear;
//The above does what the function expression does but without having to say return and without curley braces. 
//Here is a function for more variables. You must also wrap for using birthYear and firstName. 
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1990, 'Sam'));
console.log(yearsUntilRetirement(1980, 'Bob'));


//Now lets make the fruit processor can only make fruit with smaller pieces. Make a machine that first cuts the fruit into smaller pieces. 
//Function that cuts fruit into 4 pieces.  

function cutFruitPieces(fruit) {
    return fruit * 4;
}



function fruitProcessor(apples, oranges) {
   const applePieces =  cutFruitPieces(apples);
   const orangePieces = cutFruitPieces(oranges);
    console.log(apples, oranges);
    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}


const fruitPieces = fruitProcessor(2, 3);
console.log(fruitPieces);
*/
//Coding Challenge Number 1 
/*
1.Create arrow function called 'calcAverage to calculate the average of 3 scores/ 
2. Use the function to calculate the average for both teams. 
3. Create a function 'checkWinner' that takes average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, "Koalas win (30 vs. 13)". 
4. Use 'checkWinner' function to determine the winner for both DATA 1 and DATA 2. 
5. Ignore draws this time. 

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49. 
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27. 
*/



// Arrow function 

// const calcAverage = (number1, number2, number3) => (number1 + number2 + number3) / 3; 
// console.log (calcAverage(44,23,71));

// //Test 1 
// const scoreDolphins = calcAverage(44,23,71);
// const scoreKoalas = calcAverage(85, 54, 41);
// console.log(scoreDolphins,scoreKoalas);

// //Function expression 
// const checkWinner = function (avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//     } else if ()



//The above does what the function expression does but without having to say return and without curley braces. 
//Here is a function for more variables. You must also wrap for using birthYear and firstName. 
// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     //return retirement;
//     return `${firstName} retires in ${retirement} years`;
// }

//Coding Challenge #1 

/*
Back to the two gymnastics teams, the Dolphins and Koalas! There is a new gymnasitcs discipline, which works differently. Each team competes 3 times, and then average of the 3 scores is calculated (so one average score per team). 
A team ONLY wios if it has at least DOUBLE the average score of the other team. Otherwise, no team wins! 

1. Create and arrow function 'calcuAverage' to calculate the average of 3 scores.
2. Use the funciton to calculate the average for both teams. 
3. Create a function 'CheckWinner' that taks the average score of each team as parameters ('avgDoplins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use 'checkWinner' function to determine the winner for both DATA 1 and DATA 2. 
5. Ignore draws this time. 

TEST DATA 1: Doplhins score 44, 23 and 71. 
Koalas score 65, 54 and 49. 
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27. 
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores. 



const calcuAverage = (a, b, c ) => (a + b + c) / 3; 
console.log (calcuAverage(1, 5, 10));

//Test 1 
const scoreDolphins = calcuAverage(44,23,71);
console.log (`The average score for the dolphins is ${scoreDolphins}.`);
const scoreKoalas = calcuAverage(65,54,49);
console.log (`The average score for the dolphins is ${scoreKoalas}.`);




const checkWinner = function (avgDolphins, avgKoalas)
{
    if (avgDolphins >= 2 * avgKoalas) {
        console.log (`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log (`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log ('No team wins...');
    }
}
checkWinner(10050, 1);


// //Arrays. This is an example of why arrays are useful. This list is slow and clumsy. 
// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter'; 
// // How to write a simple array. 
// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);


//Arrays intro

// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);
// // arrays order from 0, 1, 2, 3 etc. So to call the first on the array list you should use 0. 
// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);


const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';
const friend4 = 'David';
const friend5 = 'William';
const friend6 = 'John';
const friends = ['Michael', 'Steven', 'Peter', 'David', 'William', 'John'];
console.log(friends);
console.log(friends[0]);
console.log(friends[1]);
console.log(friends.length);
console.log(friends[friends.length - 1])

//Below you can change expressions within the array itself. In this case, i changed PETER to JAY. 
friends[2] = 'Jay';
console.log(friends);
//friends = ['Bob', 'Alice']

const firstName = 'Jonas';
const jonas = ['Jonas', 'Schmedtmann', 2037 - 1991,
    'teacher', friends]
console.log(jonas);
console.log(jonas.length);

// Excercise 

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[2]);
const age4 = calcAge(years[3]);
const age5 = calcAge(years[4]);
const age6 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3, age4, age5, age6);

//Here we are using a calculation on elements in the array and putting it all together. 
const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);

*/

const friends = ['Michael', 'Steven', 'Peter'];

// Add elements - This adds Jay into the existing FRIENDS array. 
const newLength = friends.push('Jay');
// console logs the new array
console.log(friends);
// tells me how many elements are now in the updated array since using push
console.log(newLength);
// unshift adds a new element but to the START if the array. 
friends.unshift('John');
console.log(friends);

// Remove elements 
friends.pop(); // this removes the last element in an array
