//With Chain for single result.
const mark = 85;

if (mark >= 80 && mark <= 100) {
  console.log("A+");
} else if (mark >= 70 && mark < 80) {
  console.log("A");
} else if (mark >= 60 && mark < 70) {
  console.log("A-");
} else if (mark >= 50 && mark < 60) {
  console.log("B");
} else if (mark >= 40 && mark < 50) {
  console.log("C");
} else if (mark >= 33 && mark < 40) {
  console.log("D");
} else {
  console.log("F");
}

// Without chain for multiple result.
const marks = 85;

if (marks >= 80) {
  console.log("A+");
}
if (marks >= 70) {
  console.log("A");
}
if (marks >= 60) {
  console.log("A-");
}
if (marks >= 50) {
  console.log("B");
}
if (marks >= 40) {
  console.log("C");
}
if (marks >= 33) {
  console.log("D");
} else {
  console.log(F);
}

//Example (As per condition if you money more than Burger+Pizza you can buy both)

const burgerPrice = 250;
const pizzaPrice = 450;
const money = 850;

if (money >= 250 + 450) {
  console.log("You can have both a Burger and Pizza");
}
if (money >= 450) {
  console.log("You can have a Burger or a Pizza");
}
if (money >= 250) {
  console.log("You can have a Burger");
} else {
  console.log("You can't buy anything");
}

// Type oc conversion

//Number to string
const num = 100;
// const convertNum = num.toString();
const convertNum = String(num);

console.log(typeof convertNum);

//String to number

const nameP = "Abdullah";
const convNameP = Number(nameP);

console.log(typeof convNameP);

// But reality is String an't be converted to number
console.log(convNameP);

//String can convert to number if there is valid number.

const Emp = "105";
const convEmp = Number(Emp);

console.log(typeof convEmp);

console.log(convEmp);

// Type of coercion

console.log(10 + 10); // Number so it will be added so 10+10=20

console.log(10 + "10"); // Number + String =1010

console.log(10 - "10"); // Number - String. String will converted automatic to Number and the result will be 10-10=0

// All string will converted to Number if there is valid number incase of ( - / * )ch as;

console.log(10 / "10"); // 10 / 10 = 1

console.log(10 * "10"); // 10 * 10 = 100

//Truthy and Falsy value
// Falsy values are;
//False
//0
//""
//null
//undefined
//other then all of of above are truthy values.

//Equality operators

console.log(5 == "5"); //result will be 'True'. It means (==) only check the value not the type.

//But if we use === it will give 'False' in result. So we should use (===). such as;
console.log(5 === "5"); //Result will be 'False'

//Boolean Logic
// and = && Fulfil all logic (incase of multiple logic we need to use 'and')
// or = || Fulfil anyone logic (incase of single logic we need to use 'or')
// not = ! (incase of negative logic we need to use 'not')

//Combined of Truthy-Falsy value, Equality Operators and Boolean Logic.

const age = 22;
const balance = 50000;
const isGovtJob = true;
const isHeTickToker = false;

if (age >= 22 && balance >= 150000 && isGovtJob) {
  console.log("You can marry a cute Girl");
}

if ((age >= 22 && balance >= 150000) || isGovtJob) {
  console.log("You can marry a cute Girl");
} else {
  console.log("You can't marry");
}

//Leap year. It year % 4 === 0 && year & 100 !== 0 || year % 400 ===0 its leap year

const year = 2022;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(`${year} is leap year`);
} else {
  console.log(`${year} is not leap year`);
}

// // //Switch Case
const marksSt = 65;

switch (true) {
  case marksSt >= 80:
    console.log("A+");
    break;
  case marksSt >= 70:
    console.log("A");
    break;
  case marksSt >= 60:
    console.log("A-");
    break;
  case marksSt >= 50:
    console.log("B");
    break;
  case marksSt >= 40:
    console.log("C");
    break;
  case marksSt >= 33:
    console.log("D");
    break;
  default:
    console.log("F");
}

//nested case
const day = "Thu";

switch (true) {
  case day === "Sat":
  case day === "Mon":
  case day === "Wed":
  case day === "Fri":
    console.log("Off day");
    break;

  case day === "Sun":
  case day === "Tue":
  case day === "Thu":
    console.log("Class day");
    break;

  default:
    console.log("Invalid day");
}

//Ternary operator
const a = 10;
const c = 20;
const sum = a + c;

if (a === 10) {
  const b = 20;
  console.log(b);
}

//statement vs expression
//Ternary operator
const teamA = 3;
const teamB = 2;
const winner = teamA > teamB ? "teamA" : "teamB";
console.log(winner);

//Example

const mNumber = 25;
const result = mNumber % 2 === 0 ? "Even" : "Odd";
console.log(result);

// End of class sixteen
