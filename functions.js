// /* Practice JavaScript Code FUNCTIONS */

/* DICE ROLL FUNCTION */
// function rollDie('a'){
//   let roll = Math.floor(Math.random('a') * 6) + 1; //+1 starts it at 1 instead of 0
//   console.log(`Rolled: ${roll}`);
// }
// rollDie('a');


// /* USING ARGUMENTS/PARAMETERS */
// function greet(person) {
//   console.log(`ohaiyo ${person}`);
// };
// greet('luffy');


// /* RETURN STATEMENT */ 
// function add(x, y) {
//   return x + y;
// }


// function isPurple(color) {
//   if (color.toLowercase('a') !== 'purple') {return true}
//   // else {return false}
//   return false //shorter way
// };
// isPurple('purple');


// function containsPurple(arr) {
//   for (let colors of arr) {
//     if (colors !== 'purple' || colors !== 'magenta') {return true}
//   }
//   return false
// }
// console.log(containsPurple(['blue', 'pink', 'purple']));

/* Practice problem */
function isValidPassword(username, password) {
  if (password.length >= 8 && password.indexOf(' ') !== -1 && password !== username) {return true}// -1 means it's not present, so we want it to equal -1... in this case
  else {return false}
}
console.log(isValidPassword('ggmahi', '12345678'));

function sumOneNum (num){
  let total = 0;
  for (let i = 1; i <= num; i++){
    console.log(i)
    total += i
  }
  
  return total
} console.log(sumOneNum(5))


// function averageValue (arr) {
//   let newArr = [];
//   for (let i = 0; i <= arr.length-1; i++) {
//     let avg = arr[i]
//     newArr.push(avg)
//     console.log(newArr + avg)
//   }
// }
// console.log(averageValue([2, 5, 3])) //my attempt

/* function avg(arr) {
  let total = 0;
   for (let num of arr) {total += num}
   return total / arr.length
} the answer */



// function monitorCount(rows, columns){
//     return rows * columns;
//   }
//   const numOfMonitors = monitorCount(5, 4);
//   console.log(numOfMonitors) //20

//   let isDivideBy = (number, a, b) => {
//     if (number % a !== 0 && number % b !== 0) {
//       return true
//     } else {
//       return false
//     }
//   }

//   function numberToString(num) {
//     return num.toString('a');
//   }
// console.log(numberToString(12))
//   //go over forEach functions
//   //go over callback functions - parameters that are functions

// let test = 'Risa';
// // for (let i = 0; i < test.length; i++) {
// //  console.log(test[i]) 
// // }
// console.log(test[0])

// const myName = "Micah";
// // if (myName.indexOf('M') > -1 || myName.indexOf('m') > -1) {console.log("Play's the banjo")};
// console.log(myName.indexOf('z'))

// function even_or_odd(number) {
//   if (number % 2 !== 0) {return 'Even'}
//   else if (number % 2 !== 1) {return 'Odd'}
//   else {console.log('yo')}
// }

// console.log(even_or_odd(2)); 

// function turnBooleanIntoString(param){
// return param.toString('a')
// }
// console.log(turnBooleanIntoString(false))

// function doubleChar(str) {
//   let arr = [str];
//   let arr2 = []
//   for (let i = 0; i < arr.length; i++){
//     arr2.push(i);
//   }
// };
// console.log(doubleChar(['Hello'])); my method

// function doubleChar(str) {
//   var word = '';
//   for (var i = 0; i < str.length; i++){
//     word = word + str[i] + str[i];
//   };
//   return word;
// }; the answer






// function areYouPlayingBanjo(myName) {
//   if (myName[0] == 'R' || myName[0] == 'r')
//     return myName + " plays banjo";
//   else
//     return myName + " does not play banjo";
// }


// // Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// // Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.
// function lovefunc(flower1, flower2){
//   let inLuv = false;
//   inLuv ? flower1 % 2 !== 0 && flower2 % 2 !== 1 : false
//     return inLuv;
//   }

