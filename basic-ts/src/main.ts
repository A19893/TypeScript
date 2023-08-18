//interface and index signatures
interface student {
    [key:string]:number | string | number[] | undefined
    name:string
}

const Student: student={
    name:'Yash',
    age:12
}
console.log(Student.name);

for(const key in Student) {
    console.log(`${key} : ${Student[key]}`)
}

Object.keys(Student).map(key=>{
    console.log(Student[key as keyof student])
})
