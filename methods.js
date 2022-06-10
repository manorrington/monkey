function sayHello( name, city, state ) {
    return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}`
  }
  console.log(sayHello(['Micah', 'Norrington'], 'Charlotte', 'NC'))

  function solution(str, ending){
    return str.endsWith(ending);
  }
  console.log(solution('quiz', ''))

function strLengths (arr) {
    let arrLength = 0;

    
    return arrLength
}

console.log(strLengths(['44', '22'] ))


function sum (arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        total += num
    }
    return total
}

console.log(sum([2, 2]))

let greeter = (greet, person) => `${greet}, ${person}`;
console.log(greeter('Hello', 'Luffy'));

(function(){
    var a = b = 42;
  })();
   
  console.log(typeof a);
  console.log(typeof b);

let palindrome = str => {
    str.reverse('') === str.reverse('') ? 'This is a palindrome' : 'This is not a palindrome';
}
console.log(palindrome('a'))
