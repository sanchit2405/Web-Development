var a = 5;
// a=a+1;
var b = 10;
var c = "Sanchit";
// var 55a = "Yashii"  // this is not allowed bcz variable cannot start wid a number

console.log(a + b + c)
console.log(typeof a, typeof b, typeof c)

// const a1=55;
// a1=a1+1;
// Not Allowed bcz constant should remain const , u cannot change the const value 

//          let  v/s  var
// >> var is defined globally 
// >> if 'let' (let a=10;) is defined in a block then that 'a' is only for that block and not globally 
// see the example givn below

    {
    let a=69;
    console.log(a)
    }

    console.log(a)


// >> primitive data types
let p = "sanchit";  //string
let q = 221.5;      //number
let r = 34;         //number
const s = true;     //boolean
let t =  undefined;  //undefined
let u = null;       //Null  
// null is a primitive data type but it shows NULL as a object , bcz bhaut pehle while specifying developers assigned null as a object 

console.log(p,q,r,s,t,u)
console.log(typeof p,typeof q,typeof r,typeof s,typeof t,typeof u)

//  >> Object
let student = {
    "Name": "Sanchit",
    "Reg Number": "RA2311003012015",
    "Phone number": 7302510825,
    "CGPA": 9.44
    
} 
console.log(student)

// to add the details use like this 
// student.age = 20;
// console.log(student)
student.friend = "Yashii";
console.log(student)
 