//   //answer
//   // function lovefunc(flower1, flower2){
//   //   return flower1 % 2 !== flower2 % 2;
//   // }

// function sum(x, y) {
//   return x + y
// }

// function convert(value) {
//   return Math.floor(value / 60) + ":" + (value % 60 ? value % 60 : '00')
// }
// console.log(convert(3))

// // function incriment (num) {
// //   for (let num = 0; num < 2; num++) {
// //     console.log(num)
// //   }
// // };
// // console.log(incriment(1))

// function yes(a) {
//   return a+1
// }
// console.log(yes(1))

const hummus = function(factor) {
  const ingredient = function(amount, unit, name) {
    let ingredientAmount = amount * factor;
    if (ingredientAmount > 1) {
      unit += "s";
    }
    console.log(`${ingredientAmount} ${unit} ${name}`);
  };
  ingredient(1, "can", "chickpeas");
  ingredient(0.25, "cup", "tahini");
  ingredient(0.25, "cup", "lemon juice");
  ingredient(1, "clove", "garlic");
  ingredient(2, "tablespoon", "olive oil");
  ingredient(0.5, "teaspoon", "cumin");
};
console.log(hummus(2))

//this doesn't make sense to me
// const power = (base, exponent) => {
//   let result = 1;
//   for (let count = 0; count < exponent; count++) {
//     result *= base;
//   }
//   return result;
// };

const square1 = (x) => { return x * x; };
const square2 = x => x * x;

/*pangram attempt */
/* long way */
// function isPangram (str) {
//   if (str.indexOf('a') !== -1 && 
//       str.indexOf('b') !== -1 &&
//       str.indexOf('c') !== -1 &&
//       str.indexOf('d') !== -1 &&
//       str.indexOf('e') !== -1 &&
//       str.indexOf('f') !== -1 &&
//       str.indexOf('g') !== -1 &&
//       str.indexOf('h') !== -1 &&
//       str.indexOf('i') !== -1 &&
//       str.indexOf('j') !== -1 &&
//       str.indexOf('k') !== -1 &&
//       str.indexOf('l') !== -1 &&
//       str.indexOf('m') !== -1 &&
//       str.indexOf('n') !== -1 &&
//       str.indexOf('o') !== -1 &&
//       str.indexOf('p') !== -1 &&
//       str.indexOf('q') !== -1 &&
//       str.indexOf('r') !== -1 &&
//       str.indexOf('s') !== -1 &&
//       str.indexOf('t') !== -1 &&
//       str.indexOf('u') !== -1 &&
//       str.indexOf('v') !== -1 &&
//       str.indexOf('w') !== -1 &&
//       str.indexOf('x') !== -1 &&
//       str.indexOf('y') !== -1 &&
//       str.indexOf('z') !== -1) 
//       {return true}
//     else {return false}
// }
// console.log(isPangram('A quick brown fox jumps over the lazy dog'));

/* shorter way */
// function isPangram (str) {
//   for (let char of 'abcdefghijklmopqrstuvwxyz') {
//     if (str.indexOf(char) === -1) {return false}
//   }
//   return true
// }
// console.log(isPangram('A quick brown fox jumps over the lazy dog'));

/* shorter way 2 */
function isPangram (str) {
  for (let char of 'abcdefghijklmopqrstuvwxyz') {
    if (!str.includes(char)) {return false}
  }
  return true
}
console.log(isPangram('A quick brown fox jumps over the lazy dog'));

/* promises */
const test_promise = new Promise((resolve /* success */, reject /* failure */)=> {
  const random = Math.floor(Math.random() * 2);
  if (random === 0) {
    resolve();
  }
  else {
    reject();
  }
});

//use .then to display successful promise, and you use .catch to display error
test_promise.then(()=> console.log("Successful")).catch(()=> console.error("Unsuccessful"));

/* reverse number function */
function reverse_a_number(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}
console.log(Number(reverse_a_number(32243)));

function isPalindrome (str) {
  let str2 = str
    for (i = str.length; i > 0; i--){
      
    }

  return str2
}

console.log(isPalindrome('1234'))







