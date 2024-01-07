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
console.log( 'Adding bananas (expect true)', addItem('bananas'));
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


const maxItems = 5;

function isFull (){
    if (basket.length < maxItems){
    return false;
}   return true;
}
    console.log ('Current status of is basket full', isFull());

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
