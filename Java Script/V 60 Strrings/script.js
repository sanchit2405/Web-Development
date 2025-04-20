console.log("Lets learn about strings");

let a="Sanchit";

console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])
console.log(a[4])
console.log(a[5])
console.log(a[6])
console.log(a[7])   // undefined

console.log(a.length);  //length of the string


let real_name = "Sanchit";
let pyaar = "Yashii";
// console.log("My name is " + real_name+ " and I love "+ pyaar);
console.log(`My Name is ${real_name} and I love ${pyaar}`);

let b="RadheKrishna"

console.log(b.toUpperCase()) // all capital
console.log(b.toLowerCase())  // all small letters
console.log(b.length)       // length of the string
console.log(b.slice(1,5))  // 5 hai toh matlab 4 tak he print hoga (n-1)

console.log(b.replace("Krishna","Shyam"))   // replace
console.log(b.concat(a)) // concatination(merging two strings)
console.log(b.concat(a, " Yashasvi"," Yashika")) // concatination(merging two strings)

console.log(b.charAt(2))    // second posiiton pr kya hai vo batayega
console.log(b.endsWith("na"))   // does the word ends with na , in this case yes so it prints true in the result
console.log(b.startsWith("zz"))     // same like above command
console.log(b.indexOf("dh"))    // show at what index is the char , like dh is at index 2

