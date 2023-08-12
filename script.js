
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
console.log(friends); // here we can now see that it removed jay, the last element in the array.
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // this removes the FIRST element in an array
console.log(friends);

console.log(friends.indexOf('Steven'));

console.log(friends.includes('Steven')); // This checks whether or not that written element is in the specified array.
console.log(friends.includes(23));

if (friends.includes('Peter')) {
    console.log('You have a friend called Peter.');
} else {
    console.log('Peter never existed! He is just a mere phantom of the MIND!');
}



/////////////////////////////////////////
// CODING CHALLENGE #2



//1, WRITE FUNCTION CALLED 'calcTip'


//Here is the funciton called calcTip.
// We use a ternary operator ? as it is one simple peramteter.
// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }
// // Create an array called bills with all the bill values
// const bills = [125, 555, 44];
// // Now, create an array called 'tips' containing the tip value for each bill, calculated from the function you created before.
// const tip = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tip);
// // Create TOTAL array which will be the bill + tips.

// const total = [(bills)[0] + (tip[0]), (bills)[1] + (tip)[1], (bills)[2] + (tip)[2]];
// console.log(total);
// */
// // const jonasArray = [
// //     'Jonas',
// //     'Schmedtmann',
// //     2037 - 1991,
// //     'teacher',
// //     ['Michael', 'Peter', 'Steven']
// // ];

// // const jonas = {
// //     firstName: 'Jonas',
// //     lastName: 'Schmedtmann',
// //     age: 2037 - 1991,
// //     job: 'teacher',
// //     friends: ['Michael', 'Peter', 'Steven']
// // };
// // // use dot notation to call the specific catergories within the array. 
// // console.log(jonas);
// // console.log(jonas.lastName);

// // console.log(jonas['lastName']);

// // console.log(jonas.friends);

// // const nameKey = 'Name';
// // console.log(jonas['first' + nameKey]);
// // console.log(jonas['last' + nameKey]);

// // // console.log(jonas.'last' + nameKey)

// // const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends');

// // if (jonas[interestedIn]) {
// //     console.log(jonas[interestedIn]);

// // } else {
// //     console.log('Wrong request! Choose between firstName, lastName, age, job and friends');
// // }

// // jonas.location = 'Portugal';
// // jonas['twitter'] = '@jonasschedtman';
// // console.log(jonas);

// // // Challenge 
// // // "Jonas has 3 friends, and his best friend is called Michael"
// // console.log(`${jonas.firstName} has ${jonas.length}`)

// // // function invertTree(node) {
// // //     let left = node.left
// // //     let right = node.right
// // //     node.right = left
// // //     node.left = right
// // //     invertTree(left)
// // //     invertTree(right)
// // // }

// // console, log(array[1]);

// //USING FOR LOOPS IN ARRAYS

// const jonas = [
//     'Jonas',
//     'Shmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true

// ];

// const types = [];
// console.log(jonas[0]);
// console.log(jonas[1]);

// for (let i = 0; i < jonas.length; i++) {
//     // reading from jonas array
//     console.log(jonas[i], typeof jonas[i]);


//     // filling types array
//     // types[i] = typeof jonas[i];
//     types.push(typeof jonas[i]);


// }


// // create a new array that contains each types of the elements. 

// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     ages.push(2037 - years[i]);
// }
// console.log(ages);

// // continue and break 
// console.log('-----  ONLY STRINGS -----')
// for (let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] !== 'string') continue;
//     console.log(jonas[i], typeof jonas[i]);
// }

// console.log('-----  BREAK WITH NUMBER -----')
// for (let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] === 'number') continue;
//     console.log(jonas[i], typeof jonas[i]);
// }

//FOR LOOPS WITHIN LOOPS 

// const jonas = [
//     'Jonas',
//     'Shmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true

// ];
// //THIS FOR LOOP COUNTS BACKWARDS IN THE JONAS ARRAY. 
// for (let i = jonas.length - 1; i >= 0; i--) {
//     console.log(i, jonas[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//     console.log(`--------Starting excercise ${exercise}`);

//     for (let rep = 1; rep < 6; rep++) {
//         console.log(`Exercise ${exercise} : Lifting weight competition ${rep}`);
//     }

