/* Practice JavaScript Code STRINGS */
//using this mainly for string.methods
/* .toUppercase */
// let msg = "you are so grounded";
// msg = msg.toUpperCase();
// console.log(msg);

/* .toLowercase */
// let msg = "PLEASE I WANT TO STOP YELLING";
// msg = msg.toLowerCase();
// console.log(msg);

/* .length */
// let msg = "four";
// console.log(msg, msg.length);

/* you can index strings as well */
// let msg = "hello";
// console.log(msg[0], msg[1], msg[2], msg[3], msg[4]);

/* .slice */
// let msg = "basketball";
// console.log(msg.slice(6));

/* .split */
const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]);
// expected output: "fox"

const chars = str.split('');
console.log(chars[3]);
// // expected output: "k"

// const strCopy = str.split();
// console.log(strCopy);
// expected output: Array ["The quick brown fox jumps over the lazy dog."]


/* 
You are given a list of unique integers arr, and two integers a and b.
Your task is to find out whether or not a and b appear consecutively in arr, and return a boolean value
(True if a and b are consecutive, False otherwise).
It is guaranteed that a and b are both present in arr.
*/
function consecutive(arr, a, b) {
    let opts = [a + "" + b, b + "" + a];
    console.log("opts", opts) //['42', '24']
    let result;

    for (let i = 0; i < arr.length-1; i++) {

        const win = [arr[i], arr[i + 1]].join("");
        console.log("win", win)
        const match = opts.indexOf(win) !== -1;

        if (match) {
            result = match;
            break;
            /* if match = true, then result will return true, breaking/stopping the loop */
        } else {
            if (result !== true) result = match;
            /* if the result doesn't equal true, then result will return false */
        }
    }
    return result; //will be true or false
};
console.log(consecutive([1, 2, 3, 4, 2 ,4], 5, 2));





/*
//assigned kevlin the value of 293
const kelvin = 0;
//assgined celsius the value of kelvin - 273
const celsius = kelvin - 273;
//assigned fahrenheight the value of the equation below '68.'
let fahrenheit = celsius * (9/5) + 32;
//code below turns any decimal into a whole number
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)
*/

// let example = [12, 2 + "" + 1]
// console.log(example[0])





