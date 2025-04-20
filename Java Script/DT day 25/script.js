console.log("Radhe Radhe");

var a = 10;
var b = 2;
console.log(a + b);

a-=b;   //a = a-b;
console.log(a);

// increament and decreament operator

var x= 10;
console.log("x:" + x);
console.log(x++);       // post increament
console.log(x)

var y =7;
console.log(y);
console.log(++y);       // pre increament          same things will be like the decreament

var age = 9;
if(age>18){
    console.log("can vot");
}
else{
    console.log("cannot vote");
}

// or

(age >18) 
? console.log("can vote") 
: console.log("you cannot vote");

// Fucntion inside an obj
var obj = {
    name: "Sanchit",
    like: function(){                                   // function
        console.log("I am really SORRY YASHII");
        console.log("I really miss u ");
    } 
};
console.log(obj.name);
obj.like();

//FUNCTIONS

function life(name){
    console.log(name + " you are the best");
    console.log(name + " you will be very successfull and be rich one day");
    console.log( name + " dekha yashii aagyi na wapas, bass bhagwaan mei bharosa hona chahiye");
};

life("sanchit");


// function addition(a,b){
//     console.log(a+b);
// };

// addition(3,4);

function add(a,b){
    return a+b;             // retuen karte hai toh hume kisi variable mei vo store karna hota hai yaha pr humne result1, 2 mei stoe kra hai.
};

result1 = add(2,3);
result2 = add(9,6);

console.log(result1);
console.log(result2);

// ARROW FUNCTIONS

var sum =(a,b) =>{
    console.log(a+b)
};
sum(200,300);