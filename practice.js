
// const ages = [20, 40, 10, 11, 50, 100, 9 ,23, 51, 1, 25, 15, 18, 22, 27, 7, 8];

// for (let i = 0; i <= ages.length; i++) {
//     if (ages[i] >= 21) {console.log([i],'You can come in')} 
//         else {console.log("You're not allowed in")}
// };

// let ages21 = [];
// ages.forEach(function(n) {
//     if (n >= 21) {
//         ages21.push(n);
//     }
// });
// console.log(ages21);

// (function (exports, require, module, __filename, __dirname) {});
//module wrapper function

// (function(exports, require, module, __filename, __dirname) {
//     // Module code 
//  });
 

// function greetings () {
//     console.log('Hello there')
// };

// module.export.greetings = greetings;

/* office hours questions */
// There's a great war between the even and odd numbers. Many numbers already lost their lives in this war and it's your task to end this. You have to determine which group sums larger: the evens, or the odds. The larger group wins.

// Create a function that takes an array of integers, sums the even and odd numbers separately, then returns the difference between the sum of the even and odd numbers.

// Examples
// warOfNumbers([2, 8, 7, 5]) ➞ 2
// // 2 + 8 = 10
// // 7 + 5 = 12
// // 12 is larger than 10
// // So we return 12 - 10 = 2

// warOfNumbers([12, 90, 75]) ➞ 27

// warOfNumbers([5, 9, 45, 6, 2, 7, 34, 8, 6, 90, 5, 243]) ➞ 168

function warOfNumbers (arr) {
    let even = 0;
    let odd = 0;
    let difference = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            even += arr[i];
        }
        if (arr[i] % 2 === 1) {
           odd += arr[i];
        }
    difference = even - odd
    }
    return difference;
}
console.log(warOfNumbers([1, 2, 3, 4])); // MY ANSWER WORKED! YUH!


function sortByLength (arr2) {
    for (let i = 0; i < arr2.length; i++){
        if (arr2[0] < arr2[1]) {
            return arr2.sort();
        }
    }
}
console.log(sortByLength(['a', 'bb', 'ccc'])) //MY ANSWER WAS WRONG! DAMN!

// function sortByLength(arr) {
// 	return arr.sort((a, b) => a.length - b.length)
// } THE ANSWER WAS SO EASY!!!!

/* let lukeSkywalker = {
    father: "Darth Vader",
    sister: "Leia",
    brotherInLaw: "Han",
    droid: "Beep boop",

    relationToLuke(name) {
        if (name === this.father) {
            return `Luke, I am your father`;
        } else if (name === this.sister) {
            return `Luke, I am your sister`;
        } else if (name === this.brotherInLaw) {
            return `Luke, I am your brother in law`;
        } else if (name === this.droid) {
            return `WAAAAAAAAAAAAAOOOOW`;
        }
    }
} */ //SHAAR ANSWER! SUBARASHI!

function relationToLuke(name) {
	let relatives = {
		DarthVader: 'father',
		Leia: 'sister',
		Han: 'brother in law',
		R2D2: 'droid'
	}
	return `Luke, I am your ${relatives[name]}.`
}

function reverse (arr3) {
    for (let i = arr3.length; i > 0; i--) {
      return arr3[i];
    }
  }
  
  console.log(reverse([1, 2, 3, 4]))



let redundant = (func) => {
    function str () {
        console.log('yo')
    }
    return str()
};

console.log(redundant());



//create a function that will return an integer number corresponding to the amount of digits in the given num
function count (nums) {
    /* negative numbers */ nums.includes('-') || nums.includes('') ? nums.length : nums.length;
    return nums.length;
}
console.log(count('-1234')); //4
// .length returns length of STRING 




//Create a function that takes an array of numbers and returns "C10 is Awesom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array C10!!!!".
function boom (arr) {
    if (arr.includes(7)) {return ("C10 IS AWESOME!")}
    else {return ('There is no 7 in the array')}
}

console.log(boom([7]));
// .includes method looks through area to find value and returns boolean

// const yo = ['y', 'o'];
// console.log(yo.includes('n'));


function getHalves (n) {
let numberSplit = n / 2
let numSplitArr = []
numberSplit.push(numSplitArr)



return numberSplitArr
}
console.log(getHalves(4))

function sayHello( name, city, state ) {
    let names = [];
    
    
    return
  }
  console.log(sayHello(['Micah', 'Norrington'], 'Charlotte', 'NC'))