// }

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repitition ${rep}`);
// }

// let rep = 1;
// while (rep <= 10) {
//     console.log(`WHILE: Lifting weights repitition ${rep}`);
//     rep++;
// }
// // Make a dice loop where it stops when it rolls a 6. 
// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repitition ${rep}`);
// }


// while (rep <= 10) {
//     console.log(`WHILE: Lifting weights repitition ${rep}`);
//     rep++;
// }
// // Make a dice loop where it stops when it rolls a 6. 


// let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

// while (dice !== 6) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6) console.log('Loop is about to end...');
// } 



// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 51];
// console.log(bills[6]);

// const tips = bills + tips;

// const calcTip = function (bills) {
//     return bill + tips

// }

// for (let i = 0; i < bills.length; i++) {
//     const tip = calT

// }


// function takeWhile(arr, pred) {
//     // Your code here
//     const arr = [2, 4, 6, 8, 1, 2, 5, 4, 3, 2];
//     const pred = num % 2 === 0;
//     if arr === pred {
//         return
//     }

// };

// let rep = 1;
// while (rep <= 10) {
//     console.log(`WHILE: Lifting weights repitition ${rep}`);
//     rep++;
// }
// // Make a dice loop where it stops when it rolls a 6. 
// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repitition ${rep}`);
// }


// CODE WARS KATA SOLUTION 
// function repeatStr(n, s) {

//     return s.repeat(n);
// }

// console.log(repeatStr(15, "gagers"));



// * Use the BMI example from Challenge 1, and the code you already wrote, and improve it: 

// 1. Print a nice output to the console saying who has the higher BMI. The message can be either "Marks's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use template string to include the BMI values in the outputs, Example : "Mark's BMI (28.3) is higher thand John's (23.9)!"

// HINT: Use if/else statement :) 



// CHALLENGE #4
// Let's improve Steven's tip calculator even more, this time using loops!

// Your tasks:

// Create an array called bills containing all 10 test bill values.

// Create empty arrays for the tips and the totals (tips and totals)

// Use the calcTip function we wrote before (included in the starter code) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!



// TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.
// Tip Calculator Function from earlier lessons. 






// BONUS:

// Write a function calcAverage which takes an array called arr as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it if you feel like it:

// First, you will need to add up all values in the array. To do the addition, start by creating a variable sum that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the sum variable. This way, by the end of the loop, you have all values added together.

// To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements).

// Call the function with the totals array.




// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }
// // 1. Create an array to hold bills called bulls 

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// // 2. Create array for tips
// const tips = [];
// // 3, Create array for totals. 
// const totals = [];
// // Make a for loop to to loop through each number in the BILLS array. Starts from 0 and should stop once it reaches the entire length of the array. Add i++ as we want to go one by one from one element to another. 
// for (let i = 0; i < bills.length; i++) {
//     const tip = calcTip(bills[i]);
//     tips.push(tip);
//     totals.push(tip + bills[i]);
// }

// console.log(bills, tips, totals);


// // 👋 OPTIONAL: You can watch my solution in video format in the next lecture

// function calcAverage(arr) {

//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         // or .. sum = sum +arr[i];
//         sum += arr[i];
//     }
//     return sum / arr.length;
// }


// console.log(calcAverage([2, 3, 7]));
// console.log(calcAverage(totals));

// let userName = '';

// userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

// let userQuestion = ("Am I going to become a software developer?");

// console.log(`${userName} has asked: ${userQuestion}`);

// let randomNumber = Math.floor(Math.random() * 8);

// console.log(randomNumber);
// let eightBall = '';

// switch (randomNumber) {
//     case 0:
//         eightBall = 'It is certain';
//         break;
//     case 1:
//         eightBall = 'It is decidedly so';
//         break;
//     case 2:
//         eightBall = 'Reply hazy try again';
//         break;
//     case 3:
//         eightBall = 'Cannot predict now';
//         break;
//     case 4:
//         eightBall = 'Do not count on it';
//         break;
//     case 5:
//         eightBall = 'My sources say no';
//         break;
//     case 6:
//         eightBall = 'Outlook not so good';
//         break;
//     case 7:
//         eightBall = 'Signs point to yes';
//         break;
// }

// console.log(`${eightBall}`);

// var myArray = [0, 1, 2, 3, 4, 5,];
// const sum = myArray.reduce((a, b) => a + b, 0);
// const average = (sum / myArray.length) || 0;
// console.log(`The sum is: ${sum}. The average is: ${average}.`); //"The sum is: 15. The average is 2.5."


