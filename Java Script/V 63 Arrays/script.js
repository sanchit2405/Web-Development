let arr = [1,3,5,7,9];

console.log(arr);
// console.log(arr.length)

// arr[0] = 1000;
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[3])
// console.log(typeof arr);     // typeof will be "object"

console.log(arr.toString());
console.log(arr.join(" and "))  // write "and" in b/w the arrays or in places of the commas

let a = [ 10,20,30,40,50];
console.log(a);
console.log(a.pop());           // POP  Operation    (last se push / pop krega)
console.log(a.pop());           // POP  Operation   (last se push / pop krega)
console.log(a.push(100));     // PUSH Operation   (last se push/pop krega)
console.log(a.push("Sanchit"));     // PUSH Operation   (last se push / pop krega)
console.log(a)

console.log(a.shift());             //(push/pop krta hai from starting pos)
console.log(a)                      //(push/pop krta hai from starting pos)
console.log(a.unshift("Yashii"))    //(push/pop krta hai from starting pos)
console.log(a);                     //(push/pop krta hai from starting pos)

// shift = pop
// unshift = push

a1=[11,22,33,44]
a2=[100,200,300,400];

console.log(a.concat(a1,a2));
console.log(a1)
console.log(a2)