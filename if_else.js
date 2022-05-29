/* Practice JavaScript Code IF/ELSE STATEMENTS */
//basic code
let sale1 = true;

sale1 = false;

if(sale1) {
  console.log('Time to buy!');
} else {
  console.log('Time to wait for a sale.')
}

//comparison operators
let hungerLevel = 7;
if (hungerLevel > 7){
  console.log('Time to eat!')
} else {
  console.log('We can eat later!')
}

//logical operators 
// &&; both conditions need to be true/false
if (stopLight === 'green' && pedestrians === 0) {
    console.log('Go!');
} else {
    console.log('Stop');
}

// ||; means or
if (day === 'Saturday' || day === 'Sunday') {
    console.log('Enjoy the weekend!');
} else {
    console.log('Do some work.');
}

//!; means not
let excited = true;
console.log(!excited); // Prints false
 
let sleepy = false;
console.log(!sleepy); // Prints true

//example
let mood = 'sleepy';
let tirednessLevel = 6;

if (mood === 'sleepy' && tirednessLevel > 8) {
  console.log('time to sleep') 
} else {
  console.log('not bed time yet')
}


/* truthy and falsey; these are value that aren't strictly coded to true/false 
but boolean values will log true/false.
0, empty strings, null, undefined, NAN are falsey */
let numberOfApples = 0;
 
if (numberOfApples){
   console.log('Let us eat apples!'); //falsey
} else {
   console.log('No apples left!');//truthy
}
 
// Prints 'No apples left!'

let username = '';
let defaultName;
 
if (username) {
  defaultName = username;
} else {
  defaultName = 'Stranger';
}
 
console.log(defaultName); // Prints: Stranger

let tool = '';

// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || 'pen'

console.log(`The ${writingUtensil} is mightier than the sword.`);


//ternary operator; these are easier if/else statements
isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');