// let myArray = [1, 2, 3, 4, 5];
// let sum = 0;

// for (let i = 0; i < myArray.length; i++) {
//     sum += myArray[i];
// }
// const avg = sum / myArray.length;

// console.log(sum);
// console.log(avg);

// function getAverage(marks) {
//     let sum = 0;
//     for (let i = 0; i < marks.length; i++) {
//         sum += marks[i];
//         let avg = sum / marks.length;
//         return avg;


//     };

//     //TODO : calculate the downward rounded average of the marks array
// };

// let oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// getAverage();


// function likes(names) {
//     if (names.length === 0) {
//         return `"no one likes this"`;
//     } else if (names.length === 1) {
//         return `""${names[0]} likes this"`;
//     } else if (names.length === 2) {
//         return `"${names[0]} and ${names[1]} like this"`;
//     } else if (names.length === 3) {
//         return `"${names[0]}, ${names[1]} and ${names[2]}" `
//     } else if (names.length > 3) {
//         return `"${names[0]}, ${names[1]} and ${names.legnth - 2} others like this"`
//     }
//     // TODO
// // };





// // function likes(names) {
// //     if (names.length === 0) {
// //         return 'no one likes this';
// //     } else if (names.length === 1) {
// //         return `${names[0]} likes this`;
// //     } else if (names.length === 2) {
// //         return `${names[0]} and ${names[1]} like this`;
// //     } else if (names.length === 3) {
// //         return `${names[0]}, ${names[1]} and ${names[2]} like this`;
// //     } else if (names.length > 3) {
// //         return `${names[0]}, ${names[1]} and ${names.length - 2} other like this`;
// //     }

// // // []                                -->  "no one likes this"
// // // ["Peter"]                         -->  "Peter likes this"
// // // ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// // // ["Max", "John", "Mark"]-- > "Max, John and Mark like this"
// // // ["Alex", "Jacob", "Mark", "Max"]-- > "Alex, Jacob and 2 others like this"

// // function doesItHaveB(a, b) {
// //     for (let i = 0; i < a.length; i++) {
// //       if (i === b) {
// //         return true;
// //       } else {
// //         return false;
// //       }
// //     }
// //   }
// // doesItHaveB(list);
// //   person 

// //   [1, 2, 6, 'John']; 
// //   name: Sam 
// Age: 32
// // Write a function that takes an object (a) and a string (b) as argument
// // Return true if the object has a property with key 'b'
// // Return false otherwise

// // Test cases:

// // myFunction({a:1,b:2,c:3},'b')

// // myFunction({x:'a',y:'b',z:'c'},'a')

// // myFunction({x:'a',y:'b',z:undefined},'z')



// function calculateArea(width, height) {
//     const area = width * height;
//     return area;
// }

// calculateArea(20, 40);
// console.log(calculateArea);


// function printNumbers(n) {
//     for (let i = 1; i <= n; i++)
//         console.log(i);
// }

// function isEven(num) {
//     if (num = (number % 2 == 0)) {
//         return true;
//     };
// };

// // Exercise 4: Functions

// // Write a function called reverseString that takes a string str as a parameter and returns the reverse of the input string.

// // function reverseString(str) {
// //     return str.split('').reverse().join('');
// //     console.log(str);

// // }
// // reverseString('Bryan');
// // console.log(reverseString);



// // Write a function called filterEvenNumbers that takes an array of numbers as a parameter and returns a new array containing only the even numbers from the original array.

// // function EvenNumbers() {
// //     numsArr = [];
// //     return numsArr.map(number % 2 == 0);

// // };

// // //ARRAY METHODS 

// // let arr = ['a', 'b', 'c', 'd', 'e'];
// // // console.log(arr.length);
// // // console.log(arr[1]);
// // // console.log(arr.slice(2));
// // // console.log(arr.slice(-2));
// // // console.log(arr.slice(1, -2));
// // // console.log(arr.slice());
// // // console.log(...arr);

// // // //SPLICE 

// // // console.log(arr.splice(2));
// // // console.log(arr.splice(1, 2));
// // // console.log(...arr);

// // //REVERSE 

// // let arr2 = ['f', 'g', 'h', 'i', 'j'];
// // console.log(arr2.reverse());

