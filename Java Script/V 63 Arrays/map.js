 let arr = [2,3,9,5,4];

 // let newarr = [];
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     newarr.push(element ** 2);
    
// }
// console.log(newarr);

// THE ABOVE IS DONE WITHOUT MAPPING, now BELOW IS DONE BY MAPPING

let newarr = arr.map((e)=>{
    return e**2
    
})
console.log(newarr)
