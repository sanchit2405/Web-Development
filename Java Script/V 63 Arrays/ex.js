let array = [9.4,9.83,8.5,9.5,7.6];

let cgpagreaterthan9 = array.filter(num => num>9);
console.log(cgpagreaterthan9);


const students = [
    { name: "Nikhil", cgpa: 9.4 },
    { name: "Dhaerya", cgpa: 10.0 },
    { name: "Arnav", cgpa: 9.1 },
    { name: "Sanchit", cgpa: 9.83 }
  ];
  
  const highAchievers = students.filter(student => student.cgpa > 9.5);
  
  highAchievers.forEach(student => {
    console.log(`${student.name}: ${student.cgpa}`);
  });
  
  