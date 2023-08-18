let numberone = 1;
console.log(numberone);

let a: number = 12;
let b: number = 6;
let c: number = 14;
let d: any = 13;

const sum = (a: number, b: any) => {
  return a + b;
};
const result = sum(12, "Yash");
let array: number[] = [1, 23, 45];
array[0] = 325;
console.log(result);
console.log(a / b);
//Tuples
let myTuple: [string, number, boolean] = ["Yash", 12, true];
let myObj: number[] = [];
console.log(typeof myObj);

//Interface Things
// interface Guitarist {
//     name:string,
//     active?:boolean,
//     albums:(string|number)[]
// }

//Type Things
type Guitarist = {
  name: string;
  active?: boolean;
  albums: (string | number)[];
};

let evh: Guitarist = {
  name: "Yash",
  active: false,
  albums: ["One", "Two", "three"],
};

//enum
enum Grade {
  A,
  B,
  C,
  D,
  E,
}
//type Alliases
type userId = Guitarist;

//literal types
let yourname: "Dave" | "Amy" | "Yash";
yourname = "Yash";
console.log(Grade.A);
console.log(evh);

//functions
const add = (a: any, b?: any): number => {
  // console.log(a+b);
  return a + b;
};

const logMsg = (message: any): void => {
  console.log(message);
};
logMsg(add(45, 62));
add(45, 62);

//Rest Parameters
const total = (a?: number, ...nums: number[]): number => {
  return a ? a : 2 + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(undefined, 2));

//Never Type
// when we are basically returning errors there it has never type

// Type Assertions
type myType = string;
let d2 = <myType>"Yash"; //We can only use angular brackets in ts not in tsx
console.log(d2);

//DOM
const headingText = document.getElementById("heading") as HTMLInputElement;
console.log(headingText?.innerHTML);

//cLASSES
//protected can be accessed inside of the class and derived class too but private an only access inside the class
class Coder {
  name: string;
  music: string;
  private age: number;
  lang: string;
  static count:number=0;
  constructor(name: string, music: string, age: number, lang: string) {
    (this.name = name),
      (this.music = music),
      (this.age = age),
      (this.lang = lang);
  }

  public getAge() {
    return `Hello, I'm ${this.age}`;
  }
}

const Dave = new Coder("Yash", "Rock", 42, "English");
console.log(Dave.getAge());

class WebDev extends Coder {
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number,
    lang:string
  ) {
    super(name,music,age,lang)
    this.computer=computer
  }
}

const Sara= new WebDev('Mac','Sara','Rocky aur Rani ki prem kahani',12,'English')
console.log(Sara.getAge());
console.log(Coder.count)

class Bands {
  private dataState:string[]


  constructor() {
    this.dataState=[]
  }

  public get data(): string[] {
    return this.dataState
  }

  public set data(value:string[]) {
  this.dataState=value;
  return;
  }
}
const MyBands=new Bands();
MyBands.data= ['Yash','Neil','Yamuna'];
MyBands.data= [...MyBands.data, 'ZZ Top']
console.log(MyBands.data)