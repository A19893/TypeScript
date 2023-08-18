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
