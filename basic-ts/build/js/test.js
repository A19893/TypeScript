"use strict";
let numberone = 1;
console.log(numberone);
let a = 12;
let b = 6;
let c = 14;
let d = 13;
const sum = (a, b) => {
    return a + b;
};
const result = sum(12, "Yash");
let array = [1, 23, 45];
array[0] = 325;
console.log(result);
console.log(a / b);
//Tuples
let myTuple = ["Yash", 12, true];
let myObj = [];
console.log(typeof myObj);
let evh = {
    name: "Yash",
    active: false,
    albums: ["One", "Two", "three"],
};
//enum
var Grade;
(function (Grade) {
    Grade[Grade["A"] = 0] = "A";
    Grade[Grade["B"] = 1] = "B";
    Grade[Grade["C"] = 2] = "C";
    Grade[Grade["D"] = 3] = "D";
    Grade[Grade["E"] = 4] = "E";
})(Grade || (Grade = {}));
//literal types
let yourname;
yourname = "Yash";
console.log(Grade.A);
console.log(evh);
//functions
const add = (a, b) => {
    // console.log(a+b);
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg(add(45, 62));
add(45, 62);
//Rest Parameters
const total = (a, ...nums) => {
    return a ? a : 2 + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(undefined, 2));
let d2 = "Yash"; //We can only use angular brackets in ts not in tsx
console.log(d2);
//DOM
const headingText = document.getElementById("heading");
console.log(headingText === null || headingText === void 0 ? void 0 : headingText.innerHTML);
//cLASSES
//protected can be accessed inside of the class and derived class too but private an only access inside the class
class Coder {
    constructor(name, music, age, lang) {
        (this.name = name),
            (this.music = music),
            (this.age = age),
            (this.lang = lang);
    }
    getAge() {
        return `Hello, I'm ${this.age}`;
    }
}
Coder.count = 0;
const Dave = new Coder("Yash", "Rock", 42, "English");
console.log(Dave.getAge());
class WebDev extends Coder {
    constructor(computer, name, music, age, lang) {
        super(name, music, age, lang);
        this.computer = computer;
        this.computer = computer;
    }
}
const Sara = new WebDev('Mac', 'Sara', 'Rocky aur Rani ki prem kahani', 12, 'English');
console.log(Sara.getAge());
console.log(Coder.count);
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        this.dataState = value;
        return;
    }
}
const MyBands = new Bands();
MyBands.data = ['Yash', 'Neil', 'Yamuna'];
MyBands.data = [...MyBands.data, 'ZZ Top'];
console.log(MyBands.data);
