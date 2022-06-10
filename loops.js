/* Practice JavaScript Code LOOPS */

// 3 pieces to a for loop:
// 1 - Variable declaration/ initial value
// 2 - The condition/ when to run the loop
// 3 - Update the loop variable/how to change the value each time

// i++ is an easier way of saying i = i + 1
// i+=2 is an easier way of saying: i = i + 2\


// STEP 1: 'let i = 1' - start i at 1
// STEP 2: 'i <= 10' - run the loop as long as i <= 10
// STEP 3: 'i++' - add 1 to i each time through
// for (let i = 1; i <= 10; i++) {
// 	console.log('HELLO:', i);
// }

// // Counting by 3's:
// for (let i = 1; i <= 10; i += 3) {
// 	console.log('HELLO:', i);
// }

// // Counting DOWN from 200 by intervals of 25:
// for (let i = 200; i >= 0; i -= 25) {
// 	console.log(i);
// }
// console.log('AFTER THE LOOP!');




// CODE PRACTICE
/*
for (let i = 0; i <= 20; i++) {console.log(`${i} x ${i} = ${i * i}`)}

for (let i = 10; i > 0; i--) {console.log(i)}



//looping through arrays
let names = ["chris", "mona", "selena"];
for (let i = 0; i < names.length; i++) {console.log(names[i])};

let grades = ["91", "76", "83", "65", "99", "81"]
for (let i = 0; i < grades.length; i++) {console.log(grades[i])}

//another way of writing ^
let grades1 = [91, 76, 83, 65, 99, 81]
for (let i = 0; i <= grades1.length-1; i++) {console.log(grades1[i])}
//there's 6 items in the array. grades1.length is looking 6 but it's never going to find it, so when you console.log it, you'll the grades and undefined.
// to prevent undefined, use -1 to make the array have 5 items instead of 6.



//looping through an array/object
const myStudents = [
    {firstName: 'luffy',
     grade: 86},
     {firstName: 'zoro',
     grade: 91},
     {firstName: 'nami',
     grade: 76},
    ];

for (let i = 0; i < myStudents.length; i++) {
    let student = myStudents[i]
    console.log(`${student.firstName} got a ${student.grade}`)
}



// looping through a string
let lastName = "Norrington"; //printing string in reverse order
for (let i = lastName.length -1; i >= 0; i--) {console.log(lastName[i])}

let firstName = "Micah"; //origiin loop
for (let i = 0; i <= firstName.length-1; i++) {console.log(firstName[i])}

const word = "stressed";
let reversedWord = "";
for (let i = word.length-1; i >= 0; i--) {
    reversedWord += word[i];
};
console.log(reversedWord)

// -_-
let instructors = ["Osiel", "Jordon", "Justin", "Jodi"];
for (let i = instructors.length-1; i >= 0; i--) {console.log(instructors[i], i)}

//nested loops 
for (let i = 1; i <= 10; i++) {console.log("Outer Loop:", i);
    for (let j = 10; j >= 0; j-=5){console.log("    Inner Loop", j)};
};

const gameBoard = [
    [4, 32, 8, 4],
    [8, 24, 9, 6],
    [12, 16, 10, 8],
    [16, 8, 11, 10],
];

let totalScore = 0;
for (let i = 0; i < gameBoard.length; i++) {
    let row = gameBoard[i];
    for (let j = 0; j < row.lengthl; j++) {
        totalScore += row[j];
    }
}

//difference between for and while loops
for (let i = 0; i <= 5; i++) {console.log(i)};

let j = 0;
while (j <= 5) {
   console.log(j);
   j++;
};


//you usually run a while loops when the number of loops is unknown
//while (some condition) {
    //update or attempt to make that condition false
//}

const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);
while (guess !== target){
    console.log(guess);
    guess = Math.floor(Math.random() * 10);
}
console.log(`Target: ${target} Guess: ${guess}`);



//break keyword; stop looping at a specific point
for(let i = 0; i <= 10; i++) {
    console.log(i);
    if (i === 5) {
        break;
    }
};


//for of
let genre = ["rap", "r&b", "underground", "country"];
for (let i = 0; i <= genre.length-1; i++) {console.log(genre[i])}

//WAY EASIER METHOD LOL
for (let subGenre of genre) {console.log(subGenre)}

const words1 = ["mail", "milk", "bath", "black"];
const words2 = ["box", "shake", "tub", "man"];

for (let i = 0; i < words1.length; i++) {
    console.log(words1[i], words2[i])
};

const movieReviews = {
    arrival: 9.5,
    onePieceRed: 9.5,
    avatar: 9.5,
    divergent: 9.5,
};

for (let movie of Object.keys(movieReviews)) {
    console.log(movie, movieReviews[movie])
}
*/

//for in loops through objects only


// for (let i = 0; i <= 10; i+= 2) {console.log([i])}

// function countBoomerangs (arr) {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++){
//         if(arr[i] !== arr[i + 1] && arr[i] === arr[i + 2]){
//             count++;
//         }
//     }

//     return count;
// }

// console.log(countBoomerangs([1, 2, 1, 2, 1, 2, 3]));





