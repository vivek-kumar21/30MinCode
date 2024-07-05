import React from "react";
import Code from "../Code";
import { useNavigate } from "react-router-dom";

const Java = () => {
  const navigate = useNavigate();

  const handleQuiz = () => {
    navigate("/quiz/java");
  };

  return (
    <div className="py-8 px-32 mx-auto bg-gray-100">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          Introduction to Java Programming
        </h1>
        <p className="text-xl font-semibold">What is Java?</p>
        <p className="text-gray-700">
          Java is a high-level, class-based, object-oriented programming
          language that is designed to have as few implementation dependencies
          as possible. It is widely used for building enterprise-scale
          applications.
        </p>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          Setting Up Your Environment
        </h1>
        <p className="text-xl font-semibold">
          Installing Java Development Kit (JDK)
        </p>
        <p className="text-gray-700">
          Before starting with Java programming, you need to install the Java
          Development Kit (JDK). You can download it from the official Oracle
          website. Additionally, you can use an Integrated Development
          Environment (IDE) like IntelliJ IDEA, Eclipse, or NetBeans for easier
          development.
        </p>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          Basic Syntax and Structure
        </h1>
        <p className="text-xl font-semibold">Hello World Program</p>
        <p className="text-gray-700">
          The classic "Hello, World!" program in Java demonstrates the basic
          syntax and structure of a Java program.
        </p>

        <Code language="Java">
          {`
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
          `}
        </Code>

        <h2 className="text-2xl font-semibold mt-4">Explanation:</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>
            public class HelloWorld: Defines a public class named HelloWorld.
          </li>
          <li>
            public static void main(String[] args): The main method where
            execution begins.
          </li>
          <li>
            System.out.println("Hello, World!"): Prints the text "Hello, World!"
            to the console.
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          Variables and Data Types
        </h1>
        <p className="text-xl font-semibold">Declaring Variables</p>
        <p className="text-gray-700">
          Java supports various data types including int, float, double, and
          String. Variables in Java must be declared with a specific data type
          before they can be used.
        </p>

        <Code language="Java">
          {`
public class VariablesDemo {
    public static void main(String[] args) {
        int age = 25;
        float salary = 55000.50f;
        double pi = 3.14159;
        String name = "John Doe";

        System.out.println("Age: " + age);
        System.out.println("Salary: " + salary);
        System.out.println("Pi: " + pi);
        System.out.println("Name: " + name);
    }
}
          `}
        </Code>

        <h2 className="text-2xl font-semibold mt-4">Explanation:</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>
            String name = "John Doe";: Declares a string variable name and
            initializes it with "John Doe".
          </li>
          <li>
            System.out.println("Age: " + age);: Outputs the value of age to the
            console.
          </li>
          <li>
            System.out.println("Salary: " + salary);: Outputs the value of
            salary to the console.
          </li>
          <li>
            System.out.println("Pi: " + pi);: Outputs the value of pi to the
            console.
          </li>
          <li>
            System.out.println("Name: " + name);: Outputs the value of name to
            the console.
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          Control Structures
        </h1>
        <p className="text-xl font-semibold">Conditional Statements</p>
        <p className="text-gray-700">
          Java provides conditional statements such as if, else, and switch for
          controlling the flow of execution based on conditions.
        </p>

        <Code language="Java">
          {`
public class ConditionalDemo {
    public static void main(String[] args) {
        int num = 10;

        if (num > 0) {
            System.out.println("The number is positive.");
        } else if (num < 0) {
            System.out.println("The number is negative.");
        } else {
            System.out.println("The number is zero.");
        }
    }
}
          `}
        </Code>

        <h2 className="text-2xl font-semibold mt-4">Explanation:</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>{`if (num > 0): Checks if num is greater than 0 and prints "The number is positive."`}</li>
          <li>{`else if (num < 0): Checks if num is less than 0 and prints "The number is negative."`}</li>
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
          Loops allow you to execute a block of code repeatedly. The for loop is
          commonly used in Java for iterating over a range of values.
        </p>

        <Code language="Java">
          {`
public class ForLoopDemo {
    public static void main(String[] args) {
        for (int i = 1; i <= 5; i++) {
            System.out.println("Iteration " + i);
        }
    }
}
          `}
        </Code>

        <h2 className="text-2xl font-semibold mt-4">Explanation:</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>{`for (int i = 1; i <= 5; i++): Initializes i to 1, checks if i is less than or equal to 5, and increments i by 1 after each iteration.`}</li>
          <li>
            System.out.println("Iteration " + i);: Prints the current value of i
            for each iteration.
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

        <Code language="Java">
          {`
public class WhileLoopDemo {
    public static void main(String[] args) {
        int count = 1;

        while (count <= 5) {
            System.out.println("Count: " + count);
            count++;
        }
    }
}
          `}
        </Code>

        <h2 className="text-2xl font-semibold mt-4">Explanation:</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>int count = 1;: Initializes the variable count to 1.</li>
          <li>{`while (count <= 5): Executes the block of code inside the loop as long as count is less than or equal to 5.`}</li>
          <li>
            System.out.println("Count: " + count);: Prints the current value of
            count.
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

        <Code language="Java">
          {`
public class DoWhileLoopDemo {
    public static void main(String[] args) {
        int num = 1;

        do {
            System.out.println("Number: " + num);
            num++;
        } while (num <= 5);
    }
}
          `}
        </Code>

        <h2 className="text-2xl font-semibold mt-4">Explanation:</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>int num = 1;: Initializes the variable num to 1.</li>
          <li>do: Starts the do-while loop.</li>
          <li>
            System.out.println("Number: " + num);: Prints the current value of
            num.
          </li>
          <li>num++;: Increments num by 1 after each iteration.</li>
          <li>{`while (num <= 5);: Checks the condition after the loop body has executed, ensuring the block runs at least once.`}</li>
        </ul>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">String</h1>
        <p className="text-xl font-semibold">String Manipulation</p>
        <p className="text-gray-700">
          Strings in Java are objects that represent a sequence of characters.
          They are immutable, meaning once a String object is created, it cannot
          be changed.
        </p>

        <Code language="Java">
          {`
public class StringDemo {
    public static void main(String[] args) {
        String greeting = "Hello, World!";
        int length = greeting.length();
        String upperCaseGreeting = greeting.toUpperCase();
        String lowerCaseGreeting = greeting.toLowerCase();
        String replacedGreeting = greeting.replace("World", "Java");

        System.out.println("Original: " + greeting);
        System.out.println("Length: " + length);
        System.out.println("Upper case: " + upperCaseGreeting);
        System.out.println("Lower case: " + lowerCaseGreeting);
        System.out.println("Replaced: " + replacedGreeting);
    }
}
          `}
        </Code>

        <h2 className="text-2xl font-semibold mt-4">Explanation:</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>
            String greeting = "Hello, World!";: Declares a string variable
            greeting and initializes it with "Hello, World!".
          </li>
          <li>
            int length = greeting.length();: Gets the length of the string
            greeting.
          </li>
          <li>
            String upperCaseGreeting = greeting.toUpperCase();: Converts the
            string greeting to upper case.
          </li>
          <li>
            String lowerCaseGreeting = greeting.toLowerCase();: Converts the
            string greeting to lower case.
          </li>
          <li>
            String replacedGreeting = greeting.replace("World", "Java");:
            Replaces "World" with "Java" in the string greeting.
          </li>
          <li>
            System.out.println(...): Prints the various string manipulations to
            the console.
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">StringBuilder</h1>
        <p className="text-xl font-semibold">
          Mutable Strings with StringBuilder
        </p>
        <p className="text-gray-700">
          StringBuilder is a mutable sequence of characters. It is used to
          create and manipulate dynamic string content.
        </p>

        <Code language="Java">
          {`
public class StringBuilderDemo {
    public static void main(String[] args) {
        StringBuilder sb = new StringBuilder("Hello");
        sb.append(", World!");
        sb.insert(5, " Java");
        sb.replace(11, 16, "Universe");
        sb.delete(5, 10);

        System.out.println("StringBuilder: " + sb.toString());
    }
}
          `}
        </Code>

        <h2 className="text-2xl font-semibold mt-4">Explanation:</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>
            StringBuilder sb = new StringBuilder("Hello");: Creates a
            StringBuilder object initialized with "Hello".
          </li>
          <li>
            sb.append(", World!");: Appends ", World!" to the StringBuilder
            object.
          </li>
          <li>
            sb.insert(5, " Java");: Inserts " Java" at index 5 in the
            StringBuilder object.
          </li>
          <li>
            sb.replace(11, 16, "Universe");: Replaces the substring from index
            11 to 16 with "Universe".
          </li>
          <li>sb.delete(5, 10);: Deletes the substring from index 5 to 10.</li>
          <li>
            System.out.println("StringBuilder: " + sb.toString());: Prints the
            final content of the StringBuilder object.
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">ArrayList</h1>
        <p className="text-xl font-semibold">Dynamic Arrays with ArrayList</p>
        <p className="text-gray-700">
          ArrayList is a resizable array implementation of the List interface.
          It allows for dynamic growth and provides various methods for
          manipulating the contents of the list.
        </p>

        <Code language="Java">
          {`
import java.util.ArrayList;

public class ArrayListDemo {
    public static void main(String[] args) {
        ArrayList<String> fruits = new ArrayList<>();
        fruits.add("Apple");
        fruits.add("Banana");
        fruits.add("Orange");

        fruits.remove("Banana");
        fruits.add(1, "Grapes");

        for (String fruit : fruits) {
            System.out.println(fruit);
        }
    }
}
          `}
        </Code>

        <h2 className="text-2xl font-semibold mt-4">Explanation:</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>{`ArrayList<String> fruits = new ArrayList<>();: Creates an ArrayList of strings.`}</li>
          <li>fruits.add("Apple");: Adds "Apple" to the list.</li>
          <li>fruits.add("Banana");: Adds "Banana" to the list.</li>
          <li>fruits.add("Orange");: Adds "Orange" to the list.</li>
          <li>fruits.remove("Banana");: Removes "Banana" from the list.</li>
          <li>fruits.add(1, "Grapes");: Inserts "Grapes" at index 1.</li>
          <li>
            for (String fruit : fruits): Iterates over the list and prints each
            fruit.
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">HashMap</h1>
        <p className="text-xl font-semibold">Key-Value Pairs with HashMap</p>
        <p className="text-gray-700">
          HashMap is a part of the Java Collections Framework and provides the
          basic implementation of the Map interface. It stores data as key-value
          pairs.
        </p>

        <Code language="Java">
          {`
import java.util.HashMap;

public class HashMapDemo {
    public static void main(String[] args) {
        HashMap<String, Integer> populationMap = new HashMap<>();
        populationMap.put("New York", 8175133);
        populationMap.put("Los Angeles", 3792621);
        populationMap.put("Chicago", 2695598);

        populationMap.remove("Chicago");

        for (String city : populationMap.keySet()) {
            System.out.println("City: " + city + ", Population: " + populationMap.get(city));
        }
    }
}
          `}
        </Code>

        <h2 className="text-2xl font-semibold mt-4">Explanation:</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>{`HashMap<String, Integer> populationMap = new HashMap<>();: Creates a HashMap with String keys and Integer values.`}</li>
          <li>
            populationMap.put("New York", 8175133);: Adds a key-value pair ("New
            York", 8175133) to the map.
          </li>
          <li>
            populationMap.put("Los Angeles", 3792621);: Adds a key-value pair
            ("Los Angeles", 3792621) to the map.
          </li>
          <li>
            populationMap.put("Chicago", 2695598);: Adds a key-value pair
            ("Chicago", 2695598) to the map.
          </li>
          <li>
            populationMap.remove("Chicago");: Removes the entry with key
            "Chicago" from the map.
          </li>
          <li>
            for (String city : populationMap.keySet()): Iterates over the keys
            of the map and prints each city and its corresponding population.
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          Object-Oriented Programming
        </h1>
        <p className="text-xl font-semibold">Classes and Objects</p>
        <p className="text-gray-700">
          Java is an object-oriented programming language, which means it uses
          objects to represent data and methods to manipulate that data. A class
          is a blueprint for creating objects.
        </p>

        <Code language="Java">
          {`
class Car {
    String color;
    String model;

    void display() {
        System.out.println("Car model: " + model + ", Color: " + color);
    }
}

public class CarDemo {
    public static void main(String[] args) {
        Car car1 = new Car();
        car1.model = "Toyota";
        car1.color = "Red";
        car1.display();

        Car car2 = new Car();
        car2.model = "Honda";
        car2.color = "Blue";
        car2.display();
    }
}
          `}
        </Code>

        <h2 className="text-2xl font-semibold mt-4">Explanation:</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>class Car: Defines a class named Car.</li>
          <li>String color;: Declares a variable color of type String.</li>
          <li>String model;: Declares a variable model of type String.</li>
          <li>
            void display(): A method to display the car's model and color.
          </li>
          <li>
            Car car1 = new Car();: Creates an object of class Car named car1.
          </li>
          <li>car1.model = "Toyota";: Sets the model of car1 to "Toyota".</li>
          <li>car1.color = "Red";: Sets the color of car1 to "Red".</li>
          <li>
            car1.display();: Calls the display method on car1 to print its
            details.
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">Inheritance</h1>
        <p className="text-xl font-semibold">Inheritance in Java</p>
        <p className="text-gray-700">
          Inheritance allows a class to inherit properties and methods from
          another class. The class that inherits is called the subclass (or
          child class), and the class being inherited from is called the
          superclass (or parent class).
        </p>

        <Code language="Java">
          {`
class Animal {
    void eat() {
        System.out.println("This animal eats food.");
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println("The dog barks.");
    }
}

public class InheritanceDemo {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.eat();
        dog.bark();
    }
}
          `}
        </Code>

        <h2 className="text-2xl font-semibold mt-4">Explanation:</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>class Animal: Defines a superclass named Animal.</li>
          <li>
            void eat(): A method in the Animal class that prints a message.
          </li>
          <li>
            class Dog extends Animal: Defines a subclass Dog that inherits from
            Animal.
          </li>
          <li>void bark(): A method in the Dog class that prints a message.</li>
          <li>
            Dog dog = new Dog();: Creates an object of class Dog named dog.
          </li>
          <li>dog.eat();: Calls the inherited eat method on the dog object.</li>
          <li>dog.bark();: Calls the bark method on the dog object.</li>
        </ul>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">Polymorphism</h1>
        <p className="text-xl font-semibold">Polymorphism in Java</p>
        <p className="text-gray-700">
          Polymorphism allows methods to do different things based on the object
          it is acting upon. It is achieved through method overriding and method
          overloading.
        </p>

        <Code language="Java">
          {`
class Animal {
    void makeSound() {
        System.out.println("Animal makes a sound.");
    }
}

class Cat extends Animal {
    @Override
    void makeSound() {
        System.out.println("Cat meows.");
    }
}

class Dog extends Animal {
    @Override
    void makeSound() {
        System.out.println("Dog barks.");
    }
}

public class PolymorphismDemo {
    public static void main(String[] args) {
        Animal myAnimal = new Animal();
        Animal myCat = new Cat();
        Animal myDog = new Dog();

        myAnimal.makeSound();
        myCat.makeSound();
        myDog.makeSound();
    }
}
          `}
        </Code>

        <h2 className="text-2xl font-semibold mt-4">Explanation:</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>
            class Animal: Defines a superclass named Animal with a method
            makeSound.
          </li>
          <li>
            class Cat extends Animal: Defines a subclass Cat that overrides the
            makeSound method.
          </li>
          <li>
            class Dog extends Animal: Defines a subclass Dog that overrides the
            makeSound method.
          </li>
          <li>Animal myAnimal = new Animal();: Creates an Animal object.</li>
          <li>
            Animal myCat = new Cat();: Creates a Cat object and treats it as an
            Animal.
          </li>
          <li>
            Animal myDog = new Dog();: Creates a Dog object and treats it as an
            Animal.
          </li>
          <li>
            myAnimal.makeSound();: Calls the makeSound method on the Animal
            object.
          </li>
          <li>
            myCat.makeSound();: Calls the overridden makeSound method on the Cat
            object.
          </li>
          <li>
            myDog.makeSound();: Calls the overridden makeSound method on the Dog
            object.
          </li>
        </ul>
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

export default Java;
