"use strict";
const Student = {
    name: 'Yash',
    age: 12
};
console.log(Student.name);
for (const key in Student) {
    console.log(`${key} : ${Student[key]}`);
}
Object.keys(Student).map(key => {
    console.log(Student[key]);
});
//T will be sued as a generic class so that any type will be passed than it will use the type as it is
const echo = (arg) => arg;
const isObj = (arg) => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null);
};
console.log(isObj(true));
console.log(isObj('Yash'));
console.log(isObj([1, 2, 3]));
console.log(isObj({ name: 'Yash' }));
console.log(isObj(null));
const processUser = (user) => {
    return user;
};
console.log(processUser({ id: 1, name: 'Dave', age: 20 }));
class StateObject {
    constructor(value) {
        this.data = value;
    }
    get state() {
        return this.data;
    }
    set state(value) {
        this.data = value;
    }
}
const store = new StateObject([12, true, "Yash"]);
store.state = [15, "Dave", "Monika"];
console.log(store.state);
const updateAssignemnt = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentId: "Yash123@",
    title: "My Title",
    grade: 80,
    verified: true
};
// console.log(updateAssignemnt(assign1, {grade:89}));
const assignGraded = updateAssignemnt(assign1, { grade: 95 });
console.log(assignGraded);
const finalGrades = {
    Yash: "B",
    Dave: "A"
};
console.log(finalGrades);
const Result = { studentId: "1", grade: 19 };
console.log(Result);
const preview = {
    studentId: "1",
    title: "12"
};
const normalGrades = "A";
const TopperGrades = "B";
const excludenulls = 'Dave';
//Return type
// type newAssign = {title: string, points:number} 
const createNewAssign = (title, points) => {
    return {
        title,
        points
    };
};
console.log(createNewAssign("Secret", 34));
const assignArgs = ["Generics", 100];
const tsAssign2 = createNewAssign(...assignArgs);
console.log(tsAssign2);
//Awaited- helps us with return type of a Promise
