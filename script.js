
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
*/

const age = 12; 
const isOldEnough = age >= 18; 

if (isOldEnough) {
    console.log(`Sarah can start driving lessons 🚗 `);
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :) `);
} 

//This is a control structure. 

if(){

} else {

}