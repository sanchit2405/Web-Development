console.log("I am a tutorial on Loops")

for(let i=1; i<= 20; i++){
    console.log(i);
}


let obj ={
    Name: "Sanchit",
    Age:    44,
    College: "SRM" 

}

// >>  for-in loop ( just type 'for' and select from the options)

for (const key in obj) {
   
        const element = obj[key];
        console.log(key, element); // console.log(element)
        
    
}


 //  >> for-of loop

for (const element of "SANCHIT") {
     console.log(element);
}

