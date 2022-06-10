/* Practice JavaScript Code ARRAYS */ 
/*
const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];
let listItem = famousSayings[0]; //storing indexed items into variables
console.log(listItem);
console.log(famousSayings[2]);


//changing index values
let groceryList = ['bread', 'tomatoes', 'milk'];
groceryList[1] = 'avocados';

//more examples
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];
condiments[0] = 'Mayo';
console.log(condiments[0]);

condiments = ['Mayo'];
console.log(condiments);

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];
utensils[3] = 'Spoon';
console.log(utensils);


//methods
//.length
const objectives = ['Learn a new language', 'Read 52 books', 'Run a marathon'];

console.log(objectives.length); //3

///.push - adds items to the end of array
const itemTracker = ['item 0', 'item 1', 'item 2'];
 
itemTracker.push('item 3', 'item 4');
 
console.log(itemTracker); 
// Output: ['item 0', 'item 1', 'item 2', 'item 3', 'item 4'];

//.pop - removes items for at the end of the array
const newItemTracker = ['item 0', 'item 1', 'item 2'];
 
const removed = newItemTracker.pop();
 
console.log(newItemTracker); 
// Output: [ 'item 0', 'item 1' ]
console.log(removed);
// Output: item 2

//.shift - removes first item in the array 
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
groceryList.shift();
console.log(groceryList); //orange juice was removed

//.unshift() - adds item to the beginning of the array
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
groceryList.unshift('popcorn'); //adds popcorn to the beginning of the array

//.join() 
//.slice() 
//.splice() 

//.fill()
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.fill("Kiwi"); //[Kiwi, Kiwi, Kiwi, Kiwi]

//.concat()
*/
const reverseSeq = n => {
    let arr = [];
      for (let i=n; i>0; i--) {
        arr.push(i);
        } return arr;
    };
console.log(reverseSeq(10))



