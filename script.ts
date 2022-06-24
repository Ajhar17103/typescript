const names= "I'm Azharul";

console.log(names)


/* dynamic veriable */

let a:any;

a="name"
console.log(a)

a=10
console.log(a)

let b:any=[]

b.push('azhar',100, "islam", {age:25, jobStatus:'software Developer'})

console.log(b)



let c:any=[]
c.push({name:"azharul Islam", Salary:2500},{name:"Nazmus Sakib", Salary:25000})

console.log(c)
let total:number
let totalSalary=c.reduce((arra:any, index:any)=>total+=index.Salary,0)

console.log(totalSalary)



/* function signatures */


let Add:(a:number, b:number, c:string)=> number

Add=(a:number,b:number,c:string)=>{
   return c==='add'?  a+b : a-b
    
};


console.log(Add(10,20, "ad"))


/* class */



import {Player} from "./src/classes/Player.js"

const mashrafi= new Player("Mashrafi",40,"bangladesh");

const Sakib= new Player("Sakib",40,"bangladesh");

Sakib.name="Azharul Islam"

const players: Player[] = []

players.push(Sakib);
players.push(mashrafi);

 

/* interface */

interface RectangleOptions{
   width:number,
   height:number,
}

function drewRectangle(options:RectangleOptions){
let width = options.width;
let height = options.height
let rectangle: Number
 console.log( rectangle = width * height )
}

drewRectangle({
   width:10,
   height:10
})


/* generics */ 

const addID = <T> (obj:T)=>{
   let id =Math.floor(Math.random()*100);
   console.log(id)
   return{...obj, id}
}

let user = addID({
   name:'umma',
   age:26,
   country:'BD'
})