// // //CONCAT
// // const letters = arr.concat(arr2);
// // console.log(letters);
// // console.log([...arr, ...arr2]);

// // //JOIN
// // console.log(letters.join(' - '));
// // console.log(letters.join(' yep! '));



// // // STANDARD FUNCTION
// // const calcAge2 = function (birthYear) {
// //     return 2037 = birthYear;
// // }
// // // HOW WE WRITE ARROW FUNCTIONS 
// // const calcAge3 = birthYear => 2037 - birthYear;

















// /// Example Question: What does the following code do? ///

// //  let array = [1,2,3,4,5]

// // for (i = 1; i < array.length; i= i +2) {
// //     console.log(array[i] +2);
    
// // }

// /*if you can answer this now thats great ideally you
// can also clearly explain what each part of the code
// does. We will break this code down in detail bellow
// and then answer this question*/

// // now lets break it down line by line

// /* here we are creating an array which is a list of
// things sepperated by commas. Above they were integers
// but they can be anything. When we want to get a
// part of the array we can use array[i] where i 
// is the position in the array (starting from 0) that
// we want to take from(i stands for index). Uncomment
// the code bellow and try replacing i with numbers
// between 0 and 4 to see what happens*/ 

// //  let testaArray = [1,'a',0,'false',100];
// //  console.log(testarray[i]);


// /*on the next line we have for. For works like a
// premade function that takes 3 arguments 1. a initial
// value for i 2. a maximum for i and 3. How to change 
// i each loop. After the arguments are curly brackets
// containing code to run at each value of i until i
// reaches its maximum value*/

// /*Un-comment the code bellow and try altering the 
// three arguments of the for loop to see what happens
// also try replacing the code in the curly brackets
// with the code bellow and see what happens. 
// console.log(1+testarray[i]) 
// Also
// note that you can replace i= i +1 with i++ and get
// the same results you will often see i++ because
// it is easier to type */

// // let testarray = [1,'a',0,'false',100];

// //  for (i =0; i < 5; i = i+1) {
// //   console.log("at this index " + testarray[i] );
// //  }

// /* the last bit of code in the original question
// that we need to talk about is array.length
// .lenght at the end of an array turns it into a number
// that matches how many things are in the array */

// /* uncomment the following code then
// try using .lenght to console log the length for all
// the following arrays*/

// // let array1 = [1,'a',0,'false',100];
// // let array2 = [1,1,1];
// // let array3 = [700];
// // let array4 = [];
// // console.log(array2.length);

// //you should now be ready to answer the question

// /// Example Question: What does the following code do? ///

// let array = [1,2,3,4,5]

// for (i =1; i < array.length; i= i +2) {
//     console.log(array[i] +2);
    
// }

// /*answer
// It creates an array with the numbers between
// 1 and 5 and then runs a for loop with that array.
// the loop starts and index 1 which is 2 it adds 2
// to that number and console logs it. Then it advances
// 2 index numbers to index 3 which is 4 it then adds
// 2 to that and console logs it. It advances the index
// number to 5 but that is larger than the length of
// the array (5) so it ends the loop ultimately what is 
// loged is 4 and then 6*/




// // Example Question2: What does the following code do? ///

// // let array = [1,2,3,4,5]
// // let newarray= array.map(x => x*2);
// // console.log(newarray);

// /* these kind of questions are just a test on if you
// remember the common types of operations we can do with
// arrays here .map is used. .map creates a new array
// where each element put into the function written
// inside the ()  in this case that is multiplying by
// 2. So in the end we get an array of [2, 4, 6, 8, 10]
// Well I wont go into as much detail for all of them
// I will put examples of few other common array methods
// bellow that you can uncomment out and mess around
// with to help prepare yourself for if they come up on
// your interview questions*/


//         /////////////////////////////////////
//          ///adding and removing from array///
//         ////////////////////////////////////


//     /// .push , .pop , .shift , and .unshift///


// /* uncomment only one at at time or you will have
// trouble understanding what they do. In simple
// terms these are used to add and remove from the
// start or end of arrays */

// let array = [1,2,3,4,5];

// // array.shift();
// //  array.unshift('hi');
// // array.push('bye');
// // array.pop();

// console.log(array);




//                /// .slice ///

// /* alter the two arguments to see how it changes the
// new array produced slice creates new arrays out of
// parts of old ones picking start and end points to
// copy from*/

