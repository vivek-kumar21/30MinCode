import React from "react";
import Code from "../Code";
import { useNavigate } from "react-router-dom";

const C = () => {
  const navigate = useNavigate();

  const handleQuiz = () => {
    navigate("/quiz/c");
  };

  return (
    <div className="py-8 px-32 mx-auto bg-gray-100">
      <div>
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-600 mb-4">
            Introduction to C Programming
          </h1>
          <p className="text-xl font-semibold">What is C?</p>
          <p className="text-gray-700">
            C is a general-purpose, procedural computer programming language
            developed by Dennis Ritchie at Bell Labs in 1972. It was designed to
            be a system programming language for Unix but has since become
            widely used for various applications due to its efficiency and
            flexibility.
          </p>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-600 mb-4">
            Setting Up Your Environment
          </h1>
          <p className="text-xl font-semibold">Installing a C Compiler</p>
          <p className="text-gray-700">
            Before diving into C programming, you need to set up your
            development environment. Start by installing a C compiler like GCC
            (GNU Compiler Collection), which is available for most operating
            systems. You'll also want to choose an Integrated Development
            Environment (IDE) such as Code::Blocks, Visual Studio Code, or
            simply use a text editor like Sublime Text with terminal access.
          </p>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-600 mb-4">
            Basic Syntax and Structure
          </h1>
          <p className="text-xl font-semibold">Hello World Program</p>
          <p className="text-gray-700">
            The classic "Hello, World!" program is the simplest example in C,
            showcasing how to print output to the console:
          </p>

          <Code language={"C"}>
            {`
#include <stdio.h>

int main() {
    printf("Hello, World!");
    return 0;
}
          `}
          </Code>

          <h2 className="text-2xl font-semibold mt-4">Explanation:</h2>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>
              #include &lt;stdio.h&gt;: Includes the standard input-output
              library.
            </li>
            <li>
              int main(): The starting point of every C program, where execution
              begins.
            </li>
            <li>
              printf("Hello, World!\\n");: Outputs the text "Hello, World!"
              followed by a newline (\n).
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
            Variables in C are declared with a specific data type, such as int
            for integers, float for floating-point numbers, double for
            double-precision floating-point numbers, and char for characters.
            Strings in C are arrays of characters.
          </p>
          <Code language={"C"}>
            {`
#include <stdio.h>

int main() {
    int age = 25;
    float salary = 55000.50;
    double largeNumber = 123456789.123456;
    char grade = 'A';
    char name[] = "John Doe";

    printf("Age: %d\\n", age);
    printf("Salary: %.2f\\n", salary);
    printf("Large Number: %.6lf\\n", largeNumber);
    printf("Grade: %c\\n", grade);
    printf("Name: %s\\n", name);

    return 0;
}
          `}
          </Code>

          <h2 className="text-2xl font-semibold mt-4">Explanation:</h2>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>
              int age = 25;: Declares an integer variable age and initializes it
              to 25.
            </li>
            <li>
              float salary = 55000.50;: Declares a floating-point variable
              salary and initializes it to 55000.50.
            </li>
            <li>
              double largeNumber = 123456789.123456;: Declares a
              double-precision floating-point variable largeNumber and
              initializes it.
            </li>
            <li>
              char grade = 'A';: Declares a character variable grade and
              initializes it to 'A'.
            </li>
            <li>
              char name[] = "John Doe";: Declares a string (an array of
              characters) and initializes it.
            </li>
            <li>printf: Used to output the values of the variables.</li>
          </ul>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-600 mb-4">
            Control Structures
          </h1>
          <p className="text-xl font-semibold">Conditional Statements</p>
          <p className="text-gray-700">
            C provides several control structures, including conditional
            statements such as if, else, and switch.
          </p>

          <Code language={"C"}>
            {`
#include <stdio.h>

int main() {
    int num = 10;

    if (num > 0) {
        printf("The number is positive.\\n");
    } else if (num < 0) {
        printf("The number is negative.\\n");
    } else {
        printf("The number is zero.\\n");
    }

    return 0;
}
          `}
          </Code>

          <h2 className="text-2xl font-semibold mt-4">Explanation:</h2>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>{`if (num > 0): Checks if num is greater than 0.`}</li>
            <li>{`else if (num < 0): Checks if num is less than 0.`}</li>
            <li>
              else: Executes if none of the above conditions are true (i.e., num
              is 0).
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-600 mb-4">Loops</h1>
          <p className="text-xl font-semibold">For Loop</p>
          <p className="text-gray-700">
            Loops allow you to execute a block of code repeatedly. The for loop
            is one of the most commonly used loops in C.
          </p>

          <Code language={"C"}>
            {`
#include <stdio.h>

int main() {
    for (int i = 1; i <= 5; i++) {
        printf("Iteration %d\\n", i);
    }

    return 0;
}
          `}
          </Code>

          <h2 className="text-2xl font-semibold mt-4">Explanation:</h2>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>{`for (int i = 1; i <= 5; i++): Initializes i to 1, checks if i is less than or equal to 5, and increments i by 1 after each iteration.`}</li>
            <li>
              printf("Iteration %d\\n", i);: Prints the current value of i for
              each iteration.
            </li>
          </ul>

          <p className="text-xl font-semibold mt-6">While Loop</p>
          <p className="text-gray-700">
            Another commonly used loop in C is the while loop, which repeats a
            block of code as long as a specified condition is true.
          </p>

          <Code language={"C"}>
            {`
#include <stdio.h>

int main() {
    int count = 1;

    while (count <= 5) {
        printf("Count: %d\\n", count);
        count++;
    }

    return 0;
}
          `}
          </Code>

          <h2 className="text-2xl font-semibold mt-4">Explanation:</h2>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>int count = 1;: Initializes the variable count to 1.</li>
            <li>{`while (count <= 5): Checks if count is less than or equal to 5.`}</li>
            <li>
              printf("Count: %d\\n", count);: Prints the current value of count.
            </li>
            <li>count++;: Increments count by 1.</li>
          </ul>

          <p className="text-xl font-semibold mt-6">Do-While Loop</p>
          <p className="text-gray-700">
            The do-while loop is similar to the while loop, but it guarantees
            that the block of code is executed at least once before the
            condition is tested.
          </p>

          <Code language={"C"}>
            {`
#include <stdio.h>

int main() {
    int count = 1;

    do {
        printf("Count: %d\\n", count);
        count++;
    } while (count <= 5);

    return 0;
}
          `}
          </Code>

          <h2 className="text-2xl font-semibold mt-4">Explanation:</h2>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>int count = 1;: Initializes the variable count to 1.</li>
            <li>{`do { ... } while (count <= 5);: Executes the block of code once before checking if count is less than or equal to 5.`}</li>
            <li>
              printf("Count: %d\\n", count);: Prints the current value of count.
            </li>
            <li>count++;: Increments count by 1.</li>
          </ul>

          <p className="text-xl font-semibold mt-6">
            Foreach Loop Using Arrays and Pointers
          </p>
          <p className="text-gray-700">
            C does not have a built-in foreach loop, but you can iterate over
            arrays using a for loop or pointers.
          </p>

          <Code language={"C"}>
            {`
#include <stdio.h>

int main() {
    int numbers[] = {1, 2, 3, 4, 5};
    int length = sizeof(numbers) / sizeof(numbers[0]);

    // Using for loop
    for (int i = 0; i < length; i++) {
        printf("Number (for loop) %d = %d\\n", i, numbers[i]);
    }

    // Using pointers
    for (int *ptr = numbers; ptr < numbers + length; ptr++) {
        printf("Number (pointer) = %d\\n", *ptr);
    }

    return 0;
}
          `}
          </Code>

          <h2 className="text-2xl font-semibold mt-4">Explanation:</h2>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>{`int numbers[] = {1, 2, 3, 4, 5};: Declares an array of integers.`}</li>
            <li>{`for (int i = 0; i < length; i++): Iterates over the array using a for loop.`}</li>
            <li>{`for (int *ptr = numbers; ptr < numbers + length; ptr++): Iterates over the array using pointers.`}</li>
            <li>printf: Used to print the values of the array elements.</li>
          </ul>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-600 mb-4">
            Strings in C
          </h1>
          <p className="text-xl font-semibold">Understanding Strings</p>
          <p className="text-gray-700">
            Strings in C are arrays of characters terminated by a null character
            ('\\0'). Here's a detailed example of how to work with strings in C.
          </p>

          <Code language={"C"}>
            {`
#include <stdio.h>
#include <string.h>

int main() {
    char str1[] = "Hello";
    char str2[20];
    
    // Copying string
    strcpy(str2, str1);
    printf("str2 after copying: %s\\n", str2);

    // Concatenating strings
    strcat(str2, " World");
    printf("str2 after concatenation: %s\\n", str2);

    // String length
    int len = strlen(str2);
    printf("Length of str2: %d\\n", len);

    // Comparing strings
    int cmp = strcmp(str1, str2);
    if (cmp == 0) {
        printf("str1 and str2 are equal\\n");
    } else if (cmp < 0) {
        printf("str1 is less than str2\\n");
    } else {
        printf("str1 is greater than str2\\n");
    }

    return 0;
}
          `}
          </Code>

          <h2 className="text-2xl font-semibold mt-4">Explanation:</h2>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>
              char str1[] = "Hello";: Declares and initializes a string str1.
            </li>
            <li>
              char str2[20];: Declares a string str2 with a capacity of 20
              characters.
            </li>
            <li>strcpy(str2, str1);: Copies the contents of str1 into str2.</li>
            <li>
              strcat(str2, " World");: Concatenates " World" to the end of str2.
            </li>
            <li>int len = strlen(str2);: Calculates the length of str2.</li>
            <li>
              int cmp = strcmp(str1, str2);: Compares str1 and str2
              lexicographically.
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-600 mb-4">Functions</h1>
          <p className="text-xl font-semibold">
            Defining and Calling Functions
          </p>
          <p className="text-gray-700">
            Functions in C are used to encapsulate code into reusable blocks.
            Here's an example of a simple function that adds two numbers:
          </p>

          <Code language={"C"}>
            {`
#include <stdio.h>

// Function declaration
int add(int a, int b);

int main() {
    int result = add(5, 3);
    printf("Result: %d\\n", result);
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
            <li>{`int add(int a, int b) { return a + b; }: Defines the add function which returns the sum of a and b.`}</li>
          </ul>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-600 mb-4">
            Object-Oriented Programming in C
          </h1>
          <p className="text-xl font-semibold">Simulating OOP Concepts</p>
          <p className="text-gray-700">
            While C is not an object-oriented language, you can simulate OOP
            principles using structures and function pointers. Here is an
            example that demonstrates encapsulation and polymorphism.
          </p>

          <Code language={"C"}>
            {`
#include <stdio.h>
#include <string.h>

// Define a structure to represent an Animal
typedef struct {
    char name[20];
    void (*speak)(void);
} Animal;

// Function for Dog's speak
void dogSpeak() {
    printf("Woof! Woof!\\n");
}

// Function for Cat's speak
void catSpeak() {
    printf("Meow! Meow!\\n");
}

int main() {
    // Create a Dog
    Animal dog;
    strcpy(dog.name, "Dog");
    dog.speak = dogSpeak;

    // Create a Cat
    Animal cat;
    strcpy(cat.name, "Cat");
    cat.speak = catSpeak;

    // Call speak function
    printf("%s: ", dog.name);
    dog.speak();
    
    printf("%s: ", cat.name);
    cat.speak();

    return 0;
}
          `}
          </Code>

          <h2 className="text-2xl font-semibold mt-4">Explanation:</h2>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>{`typedef struct { ... } Animal;: Defines a structure Animal with a name and a function pointer for the speak function.`}</li>
            <li>{`void dogSpeak() { printf("Woof! Woof!\\n"); }: Defines the speak function for Dog.`}</li>
            <li>{`void catSpeak() { printf("Meow! Meow!\\n"); }: Defines the speak function for Cat.`}</li>
            <li>{`Animal dog; strcpy(dog.name, "Dog"); dog.speak = dogSpeak;: Creates a Dog instance and sets its speak function.`}</li>
            <li>{`Animal cat; strcpy(cat.name, "Cat"); cat.speak = catSpeak;: Creates a Cat instance and sets its speak function.`}</li>
            <li>{`dog.speak(); cat.speak();: Calls the speak function for both Dog and Cat.`}</li>
          </ul>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between bg-gray-300 p-4 rounded-md">
          <p className="text-2xl text-gray-700">Check your learnings by giving quiz</p>
          <button onClick={handleQuiz} className="px-6 py-2 bg-red-500 hover:bg-red-600 duration-300 rounded-md text-white">
            Start Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default C;
