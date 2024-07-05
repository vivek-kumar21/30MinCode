import React from "react";
import Code from "../Code";
import { useNavigate } from "react-router-dom";

const JavaScript = () => {
  const navigate = useNavigate();

  const handleQuiz = () => {
    navigate("/quiz/c");
  };

  return (
    <div className="py-8 px-32 mx-auto bg-gray-100">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          Introduction to JavaScript
        </h1>
        <p className="text-xl font-semibold">What is JavaScript?</p>
        <p className="text-gray-700">
          JavaScript is a high-level, interpreted programming language that
          conforms to the ECMAScript specification. It is primarily used for
          building dynamic and interactive web applications.
        </p>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          Setting Up Your Environment
        </h1>
        <p className="text-xl font-semibold">Using JavaScript</p>
        <p className="text-gray-700">
          JavaScript can be executed in any web browser without requiring a
          specific setup. For server-side JavaScript, Node.js is commonly used,
          which allows JavaScript to run outside of the browser environment.
        </p>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          Basic Syntax and Structure
        </h1>
        <p className="text-xl font-semibold">Hello World Program</p>
        <p className="text-gray-700">
          The "Hello, World!" program in JavaScript demonstrates the basic
          syntax and structure of a JavaScript program.
        </p>

        <Code language="Javascript">
          {`
// Single line comment
/*
 * Multi-line comment
 */

// Print Hello, World! to console
console.log("Hello, World!");
          `}
        </Code>

        <h2 className="text-2xl font-semibold mt-4">Explanation:</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>{`// Single line comment: Comments in JavaScript start with // for single line and /* */ for multi-line.`}</li>
          <li>
            console.log("Hello, World!");: Outputs "Hello, World!" to the
            console.
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          Variables and Data Types
        </h1>
        <p className="text-xl font-semibold">Declaring Variables</p>
        <p className="text-gray-700">
          JavaScript supports various data types including numbers, strings,
          booleans, arrays, objects, and functions. Variables in JavaScript are
          dynamically typed, meaning they can hold values of any data type.
        </p>

        <Code language="Javascript">
          {`
// Variables in JavaScript
let age = 25;
const PI = 3.14159;
var name = "John Doe";

console.log("Age: " + age);
console.log("PI: " + PI);
console.log("Name: " + name);
          `}
        </Code>

        <h2 className="text-2xl font-semibold mt-4">Explanation:</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>let age = 25;: Declares a variable age with value 25.</li>
          <li>
            const PI = 3.14159;: Declares a constant PI with value 3.14159.
          </li>
          <li>
            var name = "John Doe";: Declares a variable name with value "John
            Doe". (Note: `var` is less preferred in modern JavaScript.)
          </li>
          <li>console.log(...);: Outputs the values to the console.</li>
        </ul>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          Control Structures
        </h1>
        <p className="text-xl font-semibold">Conditional Statements</p>
        <p className="text-gray-700">
          JavaScript provides conditional statements such as if, else if, else,
          and switch for controlling the flow of execution based on conditions.
        </p>

        <Code language="Javascript">
          {`
// Conditional statement in JavaScript
let num = 10;

if (num > 0) {
    console.log("The number is positive.");
} else if (num < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}
          `}
        </Code>

        <h2 className="text-2xl font-semibold mt-4">Explanation:</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>{`if (num > 0) {...}: Checks if num is greater than 0 and prints "The number is positive."`}</li>
          <li>{`else if (num < 0) {...}: Checks if num is less than 0 and prints "The number is negative."`}</li>
          <li>{`else {...}: Executes if none of the above conditions are true (i.e., num is 0) and prints "The number is zero."`}</li>
        </ul>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">Loops</h1>
        <p className="text-xl font-semibold">For Loop</p>
        <p className="text-gray-700">
          Loops allow you to execute a block of code repeatedly. The for loop is
          commonly used in JavaScript for iterating over a range of values.
        </p>

        <Code language="Javascript">
          {`
// For loop in JavaScript
for (let i = 1; i <= 5; i++) {
    console.log("Iteration " + i);
}
          `}
        </Code>

        <h2 className="text-2xl font-semibold mt-4">Explanation:</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>{`for (let i = 1; i <= 5; i++) {...}: Initializes i to 1, checks if i is less than or equal to 5, and increments i by 1 after each iteration.`}</li>
          <li>
            console.log("Iteration " + i);: Prints the current value of i for
            each iteration.
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">While Loop</h1>
        <p className="text-xl font-semibold">While Loop</p>
        <p className="text-gray-700">
          The while loop executes a block of code repeatedly as long as a
          condition is true.
        </p>

        <Code language="Javascript">
          {`
// While loop in JavaScript
let count = 1;

while (count <= 5) {
    console.log("Count: " + count);
    count++;
}
          `}
        </Code>

        <h2 className="text-2xl font-semibold mt-4">Explanation:</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>let count = 1;: Initializes the variable count to 1.</li>
          <li>{`while (count <= 5) {...}: Executes the block of code inside the loop as long as count is less than or equal to 5.`}</li>
          <li>
            console.log("Count: " + count);: Prints the current value of count.
          </li>
          <li>count++;: Increments count by 1 after each iteration.</li>
        </ul>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">Do-While Loop</h1>
        <p className="text-xl font-semibold">Do-While Loop</p>
        <p className="text-gray-700">
          The do-while loop is similar to the while loop, but it ensures that
          the block of code executes at least once before checking the
          condition.
        </p>

        <Code language="Javascript">
          {`
// Do-while loop in JavaScript
let num = 1;

do {
    console.log("Number: " + num);
    num++;
} while (num <= 5);
          `}
        </Code>

        <h2 className="text-2xl font-semibold mt-4">Explanation:</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>let num = 1;: Initializes the variable num to 1.</li>
          <li>{`do {...} while (num <= 5);: Executes the block of code inside the loop, then checks the condition after each iteration. Ensures the block runs at least once.`}</li>
          <li>
            console.log("Number: " + num);: Prints the current value of num.
          </li>
          <li>num++;: Increments num by 1 after each iteration.</li>
        </ul>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">Functions</h1>
        <p className="text-xl font-semibold">
          Function Declaration and Invocation
        </p>
        <p className="text-gray-700">
          Functions in JavaScript are reusable blocks of code that can be
          defined and invoked (called) multiple times within a program.
        </p>

        <Code language="Javascript">
          {`
// Function declaration
function greet(name) {
    return "Hello, " + name + "!";
}

// Function invocation
let greeting = greet("John");
console.log(greeting); // Output: Hello, John!
          `}
        </Code>

        <h2 className="text-2xl font-semibold mt-4">Explanation:</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>{`function greet(name) {...}: Defines a function greet that takes a parameter name and returns a greeting message.`}</li>
          <li>
            let greeting = greet("John");: Invokes the greet function with the
            argument "John" and assigns the returned value to the variable
            greeting.
          </li>
          <li>
            console.log(greeting);: Prints the greeting message "Hello, John!"
            to the console.
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          Objects and OOP Concepts
        </h1>
        <p className="text-xl font-semibold">Creating Objects</p>
        <p className="text-gray-700">
          JavaScript is an object-oriented language, and objects are fundamental
          to its paradigm. Objects encapsulate data and behavior together. You
          can create objects using object literals or constructor functions.
        </p>

        <Code language="Javascript">
          {`
// Object literal
let person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

console.log(person.fullName()); // Output: John Doe
          `}
        </Code>

        <h2 className="text-2xl font-semibold mt-4">Explanation:</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>{`let person = {...}: Defines an object person with properties firstName, lastName, and a method fullName.`}</li>
          <li>
            person.fullName();: Invokes the fullName method of the person
            object, which returns "John Doe".
          </li>
          <li>
            this.firstName and this.lastName: Refers to the current object's
            firstName and lastName properties within the fullName method.
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          Constructor Functions
        </h1>
        <p className="text-xl font-semibold">
          Defining Objects with Constructor Functions
        </p>
        <p className="text-gray-700">
          Constructor functions are used to create multiple instances of objects
          with the same structure and behavior. They are often used in
          object-oriented programming to define classes in JavaScript.
        </p>

        <Code language="Javascript">
          {`
// Constructor function
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = function() {
        return this.firstName + " " + this.lastName;
    };
}

// Creating instances
let person1 = new Person("Jane", "Doe");
let person2 = new Person("Mike", "Smith");

console.log(person1.fullName()); // Output: Jane Doe
console.log(person2.fullName()); // Output: Mike Smith
          `}
        </Code>

        <h2 className="text-2xl font-semibold mt-4">Explanation:</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>{`function Person(firstName, lastName) {...}: Defines a constructor function Person with parameters firstName and lastName.`}</li>
          <li>
            this.firstName and this.lastName: Refers to the current object's
            firstName and lastName properties within the fullName method.
          </li>
          <li>
            new Person(...);: Creates new instances of the Person object using
            the new keyword.
          </li>
          <li>
            person1.fullName(); and person2.fullName();: Invokes the fullName
            method of each instance to get their full names.
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          Prototypes and Prototypal Inheritance
        </h1>
        <p className="text-xl font-semibold">Prototypes in JavaScript</p>
        <p className="text-gray-700">
          In JavaScript, each object has a prototype from which it inherits
          methods and properties. Prototypal inheritance allows objects to
          inherit features from other objects.
        </p>

        <Code language="Javascript">
          {`
// Using prototype for methods
function Car(make, model) {
    this.make = make;
    this.model = model;
}

// Adding a method using prototype
Car.prototype.getFullName = function() {
    return this.make + " " + this.model;
};

// Creating an instance
let myCar = new Car("Toyota", "Camry");

console.log(myCar.getFullName()); // Output: Toyota Camry
          `}
        </Code>

        <h2 className="text-2xl font-semibold mt-4">Explanation:</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>{`function Car(make, model) {...}: Defines a constructor function Car with properties make and model.`}</li>
          <li>{`Car.prototype.getFullName = function() {...};: Adds a method getFullName to the Car prototype, allowing all Car instances to access it.`}</li>
          <li>
            let myCar = new Car("Toyota", "Camry");: Creates a new instance
            myCar of the Car object.
          </li>
          <li>
            myCar.getFullName();: Invokes the getFullName method of myCar, which
            returns "Toyota Camry".
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          Classes in ES6+
        </h1>
        <p className="text-xl font-semibold">Defining Classes</p>
        <p className="text-gray-700">
          ES6 introduced class syntax to JavaScript, providing a more
          object-oriented approach similar to other programming languages like
          Java or C++. Classes are syntactical sugar over JavaScript's
          prototypal inheritance model.
        </p>

        <Code language="Javascript">
          {`
// Class syntax in JavaScript
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    // Method
    getArea() {
        return this.width * this.height;
    }
}

// Creating an instance
let rect = new Rectangle(5, 10);

console.log(rect.getArea()); // Output: 50
          `}
        </Code>

        <h2 className="text-2xl font-semibold mt-4">Explanation:</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>{`class Rectangle {...}: Defines a class Rectangle with a constructor and a method getArea.`}</li>
          <li>{`constructor(width, height) {...}: Initializes width and height properties of the Rectangle instance.`}</li>
          <li>{`getArea() {...}: Defines a method getArea that calculates the area of the Rectangle.`}</li>
          <li>
            let rect = new Rectangle(5, 10);: Creates a new instance rect of the
            Rectangle class with width 5 and height 10.
          </li>
          <li>
            rect.getArea();: Invokes the getArea method of rect, which returns
            50 (5 * 10).
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">Inheritance</h1>
        <p className="text-xl font-semibold">Extending Classes</p>
        <p className="text-gray-700">
          Inheritance allows one class (subclass) to inherit properties and
          methods from another class (superclass). ES6 classes support
          inheritance through the extends keyword.
        </p>

        <Code language="Javascript">
          {`
// Inheritance in JavaScript classes
class Animal {
    constructor(name) {
        this.name = name;
    }

    // Method
    speak() {
        console.log(this.name + ' makes a noise.');
    }
}

// Subclass extends superclass
class Dog extends Animal {
    constructor(name) {
        super(name); // Call the superclass constructor
    }

    // Override method
    speak() {
        console.log(this.name + ' barks.');
    }
}

// Creating instances
let dog = new Dog('Rex');

dog.speak(); // Output: Rex barks.
          `}
        </Code>

        <h2 className="text-2xl font-semibold mt-4">Explanation:</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>{`class Animal {...}: Defines a superclass Animal with a constructor and a method speak.`}</li>
          <li>{`class Dog extends Animal {...}: Defines a subclass Dog that extends Animal, inheriting its properties and methods.`}</li>
          <li>
            super(name);: Calls the constructor of the superclass Animal with
            the parameter name.
          </li>
          <li>
            dog.speak();: Invokes the speak method of dog, which overrides the
            speak method of Animal to log "Rex barks.".
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          Modules in JavaScript
        </h1>
        <p className="text-xl font-semibold">Exporting and Importing Modules</p>
        <p className="text-gray-700">
          Modules in JavaScript allow you to split your code into reusable
          parts. ES6 introduced a standardized module system using export and
          import statements to share functionality between files.
        </p>

        <Code language="Javascript">
          {`
// Exporting module
export function square(x) {
    return x * x;
}

// Importing module
import { square } from './math.js';

console.log(square(5)); // Output: 25
          `}
        </Code>

        <h2 className="text-2xl font-semibold mt-4">Explanation:</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>{`export function square(x) {...}: Defines a function square and exports it from the module.`}</li>
          <li>{`import { square } from './math.js';: Imports the square function from the math.js module.`}</li>
          <li>
            console.log(square(5));: Uses the imported square function to
            calculate the square of 5, outputting 25.
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">Conclusion</h1>
        <p className="text-gray-700">
          JavaScript is a versatile and powerful language used for both
          client-side and server-side development. It supports a wide range of
          programming paradigms, including procedural, object-oriented, and
          functional programming. Understanding JavaScript fundamentals,
          including data types, control structures, functions, objects, and
          classes, is essential for building modern web applications.
        </p>
      </div>
      <div>
        <div className="flex items-center justify-between bg-gray-300 p-4 rounded-md">
          <p className="text-2xl text-gray-700">
            Check your learnings by giving quiz
          </p>
          <button
            onClick={handleQuiz}
            className="px-6 py-2 bg-red-500 hover:bg-red-600 duration-300 rounded-md text-white"
          >
            Start Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default JavaScript;
