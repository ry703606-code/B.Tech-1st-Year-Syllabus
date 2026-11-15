// Modern ECMAScript Features (ES6+)
// let and const / Arrow Functions / Template Literals / Destructuring / Spread / Rest Parameters...etc

// Error Handling — try, catch and finally
// try {
//   console.log("Inside try");
//   console.log(x);
// } catch (error) {
//   console.log("Error handled");
// } finally {
//   console.log("Finally block executed");
// }

// Synchronous / Asynchronous Programming
// console.log("First");
// console.log("Second");
// console.log("Third");

// console.log("First");
// setTimeout(() => {
//   console.log("Second");
// }, 2000);
// console.log("Third");

// Timers — setTimeout(), clearTimeout(), setInterval() and clearInterval()

// setTimeout()
// console.log("Hello");
// setTimeout(() => {
//   console.log("Welcome to JavaScript");
// }, 3000);
// console.log("Goodbye");

// clearTimeout();
// let timer = setTimeout(() => {
//   console.log("Welcome to JavaScript");
// }, 5000);
// clearTimeout(timer);
// console.log("Timer Cancelled");

// setInterval()
// setInterval(() => {
//   console.log("Hello Student");
// }, 2000);

// clearInterval()
// let count = 1;
// let timer = setInterval(() => {
//   console.log(count);
//   count++;
//   if (count > 5) {
//     clearInterval(timer);
//   }
// }, 1000);

// Event Loop
// The Event Loop is a mechanism in JavaScript that continuously monitors the Call Stack and task queues. It ensures that asynchronous callbacks are executed when the Call Stack becomes empty.

// Browser Object Model (BOM)
// The Browser Object Model (BOM) is a collection of browser-provided objects that allows JavaScript to interact with the browser window and its features.

// console.log(window);
// window.alert("Welcome");
// alert("Welcome");

// Document Object Model (DOM)
// The Document Object Model (DOM) is a programming interface that represents an HTML document as a tree-like structure of objects. JavaScript uses the DOM to access, modify, add or remove HTML elements and their content.

// Accessing HTML Elements Using JavaScript

// -> getElementById() / getElementsByClassName() / getElementsByTagName() / querySelector() / querySelectorAll()

// let element = document.getElementById("heading");
// console.log(element);

// let element = document.getElementById("heading");
// element.innerHTML = "Welcome to JavaScript";

// let elements = document.getElementsByClassName("info");
// console.log(elements);
// elements[0].innerHTML = "Updated First Paragraph";

// let paragraphs = document.getElementsByTagName("p");
// console.log(paragraphs.length);

// let heading = document.querySelector("#heading");
// let paragraph = document.querySelector(".info");

// let elements = document.querySelectorAll(".info");
// console.log(elements);

// Local Storage and Session Storage

// Local Storage is a browser storage mechanism that allows websites to store key-value pairs of data persistently, even after the browser is closed and reopened.
// localStorage.setItem("name", "Rahul");
// localStorage.getItem("name");
// localStorage.removeItem("name");
// localStorage.clear();

// Session Storage is a browser storage mechanism that stores key-value pairs for a particular browser tab session. The data remains available during that session and is cleared when the tab or its browsing context is closed.

// sessionStorage.setItem("username", "Rahul");
// sessionStorage.getItem("username");
// sessionStorage.removeItem("username");
// sessionStorage.clear();

// Browser Events
// Browser Events are actions or occurrences that happen in the browser, which JavaScript can detect and respond to.
// -> Mouse Events => click/dblclick/mouseover...etc
// -> Keyboard Events => keydown / keyup / keypress
// -> Form Events...etc

// Code Organization
// Code Organization is the process of arranging and structuring program code into separate files, functions, and modules to make it readable, reusable, maintainable, and manageable.

// Debugging Techniques
// Debugging is the process of identifying, analyzing, and fixing errors or bugs in a program to ensure that the program works correctly.

// Performance Optimization
// Performance Optimization is the process of improving the speed, efficiency, and responsiveness of a JavaScript application by reducing unnecessary operations and improving code execution.

// JavaScript Best Practices
// JavaScript Best Practices are recommended coding standards and techniques that help developers write clean, readable, secure, efficient, and maintainable JavaScript code.

// -> Use Meaningful Variable Names
// -> Use const and let Instead of var
// -> Follow Proper Indentation
// -> Use Strict Equality (===)
// -> Handle Errors Properly