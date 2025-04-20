let arr = [2,3,9,5,4];
let newarr = arr.map((e)=>{
    return e**2
    
})
console.log(newarr);
console.log("MAPPING")

// The above is MAP. Below is FILTER
 

const greaterthan10 = (e)=>{
    if(e>10){
        return true;
    }
    else{
        return false;
    }
 }
console.log(newarr.filter(greaterthan10))
console.log("FILTER")

/*

>>> to use filter learn like given below

step 1: ' newarr.filter(greaterthan10) '
step 2: ' const greaterthan10 = (e)=>{  ' 
step 3: '  if(e>10){
        return true;
    }
    else{
        return false;
    }}
  '
  step 4: console.log(newarr.filter(greaterthan10))
  */

  