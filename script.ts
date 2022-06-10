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