// // let array = ['a','b','c','d','e'];
// // let newarray = array.slice(1,4);
// // console.log(newarray);


//             ///////////////////////////////
//             ////Searching through array////
//             //////////////////////////////

//             ///index of ///

// /* looks for first element with listed
// value and gives you its index replace c with other
// letter in the array to see it in action find*/

// // let array = ['a','b','c','d','e'];
// // console.log(array.indexOf('d'));



            
//                 ///findindex///
            
// /* similar to index of but finds first element 
// where a statement is true so can be used for
// things other than exact matches try changing 
// the argument like you would an if statement and
// see how the result changes*/

// // let array = [5,6,7,8,9];
// // console.log(array.findIndex(x => x >7));


//                 ///find///

// /*.find works the same but returns the value
// rather than the index */

// // let array = [5,6,7,8,9];
// // console.log(array.find(x => x >7));

//             ///includes///

// /*includes tells us if an array contains a value
// or not by returning true of false. Currently this
// logs false what would you change to make it log true */

// // let array = [5,6,7,8,9];
// // console.log(array.includes(10));


//             ///Some and Every///

// /* these return true or false to tell you if the array
// has either some elements that pass a test(soem) or all 
// elements that pass the test(every) the array bellow
// returns false for both functions try channging it to
// make some return true and then to make every return
// true*/

// // let array =[ 6,7,8];
// // console.log("some " + array.some(x => x < 5));
// // console.log('every ' + array.every(x => x < 5));


//     //////////////////////////////////////////////////
//     ///Creating arrays and combining array elements///
//     /////////////////////////////////////////////////

   


//         /// join and split ///

// //join///

// /* pretty simple try typing something bwetween the
// '' marks and see how the results change note even
// if you use numbers the result is a string*/

// // let array = ['a','b','c','d','e'];
// // console.log(array.join(''));


// //split//

// /* instead of joining arrays to strings this
// splits that string into an array how it does this
// try deleting the space between "" and see how the 
// results change or replace it with "a"*/

// // let ourString = "One day I will be an array";
// // let array = ourString.split(" ");
// // console.log(array);





//             /// concat ///

// /* creates a new array by combining attatching the
// array in () to the end of the array that concat
// is used on*/

// //  let array = [5,6,7,8,9];
// //  let arraytwo = ['a','b','c','d','e'];

// //  let newarray = array.concat(arraytwo);
// //  console.log(newarray);


//                 ///Reduce///
// /* combines all the elements in array via mathmatical
// operation. For example the code bellow adds all the
// elements. Can you change it to multiply together all
// of them? note you can call the values whaever 
// the first value which I have named acc is the value
// of the previous numbers combined and the secound value
// here x represents the next element to be combined in*/

// // let array = [5,6,7,8,9];
// // let OurValue = array.reduce((acc, x) => acc + x);
// // console.log(OurValue);

// /* note: Reduce moves from left to right for things
// like subtraction where direction matters if you want
// to start from the right use .reduceRight */



//                  ///Filter///
// /* creates a new array from an existing one by
// filtering in the elements that meet a requirement
// Can you shift the condition to make an array with 
// lenght 3?*/

//  let array1 = [5,6,7,8,9];
//  let newArray = array1.filter(x => x>7);
//  console.log(newArray);


//                 ///New and Fill///

//  /* new Array(x) creates a new array filled with x 
//  elements. .fill(y) makes the value of every element
//  y. Try replacing 5 and "hi" with other vaules in the
//  function bellow to see what happens*/
                
// // let array = new Array(5).fill("hi");
// // console.log(array);



// /* note: map from the first example fall into this
//    catagory as well*/





//             ///////////////////////////////
//             ///Changing order of elements//
//             //////////////////////////////

//                 ///Sort///

// /*Sort changes the order of elements in an array
// it is most commenly used to put things in alphabetical
// or numerical order by default it sorts aphabetically
// it has to be modified a bit to do numerically */

// // let array1 = ['cat', 'ape','tiger', 'elk'];
// // let array2 = [82, 77, 23, 4, -6, 0 ];

// // array1.sort();
// // console.log(array1);

// // array2.sort((x,y) => x-y);
// // console.log(array2);

//             ///Reverse///

// /* reverse reverses the order of elements in an array*/

// // let array =['now', 'sense', 'make', 'I'];
// // array.reverse();
// // console.log(array);


