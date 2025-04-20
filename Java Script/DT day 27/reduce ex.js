var FlipkartCart = [
    {
        price:200,
        quantitity: 2
    },
    {
        price:500,
        quantitity: 1
    },
    {
        price:2100,
        quantitity: 2
    }

];

var totalcost = FlipkartCart.reduce((accumulator, currentvalue) => {
    return accumulator + (currentvalue.price * currentvalue.quantitity)
},0);
console.log(totalcost);