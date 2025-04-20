console.log("Radhe radhe,Tutorial on ARRAYS");

// ARRAYS
var array = [1,2,3,4,4,5,6];
console.log(array);

// 1.Map - call back func
var newarray = array.map(data => data+10);
console.log("Map: " + newarray);

// 2. Filter
const newarray2 = array.filter(data => data>3);     
console.log("Filter: " + newarray2);

// const newarray2 = array.filter(data => {
//     if(data > 3){
//         return data;
//     }
// });
// console.log(newarray2)


// 3. Find - 3 se bada jo bhee milega after 3 (indexly) that will be our o/p 
var newarray3 = array.find(data => data > 3);
console.log(newarray3);

// 4. Reduce

// var totsum = array.reduce((data, index) =>{
//     return data+index;
// },0);        
// console.log(totsum);

var totsum = array.reduce((accumulator, currentvalue) =>{
    return accumulator + currentvalue;
},0);       // pehle totsum=0 then accumulator will be assined as o and currentvalue as 1 so (1+0)=1 now accumualtor is 1 so (1+2)=3, now accumulator -> 3 and so on
console.log(totsum);


