
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

*/


//declare variables for scores and sums of each team 
// used variable to calculate the average and made that a variable. 
// used console log and string and template literals to create a message saying the average score for each team
// to find out which is the winner, I used if else statements to establish which team won from the higher score or whether it was a draw. 

const dolphinScore = (96 + 108 + 89);
console.log (dolphinScore);

const dolphinScoreSum = 3;
const dolphinScoreAverage = dolphinScore / dolphinScoreSum;
console.log (dolphinScoreAverage);
console.log (`The average Dolphin score is ${dolphinScoreAverage}. `);

const koalaScore = (88 + 91 + 110);
console.log (koalaScore);
const koalaScoreSum = 3;

const koalaScoreAverage = koalaScore / koalaScoreSum;
console.log (koalaScore);
console.log (`The average Koala score is ${koalaScoreAverage}.`)


if (dolphinScoreAverage > koalaScoreAverage) {
    console.log ('Dophins are the winners!');
} else if (dolphinScoreAverage === koalaScoreAverage) {
    console.log ('Dolphins and Koalas draw.');
} else {
    (dolphinScoreAverage < koalaScoreAverage) 
        console.log ('Koalas are the winners');
}







//TEST DATA - Dolphins score 96, 108 and 89. Koalas score 88, 91 and 123. 

// 1st: Find the average number how to:  
// 1 . Find the sum (add all numbers together )
// 2. determine amount of numbers 
// 3. divie the sum by the total numbers ( )