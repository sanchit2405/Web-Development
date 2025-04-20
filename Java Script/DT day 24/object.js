console.log("Tutorial on objects")

var student ={
    name:"sanchit",
    age: 21
};
console.log(student);
console.log(student.name);
console.log(Object.keys(student));
console.log(Object.values(student));

student.roll = 2015;    // adding new details
student.age = 69;       // updating the details 
console.log(student);