console.log('Hello World');
console.error('This is an error');
console.warn('This is a warning')
// let, const

const score = 10;

console.log(score);

// String, Numbers, Boolean, null, undefined

const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;

console.log(typeof rating);
console.log(typeof isCool);
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);

// String, Numbers, Boolean, null, undefined

const name ='John';
const age = 30;

// Concatenation
console.log('My name is ' + name +  ' and I am ' +age);
// Template String
const hello = 'My name is ${name} and I am ${age}';

console.log(hello);


const s = 'software, business, developer, tester';

console.log(s.split(', '));

// Arrays - varibales that hold multiple values

const numbers = new Array(1,2,3,4,5);

console.log(numbers);

const fruits = ['apples', 'oranges', 'pears'];

fruits[3] = 'grapes';

fruits.push('mangos');

fruits.unshift('strawberries');

fruits.pop();

console.log(Array.isArray('hello'));

console.log(fruits.indexOf('oranges'));

console.log(fruits);

const person = {
    firstName: 'manohar',
    lastName:'manu',
    age:'25',
    hobbies:['music','movies','sports'],
    address:{
        street:'3-15',
        city: 'Visakhapatnam',
        state:'AP'
    }

}

console.log(person.hobbies[2]);

const todos = [
    {
     id: 1,
     text: 'Take out trash',
     isCompleted: true
    },
    {
     id: 2,
     text: 'Happy Brday',
     isCompleted: true
    },
    {
        id: 3,
        text: 'Best Wishes',
        isCompleted: false
  }
];

// for
for(let i = 0; i <= 10; i++) {
    console.log('For Loop Number: ${i}');
}

// While
let i = 0;
while(i < 10) {
    console.log('while Loop Number: ${i}');
    i++;
}

for(let i = 0; i <todos.length; i++) {
    console.log(todos[i].text);
}

for(let todo of todos){
    console.log(todo.id);
}
// forEach, map, filter
todos.forEach(function(todo){
    console.log(todo.text);

});

// forEach, map, filter
const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === true;
}).map(function(todo) {
    return todo.text;
})

console.log(todoCompleted);

const a = 20;

if(a === 10) {
    console.log('a is 10');
} else if(a > 10) {
    console.log('a is greater than 10');
} else {
    console.log('a is less than 10');
}

const p = 5;
const q = 12;

if(p > 4 && q > 11) {
    console.log('p is more than 4 or q is more than 11');
}

if(p > 5) {
    if(q > 10) {
  }
}

const k = 20;

const color = k > 18 ? 'red' : 'blue';

switch(color) {
    case 'red':
    console.log('color is red');
    break;
    case 'blue':
    console.log('color is blue');
    break;
    default:
        console.log('color is NOT red or blue');
        break;
}

function addNums(num1 = 1, num2 = 1) {
    console.log(num1 + num2);
}

 addNums(5, 5);


  // Class
  class Person {
     constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);

  }

  getBirthYear() {
      return this.dob.getFullYear();
  }

  getFullName() {
    return '${this.firstName} ${this.lastName}';
}
  }

 // Instantiate object
 const person1 = new Person('John', 'Doe', '1-1-2021');
 const person2 = new Person('Mary', 'Smith', '1-1-2021');
 

 console.log(person2.getFullName());
 console.log(person1);

