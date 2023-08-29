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

//T will be sued as a generic class so that any type will be passed than it will use the type as it is
const echo = <T>(arg: T): T => arg


const isObj = <T>(arg: T):boolean =>{
return   (typeof arg === 'object' && !Array.isArray(arg) && arg!==null)
}

console.log(isObj(true))
console.log(isObj('Yash'))
console.log(isObj([1,2,3]))
console.log(isObj({name: 'Yash'}))
console.log(isObj(null))

interface HasID {
     id: number,
    name: string,
    age: number
}

const processUser = <T extends HasID>(user: T): T =>{
    return user;
}

console.log(processUser({id:1,name:'Dave',age:20})) 

class StateObject<T> {
    private data:T

    constructor(value:T) {
        this.data=value
    }

    get state(): T {
        return this.data
    }

    set state(value: T){
        this.data= value;
    }
} 

const store = new StateObject<(string|number|boolean)[]>([12,true,"Yash"]);
store.state=[15,"Dave","Monika"]
console.log(store.state)


//Utility Types

interface Assignment {
    studentId : string,
    title: string,
    grade: number,
    verified?: boolean,
}

const updateAssignemnt= (assign:Assignment, propsToUpdate:
    Partial<Assignment>): Assignment =>{
        return {...assign, ...propsToUpdate}
}

const assign1: Assignment = {
    studentId: "Yash123@",
    title: "My Title",
    grade: 80,
    verified: true
}

// console.log(updateAssignemnt(assign1, {grade:89}));
const assignGraded: Assignment= updateAssignemnt(assign1, {grade:95});
console.log(assignGraded)
//Required Utility Type is used when u want all props of interface in it
//Partial is used 

type Students = "Yash" | "Dave"
type LetterGrades = "A" | "B" | "C" | "D"

const finalGrades: Record<Students,LetterGrades> = {
    Yash: "B",
    Dave: "A"
}

console.log(finalGrades)

//Pick and Omit
type AssignResult = Pick<Assignment, "studentId" | "grade">

const Result:AssignResult= {studentId:"1",grade:19}
console.log(Result)


type AssignPreview = Omit<Assignment, "grade" | "verified">

const preview:AssignPreview= {
    studentId:"1",
    title:"12"
}

//Exclude and Extract
type adjustedGrade = Exclude<LetterGrades, "U">

type higherGrades = Extract<LetterGrades,"A" | "B">

const normalGrades:LetterGrades="A"

const TopperGrades:higherGrades="B"

//nON Nullable
type AllPossibleGrade = 'Dave'|'John'|null|undefined

type namesOnly = NonNullable<AllPossibleGrade>

const excludenulls : namesOnly ='Dave'

//Return type
// type newAssign = {title: string, points:number} 

const createNewAssign = (title:string, points:number)=>{
    return {
        title,
        points
    }
}

type newAssign = ReturnType<typeof createNewAssign>
console.log(createNewAssign("Secret",34))


//Parameters
type AssignParams =  Parameters<typeof createNewAssign>

const assignArgs: AssignParams = ["Generics",100]

const tsAssign2: newAssign = createNewAssign(...assignArgs)

console.log(tsAssign2)

//Awaited- helps us with return type of a Promise
  