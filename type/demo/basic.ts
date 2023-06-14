export {}
//string
let fullName:string = "sonu"
console.log("Hi" + " "+ `${fullName}`)
// number
let num : Number=10
num=20
console.log(num)
// arrays
let arr:Number[] = [1,2,3]
let arr1:Array<number> = [20,30,40,50]
console.log(arr[2])
console.log(arr1[3])
// tuple
let tuple1 : [number,String] = [40,"Bye"]
tuple1 = [30,"Helooo"]
console.log(tuple1)
// enum
 enum fruits {banana=5,manago}
 //it give the index
//  let fr: fruits = fruits.banana
//  console.log(fr)
// if i want the name then do below
let frname :string = fruits[6]
console.log(frname)
//  unknown
 let un : unknown = 3;
 console.log(un)
//  any
let an:any =9;
an = 'any value'
an = true

//  void
// union types
// functions 
function foo(){
   console.log('am from foo method') 
}
foo()
function foo1(num1:number, num2?:number):number{
    if(num2)
    return num1+num2
    else
    return num1
}
console.log(foo1(20))

// interface
interface users{
    firstName : string,
    lastName: string,
    Id : number
}
function userget(userdetails:users){
    console.log(userdetails.firstName + " " + userdetails.lastName + " " + userdetails.Id)
}
userget({
    firstName:'sonu',
    lastName: 'patel',
    Id : 101
})
// class
 class Employee{
    public empName: string;
    public constructor(name:string){
        this.empName= name
    }
    public greet(){
        console.log(`Hi from Greet Method ${this.empName}`)
    }
}
let emp = new Employee('Jannuuuuu');
// let n=emp.greet();
// console.log(n);
class Admin extends Employee{
   constructor(adminname :string){
    super(adminname)
   }
   freet(n1:number, n2:number):number{
    return n1+n2
   }
}
let ad = new Admin('Bunnys');
console.log(ad.empName);
console.log(ad.freet(25,35))
console.log(ad.greet())
