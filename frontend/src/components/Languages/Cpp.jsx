import React from "react";
import Code from "../Code";
import { useNavigate } from "react-router-dom";

const Cpp = () => {
  const navigate = useNavigate();

  const handleQuiz = () => {
    navigate("/quiz/cpp");
  };

  return (
    <div className="py-8 px-32 mx-auto bg-gray-100">
      <div>
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-600 mb-4">
            Introduction to C++ Programming
          </h1>
          <p className="text-xl font-semibold">What is C++?</p>
          <p className="text-gray-700">
            C++ is a general-purpose programming language created as an
            extension of the C programming language. It provides additional
            features for object-oriented programming (OOP) and supports
            low-level memory manipulation.
          </p>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-600 mb-4">
            Setting Up Your Environment
          </h1>
          <p className="text-xl font-semibold">Installing a C++ Compiler</p>
          <p className="text-gray-700">
            Before starting with C++ programming, you need to set up your
            development environment. Install a C++ compiler like GCC or Clang,
            which are available for most operating systems. You can also use an
            Integrated Development Environment (IDE) such as Visual Studio Code,
            CLion, or Code::Blocks.
          </p>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-600 mb-4">
            Basic Syntax and Structure
          </h1>
          <p className="text-xl font-semibold">Hello World Program</p>
          <p className="text-gray-700">
            The classic "Hello, World!" program in C++ demonstrates the basic
            syntax and structure of a C++ program.
          </p>

          <Code language="C++">
            {`
#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}
          `}
          </Code>

          <h2 className="text-2xl font-semibold mt-4">Explanation:</h2>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>
              #include &lt;iostream&gt;: Includes the input-output stream
              library for printing.
            </li>
            <li>
              int main(): The starting point of every C++ program, where
              execution begins.
            </li>
            <li>
              std::cout &lt;&lt; "Hello, World!" &lt;&lt; std::endl;: Outputs
              the text "Hello, World!" to the console.
            </li>
            <li>return 0;: Indicates successful execution of the program.</li>
          </ul>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-600 mb-4">
            Variables and Data Types
          </h1>
          <p className="text-xl font-semibold">Declaring Variables</p>
          <p className="text-gray-700">
            C++ supports various data types including int, float, double, and
            string. Variables in C++ must be declared with a specific data type
            before they can be used.
          </p>

          <Code language="C++">
            {`
#include <iostream>
#include <string>

int main() {
    int age = 25;
    float salary = 55000.50;
    double pi = 3.14159;
    std::string name = "John Doe";

    std::cout << "Age: " << age << std::endl;
    std::cout << "Salary: " << salary << std::endl;
    std::cout << "Pi: " << pi << std::endl;
    std::cout << "Name: " << name << std::endl;

    return 0;
}
          `}
          </Code>

          <h2 className="text-2xl font-semibold mt-4">Explanation:</h2>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>
              std::string name = "John Doe";: Declares a string variable name
              and initializes it with "John Doe".
            </li>
            <li>
              std::cout &lt;&lt; "Age: " &lt;&lt; age &lt;&lt; std::endl;:
              Outputs the value of age to the console.
            </li>
            <li>
              std::cout &lt;&lt; "Salary: " &lt;&lt; salary &lt;&lt; std::endl;:
              Outputs the value of salary to the console.
            </li>
            <li>
              std::cout &lt;&lt; "Pi: " &lt;&lt; pi &lt;&lt; std::endl;: Outputs
              the value of pi to the console.
            </li>
            <li>
              std::cout &lt;&lt; "Name: " &lt;&lt; name &lt;&lt; std::endl;:
              Outputs the value of name to the console.
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-600 mb-4">
            Control Structures
          </h1>
          <p className="text-xl font-semibold">Conditional Statements</p>
          <p className="text-gray-700">
            C++ provides conditional statements such as if, else, and switch for
            controlling the flow of execution based on conditions.
          </p>

          <Code language="C++">
            {`
#include <iostream>

int main() {
    int num = 10;

    if (num > 0) {
        std::cout << "The number is positive." << std::endl;
    } else if (num < 0) {
        std::cout << "The number is negative." << std::endl;
    } else {
        std::cout << "The number is zero." << std::endl;
    }

    return 0;
}
          `}
          </Code>

          <h2 className="text-2xl font-semibold mt-4">Explanation:</h2>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>
              {`if (num > 0): Checks if num is greater than 0 and prints "The number
            is positive.`}
              "
            </li>
            <li>
              {`else if (num < 0): Checks if num is less than 0 and prints "The
            number is negative.`}
              "
            </li>
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
            Loops allow you to execute a block of code repeatedly. The for loop
            is commonly used in C++ for iterating over a range of values.
          </p>

          <Code language="C++">
            {`
#include <iostream>

int main() {
    for (int i = 1; i <= 5; i++) {
        std::cout << "Iteration " << i << std::endl;
    }

    return 0;
}
          `}
          </Code>

          <h2 className="text-2xl font-semibold mt-4">Explanation:</h2>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>
              {`for (int i = 1; i <= 5; i++): Initializes i to 1, checks if i is less
            than or equal to 5, and increments i by 1 after each iteration.`}
            </li>
            <li>
              std::cout &lt;&lt; "Iteration " &lt;&lt; i &lt;&lt; std::endl;:
              Prints the current value of i for each iteration.
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

          <Code language="C++">
            {`
#include <iostream>

int main() {
    int count = 1;

    while (count <= 5) {
        std::cout << "Count: " << count << std::endl;
        count++;
    }

    return 0;
}
          `}
          </Code>

          <h2 className="text-2xl font-semibold mt-4">Explanation:</h2>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>int count = 1;: Initializes the variable count to 1.</li>
            <li>
              {`while (count <= 5): Executes the block of code inside the loop as
            long as count is less than or equal to 5.`}
            </li>
            <li>
              std::cout &lt;&lt; "Count: " &lt;&lt; count &lt;&lt; std::endl;:
              Prints the current value of count.
            </li>
            <li>count++;: Increments count by 1 after each iteration.</li>
          </ul>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-600 mb-4">
            Do-While Loop
          </h1>
          <p className="text-xl font-semibold">Do-While Loop</p>
          <p className="text-gray-700">
            The do-while loop is similar to the while loop, but it ensures that
            the block of code executes at least once before checking the
            condition.
          </p>

          <Code language="C++">
            {`
#include <iostream>

int main() {
    int num = 1;

    do {
        std::cout << "Number: " << num << std::endl;
        num++;
    } while (num <= 5);

    return 0;
}
          `}
          </Code>

          <h2 className="text-2xl font-semibold mt-4">Explanation:</h2>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>int num = 1;: Initializes the variable num to 1.</li>
            <li>
              {`do { ... } while (num <= 5);: Executes the block of code inside the
            loop at least once and continues to execute as long as num is less
            than or equal to 5.`}
            </li>
            <li>
              std::cout &lt;&lt; "Number: " &lt;&lt; num &lt;&lt; std::endl;:
              Prints the current value of num.
            </li>
            <li>num++;: Increments num by 1 after each iteration.</li>
          </ul>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-600 mb-4">
            Range-Based For Loop (for-each loop)
          </h1>
          <p className="text-xl font-semibold">Range-Based For Loop</p>
          <p className="text-gray-700">
            The range-based for loop (or for-each loop) iterates over elements
            in a range, such as arrays or containers, making it easier to work
            with collections.
          </p>

          <Code language="C++">
            {`
#include <iostream>
#include <vector>

int main() {
    std::vector<int> numbers = {1, 2, 3, 4, 5};

    // Using range-based for loop to iterate over elements
    for (int number : numbers) {
        std::cout << "Number: " << number << std::endl;
    }

    return 0;
}
          `}
          </Code>

          <h2 className="text-2xl font-semibold mt-4">Explanation:</h2>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>{`std::vector<int> numbers = {1, 2, 3, 4, 5};: Initializes a vector of integers with values.`}</li>
            <li>
              for (int number : numbers): Iterates over each element in the
              vector numbers.
            </li>
            <li>
              std::cout &lt;&lt; "Number: " &lt;&lt; number &lt;&lt; std::endl;:
              Prints each element of the vector.
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-600 mb-4">Functions</h1>
          <p className="text-xl font-semibold">
            Defining and Calling Functions
          </p>
          <p className="text-gray-700">
            Functions in C++ allow you to encapsulate code into reusable blocks.
            Here's an example of a simple function that adds two numbers:
          </p>

          <Code language="C++">
            {`
#include <iostream>

// Function declaration
int add(int a, int b);

int main() {
    int result = add(5, 3);
    std::cout << "Result: " << result << std::endl;
    return 0;
}

// Function definition
int add(int a, int b) {
    return a + b;
}
          `}
          </Code>

          <h2 className="text-2xl font-semibold mt-4">Explanation:</h2>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>
              int add(int a, int b);: Declares the function add which takes two
              integers as parameters and returns an integer.
            </li>
            <li>
              int result = add(5, 3);: Calls the add function with 5 and 3 as
              arguments and stores the result in result.
            </li>
            <li>
              return a + b;: Defines the add function which returns the sum of a
              and b.
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-600 mb-4">
            Object-Oriented Programming in C++
          </h1>
          <p className="text-xl font-semibold">Classes and Objects</p>
          <p className="text-gray-700">
            C++ is known for its support for Object-Oriented Programming (OOP)
            concepts such as classes and objects, encapsulation, inheritance,
            and polymorphism.
          </p>

          <Code language="C++">
            {`
#include <iostream>
#include <string>

// Class definition
class Animal {
private:
    std::string name;

public:
    // Constructor
    Animal(std::string n) : name(n) {}

    // Member function
    void speak() {
        std::cout << "Animal " << name << " speaks." << std::endl;
    }
};

int main() {
    // Create objects of class Animal
    Animal dog("Dog");
    Animal cat("Cat");

    // Call member functions
    dog.speak();
    cat.speak();

    return 0;
}
          `}
          </Code>

          <h2 className="text-2xl font-semibold mt-4">Explanation:</h2>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>
              {`// Class definition: Defines a class Animal with a private member
            name and a public member function speak.`}
            </li>
            <li>
              Animal dog("Dog"); Animal cat("Cat");: Creates objects dog and cat
              of class Animal with names "Dog" and "Cat" respectively.
            </li>
            <li>
              dog.speak(); cat.speak();: Calls the speak member function for
              both dog and cat objects.
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-600 mb-4">
            Polymorphism
          </h1>
          <p className="text-xl font-semibold">Polymorphism in C++</p>
          <p className="text-gray-700">
            Polymorphism allows objects to be treated as instances of their
            parent class. In C++, polymorphism is achieved through function
            overriding and virtual functions.
          </p>

          <Code language="C++">
            {`
#include <iostream>

// Base class
class Shape {
public:
    // Virtual function
    virtual void draw() {
        std::cout << "Drawing shape..." << std::endl;
    }
};

// Derived class
class Circle : public Shape {
public:
    // Override base class function
    void draw() override {
        std::cout << "Drawing circle..." << std::endl;
    }
};

int main() {
    Shape* shape = new Circle();
    shape->draw();  // Calls the draw function of Circle

    delete shape;
    return 0;
}
          `}
          </Code>

          <h2 className="text-2xl font-semibold mt-4">Explanation:</h2>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>
              {`// Base class Shape: Defines a virtual function draw which can be
            overridden by derived classes.`}
            </li>
            <li>
              {`// Derived class Circle: Inherits from Shape and overrides the draw
            function to draw a circle.`}
            </li>
            <li>
              Shape* shape = new Circle();: Creates a pointer to Shape pointing
              to a Circle object (upcasting).
            </li>
            <li>
              {`shape->draw();: Calls the draw function of the Circle object (dynamic
            dispatch).`}
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-600 mb-4">Inheritance</h1>
          <p className="text-xl font-semibold">Inheritance in C++</p>
          <p className="text-gray-700">
            Inheritance allows one class (derived class) to inherit properties
            and behavior from another class (base class). This promotes code
            reusability and allows you to create a hierarchy of classes.
          </p>

          <Code language="C++">
            {`
#include <iostream>

// Base class
class Vehicle {
public:
    void start() {
        std::cout << "Vehicle started." << std::endl;
    }
};

// Derived class
class Car : public Vehicle {
public:
    void accelerate() {
        std::cout << "Car is accelerating." << std::endl;
    }
};

int main() {
    Car myCar;
    myCar.start();      // Calls start method from Vehicle
    myCar.accelerate(); // Calls accelerate method from Car

    return 0;
}
          `}
          </Code>

          <h2 className="text-2xl font-semibold mt-4">Explanation:</h2>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>
              {`// Base class Vehicle: Defines a method start which prints "Vehicle
            started."`}
            </li>
            <li>
              {`// Derived class Car: Inherits from Vehicle and defines a method
            accelerate which prints "Car is accelerating."`}
            </li>
            <li>
              myCar.start();: Calls the start method of the Vehicle class.
            </li>
            <li>
              myCar.accelerate();: Calls the accelerate method of the Car class.
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-600 mb-4">Abstraction</h1>
          <p className="text-xl font-semibold">Abstraction in C++</p>
          <p className="text-gray-700">
            Abstraction is the process of hiding complex implementation details
            and exposing only relevant functionalities to the user. In C++,
            abstraction is achieved using abstract classes and interfaces.
          </p>

          <Code language="C++">
            {`
#include <iostream>

// Abstract base class
class Shape {
public:
    // Pure virtual function (virtual function with "= 0")
    virtual void draw() = 0;
};

// Derived class Rectangle
class Rectangle : public Shape {
public:
    // Override pure virtual function
    void draw() override {
        std::cout << "Drawing rectangle..." << std::endl;
    }
};

int main() {
    Rectangle rect;
    rect.draw(); // Calls draw method of Rectangle

    return 0;
}
          `}
          </Code>

          <h2 className="text-2xl font-semibold mt-4">Explanation:</h2>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>
              {`// Abstract base class Shape: Defines a pure virtual function draw
            which must be overridden by derived classes.`}
            </li>
            <li>
              {`// Derived class Rectangle: Inherits from Shape and provides an implementation for the draw function to draw a rectangle.`}
            </li>
            <li>Rectangle rect;: Creates an object of type Rectangle.</li>
            <li>rect.draw();: Calls the draw method of the Rectangle class.</li>
          </ul>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-600 mb-4">
            Encapsulation
          </h1>
          <p className="text-xl font-semibold">Encapsulation in C++</p>
          <p className="text-gray-700">
            Encapsulation is the bundling of data (attributes) and methods
            (functions) that operate on the data into a single unit (class). It
            allows data hiding and provides a way to protect data from
            unauthorized access.
          </p>

          <Code language="C++">
            {`
#include <iostream>

// Class with private data members
class Employee {
private:
    std::string name;
    int salary;

public:
    // Constructor
    Employee(std::string n, int s) : name(n), salary(s) {}

    // Getter method for name
    std::string getName() {
        return name;
    }

    // Setter method for salary
    void setSalary(int s) {
        salary = s;
    }

    // Method to display employee details
    void display() {
        std::cout << "Name: " << name << ", Salary: $" << salary << std::endl;
    }
};

int main() {
    // Create an object of class Employee
    Employee emp("John Doe", 50000);

    // Display employee details
    emp.display();

    // Change employee salary using setter method
    emp.setSalary(55000);

    // Display updated employee details
    std::cout << "Updated ";
    emp.display();

    return 0;
}
          `}
          </Code>

          <h2 className="text-2xl font-semibold mt-4">Explanation:</h2>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>
              {`// Class Employee: Defines private data members name and salary,
            public methods getName, setSalary, and display.`}
            </li>
            <li>
              Employee emp("John Doe", 50000);: Creates an object emp of class
              Employee with initial values.
            </li>
            <li>
              emp.setSalary(55000);: Calls the setSalary method to update the
              salary of emp.
            </li>
            <li>
              emp.display();: Calls the display method to show employee details.
            </li>
          </ul>
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

export default Cpp;
