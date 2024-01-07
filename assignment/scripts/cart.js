console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [ ];

function addItem ( item ){
    console.log ( 'In addItem', item);
    basket.push(item)
    return true;
}


console.log(`Basket is ${basket}`);
// console.log( 'Adding bananas (expect true)', addItem('bananas'));
console.log( `Basket is now ${basket}`);

function listItems () {
    for (let i = 0; i < basket.length; i++){
        console.log(basket[i])
    }
    return basket ;

}

console.log ('Expecting bananas:', listItems());

console.log(addItem('strawberries'), basket);
console.log(addItem('blueberries'), basket);
console.log(basket);

console.log('Expecting: bananas, strawberries, blueberries:', listItems ());



function empty () {
    for (let i = basket.length; i > -1; i--){
        basket.pop();
    }
        return basket;

}

console.log('Expecting an empty array', empty());

//Stretch Goals

// Add a global const named maxItems and set it to 5.

const maxItems = 5;


//Create a function called isFull(). It should:
    // return false if the basket contains less than max number of items
    // return true otherwise (equal or more than maxItems)

function isFull (){
    if (basket.length < maxItems){
    return false;
}   return true;
}
console.log ('Current status of is basket full', isFull());

// updating the required addItem function per stretch goals instructions

    // function addItem ( item ){
    //     console.log ( 'In addItem', item);
    //     if (isFull() === false){
    //     basket.push(item)}
    //     return true;

    // } return false

    // console.log('The basket currently consists of:', basket);


// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
