import React from "react";
import Code from "../Code";
import { useNavigate } from "react-router-dom";

const Python = () => {
  const navigate = useNavigate();

  const handleQuiz = () => {
    navigate("/quiz/c");
  };

  return (
    <div className="py-8 px-32 mx-auto bg-gray-100">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          Introduction to Python Programming
        </h1>
        <p className="text-xl font-semibold">What is Python?</p>
        <p className="text-gray-700">
          Python is a high-level, interpreted programming language known for its
          simplicity and readability. It supports multiple programming
          paradigms, including procedural, object-oriented, and functional
          programming.
        </p>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          Setting Up Your Environment
        </h1>
        <p className="text-xl font-semibold">Installing Python</p>
        <p className="text-gray-700">
          To start programming in Python, you need to install Python on your
          system. You can download it from the official Python website
          (python.org). Additionally, you can use Integrated Development
          Environments (IDEs) such as PyCharm, VSCode, or Jupyter Notebook for
          coding.
        </p>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          Basic Syntax and Structure
        </h1>
        <p className="text-xl font-semibold">Hello World Program</p>
        <p className="text-gray-700">
          The "Hello, World!" program in Python is a simple script that
          demonstrates the basic syntax and structure of a Python program.
        </p>

        <Code language="Python">
          {`
print("Hello, World!")
          `}
        </Code>

        <h2 className="text-2xl font-semibold mt-4">Explanation:</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>
            print("Hello, World!"): Prints the text "Hello, World!" to the
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
          Python supports various data types, including int, float, str
          (string), list, tuple, set, dict (dictionary), and bool. Variables in
          Python do not need explicit declaration to reserve memory space.
        </p>

        <Code language="Python">
          {`
# Variable assignment
age = 25
salary = 55000.50
name = "John Doe"

# Printing variables
print("Age:", age)
print("Salary:", salary)
print("Name:", name)
          `}
        </Code>

        <h2 className="text-2xl font-semibold mt-4">Explanation:</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>age = 25: Assigns an integer value 25 to the variable age.</li>
          <li>
            salary = 55000.50: Assigns a float value 55000.50 to the variable
            salary.
          </li>
          <li>
            name = "John Doe": Assigns a string value "John Doe" to the variable
            name.
          </li>
          <li>print("Age:", age): Prints the value of age.</li>
          <li>print("Salary:", salary): Prints the value of salary.</li>
          <li>print("Name:", name): Prints the value of name.</li>
        </ul>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          Control Structures
        </h1>
        <p className="text-xl font-semibold">Conditional Statements</p>
        <p className="text-gray-700">
          Python provides conditional statements such as if, elif, and else for
          decision-making within the code.
        </p>

        <Code language="Python">
          {`
num = 10

if num > 0:
    print("The number is positive.")
elif num < 0:
    print("The number is negative.")
else:
    print("The number is zero.")
          `}
        </Code>

        <h2 className="text-2xl font-semibold mt-4">Explanation:</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>{`if num > 0: Checks if num is greater than 0 and prints "The number is positive."`}</li>
          <li>{`elif num < 0: Checks if num is less than 0 and prints "The number is negative."`}</li>
          <li>
            else: Executes if none of the above conditions are true (i.e., num
            is 0) and prints "The number is zero."
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">Loops</h1>
        <p className="text-xl font-semibold">For Loop</p>
        <p className="text-gray-700">
          Python's for loop is used for iterating over a sequence (such as a
          list, tuple, string, or range) or other iterable objects.
        </p>

        <Code language="Python">
          {`
for i in range(1, 6):
    print("Iteration", i)
          `}
        </Code>

        <h2 className="text-2xl font-semibold mt-4">Explanation:</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>
            for i in range(1, 6): Iterates over the range of numbers from 1 to 5
            (inclusive).
          </li>
          <li>
            print("Iteration", i): Prints the current value of i for each
            iteration.
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">While Loop</h1>
        <p className="text-xl font-semibold">While Loop</p>
        <p className="text-gray-700">
          The while loop in Python executes a block of code as long as a
          specified condition is true.
        </p>

        <Code language="Python">
          {`
count = 1

while count <= 5:
    print("Count:", count)
    count += 1
          `}
        </Code>

        <h2 className="text-2xl font-semibold mt-4">Explanation:</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>count = 1: Initializes the variable count to 1.</li>
          <li>{`while count <= 5: Executes the block of code inside the loop as long as count is less than or equal to 5.`}</li>
          <li>print("Count:", count): Prints the current value of count.</li>
          <li>count += 1: Increments count by 1 after each iteration.</li>
        </ul>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">Functions</h1>
        <p className="text-xl font-semibold">Defining Functions</p>
        <p className="text-gray-700">
          Functions in Python are defined using the <code>def</code> keyword.
          They allow code reusability by encapsulating logic into reusable
          blocks.
        </p>

        <Code language="Python">
          {`
def greet(name):
    print("Hello,", name)

# Calling the function
greet("Alice")
greet("Bob")
          `}
        </Code>

        <h2 className="text-2xl font-semibold mt-4">Explanation:</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>
            def greet(name): Defines a function named greet that takes one
            parameter <code>name</code>.
          </li>
          <li>
            print("Hello,", name): Prints a greeting message with the provided
            name.
          </li>
          <li>
            greet("Alice"): Calls the <code>greet</code> function with the
            argument "Alice".
          </li>
          <li>
            greet("Bob"): Calls the <code>greet</code> function with the
            argument "Bob".
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">Lists</h1>
        <p className="text-xl font-semibold">Working with Lists</p>
        <p className="text-gray-700">
          Lists are ordered, mutable collections of elements in Python. They can
          contain elements of different data types and support various
          operations like indexing, slicing, appending, and more.
        </p>

        <Code language="Python">
          {`
# Creating a list
numbers = [1, 2, 3, 4, 5]

# Accessing elements
print("First element:", numbers[0])  # Prints: 1
print("Last element:", numbers[-1])  # Prints: 5

# Slicing
print("First three elements:", numbers[:3])  # Prints: [1, 2, 3]

# Appending elements
numbers.append(6)
print("Updated list:", numbers)  # Prints: [1, 2, 3, 4, 5, 6]
          `}
        </Code>

        <h2 className="text-2xl font-semibold mt-4">Explanation:</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>
            numbers = [1, 2, 3, 4, 5]: Creates a list containing integers.
          </li>
          <li>numbers[0]: Accesses the first element of the list.</li>
          <li>numbers[-1]: Accesses the last element of the list.</li>
          <li>
            numbers[:3]: Slices the list to retrieve the first three elements.
          </li>
          <li>
            numbers.append(6): Appends the integer 6 to the end of the list.
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">Tuples</h1>
        <p className="text-xl font-semibold">Working with Tuples</p>
        <p className="text-gray-700">
          Tuples are ordered, immutable collections in Python. Once created,
          elements cannot be modified. They are often used to store related
          pieces of information that should not be changed.
        </p>

        <Code language="Python">
          {`
# Creating a tuple
dimensions = (800, 600)

# Accessing elements
width = dimensions[0]
height = dimensions[1]
print("Dimensions:", width, "x", height)  # Prints: Dimensions: 800 x 600
          `}
        </Code>

        <h2 className="text-2xl font-semibold mt-4">Explanation:</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>
            dimensions = (800, 600): Creates a tuple containing width and
            height.
          </li>
          <li>
            dimensions[0]: Accesses the first element (width) of the tuple.
          </li>
          <li>
            dimensions[1]: Accesses the second element (height) of the tuple.
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">Sets</h1>
        <p className="text-xl font-semibold">Working with Sets</p>
        <p className="text-gray-700">
          Sets are unordered collections of unique elements in Python. They do
          not allow duplicate values and support mathematical set operations
          like union, intersection, difference, and more.
        </p>

        <Code language="Python">
          {`
# Creating a set
fruits = {"apple", "banana", "cherry"}

# Adding elements
fruits.add("orange")
print("Updated set:", fruits)  # Prints: Updated set: {'apple', 'banana', 'cherry', 'orange'}

# Removing elements
fruits.remove("banana")
print("Set after removal:", fruits)  # Prints: Set after removal: {'apple', 'cherry', 'orange'}
          `}
        </Code>

        <h2 className="text-2xl font-semibold mt-4">Explanation:</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>{`fruits = {"apple", "banana", "cherry"}: Creates a set containing three fruits.`}</li>
          <li>fruits.add("orange"): Adds the fruit "orange" to the set.</li>
          <li>
            fruits.remove("banana"): Removes the fruit "banana" from the set.
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">Dictionaries</h1>
        <p className="text-xl font-semibold">Working with Dictionaries</p>
        <p className="text-gray-700">
          Dictionaries in Python are unordered collections of key-value pairs.
          They are used to store data in the form of key-value mappings and are
          highly optimized for retrieving data quickly based on keys.
        </p>

        <Code language="Python">
          {`
# Creating a dictionary
person = {
    "name": "Alice",
    "age": 30,
    "city": "New York"
}

# Accessing elements
print("Person's name:", person["name"])  # Prints: Person's name: Alice

# Adding a new key-value pair
person["email"] = "alice@example.com"
print("Updated dictionary:", person)  # Prints: Updated dictionary: {'name': 'Alice', 'age': 30, 'city': 'New York', 'email': 'alice@example.com'}
          `}
        </Code>

        <h2 className="text-2xl font-semibold mt-4">Explanation:</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>{`person = {"name": "Alice", "age": 30, "city": "New York"}: Creates a dictionary with keys "name", "age", and "city".`}</li>
          <li>
            person["name"]: Accesses the value associated with the key "name" in
            the dictionary.
          </li>
          <li>
            person["email"] = "alice@example.com": Adds a new key-value pair
            "email" with value "alice@example.com" to the dictionary.
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">Functions</h1>
        <p className="text-xl font-semibold">Defining Functions</p>
        <p className="text-gray-700">
          Functions in Python are defined using the <code>def</code> keyword.
          They allow code reusability by encapsulating logic into reusable
          blocks.
        </p>

        <Code language="Python">
          {`
def greet(name):
    print("Hello,", name)

# Calling the function
greet("Alice")
greet("Bob")
          `}
        </Code>

        <h2 className="text-2xl font-semibold mt-4">Explanation:</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>
            def greet(name): Defines a function named greet that takes one
            parameter <code>name</code>.
          </li>
          <li>
            print("Hello,", name): Prints a greeting message with the provided
            name.
          </li>
          <li>
            greet("Alice"): Calls the <code>greet</code> function with the
            argument "Alice".
          </li>
          <li>
            greet("Bob"): Calls the <code>greet</code> function with the
            argument "Bob".
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          Object-Oriented Programming (OOP)
        </h1>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold">Classes and Objects</h2>
          <p className="text-gray-700">
            Python is an object-oriented programming language. Classes are used
            to define new types of objects that can have attributes (data) and
            methods (functions). Objects are instances of classes.
          </p>

          <Code language="Python">
            {`
# Class definition
class Car:
    def __init__(self, brand, model, year):
        self.brand = brand
        self.model = model
        self.year = year

    def display_info(self):
        print(f"{self.year} {self.brand} {self.model}")

# Creating objects
car1 = Car("Toyota", "Camry", 2020)
car2 = Car("Honda", "Accord", 2019)

# Accessing object attributes
car1.display_info()  # Prints: 2020 Toyota Camry
car2.display_info()  # Prints: 2019 Honda Accord
            `}
          </Code>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold">Inheritance</h2>
          <p className="text-gray-700">
            Inheritance allows one class (subclass) to inherit the attributes
            and methods of another class (superclass). It promotes code
            reusability and supports the "is-a" relationship between classes.
          </p>

          <Code language="Python">
            {`
# Parent class
class Animal:
    def __init__(self, species):
        self.species = species

    def make_sound(self):
        pass  # Abstract method

# Child class inheriting Animal
class Dog(Animal):
    def __init__(self, name):
        super().__init__("Dog")
        self.name = name

    def make_sound(self):
        print("Woof!")

# Creating objects
dog = Dog("Buddy")
print(dog.species)  # Prints: Dog
dog.make_sound()    # Prints: Woof!
            `}
          </Code>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold">Polymorphism</h2>
          <p className="text-gray-700">
            Polymorphism allows objects of different classes to be treated as
            objects of a common superclass. It enables flexibility in method
            implementation and supports method overriding and overloading.
          </p>

          <Code language="Python">
            {`
# Parent class
class Shape:
    def area(self):
        pass  # Abstract method

# Child classes overriding area method
class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius

    def area(self):
        return 3.14 * self.radius ** 2

class Rectangle(Shape):
    def __init__(self, length, width):
        self.length = length
        self.width = width

    def area(self):
        return self.length * self.width

# Polymorphic function
def print_area(shape):
    print("Area:", shape.area())

# Creating objects
circle = Circle(5)
rectangle = Rectangle(3, 4)
print_area(circle)     # Prints: Area: 78.5
print_area(rectangle)  # Prints: Area: 12
            `}
          </Code>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold">Abstraction</h2>
          <p className="text-gray-700">
            Abstraction focuses on hiding the complex implementation details and
            exposing only the essential features of an object. It allows
            developers to work with high-level representations and improves code
            maintainability.
          </p>

          <Code language="Python">
            {`
# Abstract base class
from abc import ABC, abstractmethod

class Vehicle(ABC):
    def __init__(self, brand):
        self.brand = brand

    @abstractmethod
    def start(self):
        pass

# Concrete subclass implementing start method
class Car(Vehicle):
    def start(self):
        return f"{self.brand} car started."

# Creating objects
car = Car("Toyota")
print(car.start())  # Prints: Toyota car started.
            `}
          </Code>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold">Encapsulation</h2>
          <p className="text-gray-700">
            Encapsulation bundles data (attributes) and methods (functions) into
            a single unit (class), restricting access to some of the object's
            components. It protects the internal state of an object from
            external interference and misuse.
          </p>

          <Code language="Python">
            {`
# Class with private attribute and public method
class BankAccount:
    def __init__(self, account_number, balance):
        self.__account_number = account_number  # Private attribute
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount

    def withdraw(self, amount):
        if self.balance >= amount:
            self.balance -= amount
            print(f"Withdrawal is successful.")
        else:
            print("Insufficient funds.")

    def get_account_number(self):
        return self.__account_number

# Creating objects
account = BankAccount("123456789", 1000)
print("Account Number:", account.get_account_number())  # Prints: Account Number: 123456789
account.withdraw(500)  # Prints: Withdrawal of $500 successful.
print("Remaining Balance:", account.balance)  # Prints: Remaining Balance: 500
            `}
          </Code>
        </div>
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

export default Python;
