let carName = "volvo";

function myCar() {
  let carName = "house";

  console.log(carName);
}

console.log(carName);
console.log(myCar());

// VAR

var myName = "chisom";
console.log(myName);

{
  var myName = "somchi";
  console.log(myName);
}
{
  var myName = "olisa";
  console.log(myName);
}

// helpMe();
console.log(myName + carName);

{
  var x = 2; // Allowed
}
{
  let x = 3; // Not allowed
}

console.log(x);

// CONST

const boy = "Olisa";
const girl = "Onyinye";

console.log(boy);

let w = 5;
let y = 2;
let z = x + y;
let a = w * y;

console.log(z);
console.log(a);

a = "6";
b = "   5";
let result = a + b;

console.log(result);

let text1 = "What a very ";
text1 += "nice day";

console.log(text1);

myName = "Olisa";
myCar = "emeka";
myPlace = "Olisa";
mySelf = true;

let result2 = typeof mySelf;
console.log(result2);

let add = 100 + 10;
console.log(add);

// add variables
ada = 23;
obi = 41;

console.log(ada + obi);
console.log(100 + ada + obi);

let i = 5;
let j = 2;
// let k = i ** j;
let k = Math.pow(i, j);

console.log(k);

let increment = 10;
increment--;

let inc = increment;
console.log(inc);

// += operator
let l = 15;
l &= 5;
console.log(l);

let answer1 = "Hi, I'm John's sister's friend";
let answer2 = 'I am called "Kate"';
console.log(typeof (ada + obi));

let cars = false;
console.log(typeof cars);

function addName(a, b) {
  return a + " " + b;
}

function addCompliment(gender) {
  return " is a nice " + gender;
}

let myFullName = addName("Onyinyechi", "Stephanie");
let yourName = addName("olisa", "emeka");

console.log(myFullName + addCompliment("girl"));
console.log(yourName + addCompliment(""));

let compliment = addCompliment("were-wolf");
let greeting = "Hi, " + myFullName + compliment;

console.log(greeting);

let student = {
  firstName: "Olisa",
  lastName: "Emeka",
  age: 21,
  height: 5.1,
  fullname: function () {
    return (this.firstName + " " + this.lastName).toUpperCase();
  },
  hobbies: { fun: "fooball", serious: "coding" },
  address: {
    city: "enugu",
    village: "nsukka",
    vacation: { place1: "madrid", place2: "barcelona" },
  },
};

console.log(student.firstName);
console.log(student["lastName"]);

// student.fullname = function() {
//   return this.firstName + " " + this.lastName;
// }

console.log(student.fullname());

let olisaJSClass = student;
olisaJSClass.lastName = "NoName";
// student.lastName = "";
student.nationality = "Canadian";
delete student.nationality;

console.log(olisaJSClass.lastName);
console.log(student.nationality);
console.log("His serious hobby is " + student.hobbies.serious);
console.log(
  "His dream city is " +
    student["address"]["vacation"].place1 +
    " not " +
    student.address.vacation.place2
);
// console.log(student);

const olisa = Object.entries(student);
console.log(olisa);

// let num2 = 2;
// let num3 = num2;
// num3 = 3;
// console.log((num3));
// console.log((num2));

function Person(n = "chisom", h = 5.7) {
  this.name = n;
  this.age = 21;
  this.height = h;
  this.weight = function weight() {
    return (this.height + this.age) / 2;
  }
}
Person.prototype.class = "js";

const meSelf = new Person("Onyinye", 5.6);
const himSelf = new Person("Olisa", 5.9);
const herSelf = new Person();
herSelf.nationality = "Chinese";
himSelf.address = "Enugu";
meSelf.changeAge = function (h) {
  this.age = h;
}

console.log(meSelf.changeAge(22));
console.log(himSelf);
console.log(herSelf);
