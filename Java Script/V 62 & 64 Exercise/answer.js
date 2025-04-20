
let first, second, third;
let random = Math.random()
if(random > 0.33){
first = "Crazy";
}
else if(random > 0.33  &&  random < 0.66){
first ="Amazing";
}
else {
    first = "Fire";
}


let rand = Math.random()
if(rand > 0.33){
    second = "Engine";
    }
    else if(rand > 0.33  &&  rand < 0.66){
    second ="Food";
    }
    else {
        second = "Garments";
    }


    let randm = Math.random()
    if(randm > 0.33){
        third = "Bros";
        }
        else if(randm > 0.33  &&  randm < 0.66){
        third ="Limited";
        }
        else{
            third = "Hub";
        }
  
        console.log(`${first} ${second} ${third}`)