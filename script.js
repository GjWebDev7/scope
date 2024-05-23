"use strict";
/*
What is Scope?
-scope in JavaScript refers to the context or environment in which variables are declared and can be accessed.
-JavaScript offers various types of scope, with the three primary ones being global, local, and block scope.
-These scopes control the accessibility of variables in different parts of your code and play a pivotal role in maintaining code organization and preventing variable conflicts.
*/

// Global scope-
// Variables declared in global scope are typically defined outside of any functions or code blocks.
// Variables declared in global scope are accessible from anywhere in your code, whether it's inside functions, conditional statements, loops, or other blocks of code.

let globalVariable = "I'm in global scope";

function globalScopeFunction() {
  // This function can access globalVariable
  console.log(globalVariable); // Outputs: I'm in global scope
}
globalScopeFunction(); // Here, globalVariable is declared in global scope, and globalScopeFunction can access and use it directly.

// Potential Issues with Global Scope - if multiple parts of your code modify the same global variable, it can lead to unexpected behaviors and bugs that are hard to track down.
function greet() {
  globalVariable = "Hello";
  console.log(globalVariable); // Outputs: Hello
}
greet();
console.log(globalVariable); // Outputs: Hello

/*
Best Practices for Using Global Scope-
To minimize the potential issues associated with global scope, consider the following best practices:
-Only declare variables in global scope when they genuinely need to be accessed globally.
-Avoid overwriting global variables: Be cautious when modifying global variables to prevent unintended side effects.
*/

// Local Scope
// Local scope refers to the visibility of variables declared within a block of code, such as within curly braces {}. This includes variables declared with let and const inside any block (e.g., loops, conditionals).

if (true) {
  let blockScopedVar = "I am block scoped";
  console.log(blockScopedVar); // Outputs: I am block scoped
}
// console.log(blockScopedVar); // Error: blockScopedVar is not defined
// In this example, blockScopedVar is only accessible within the if block. Trying to access it outside the block results in an error.

// Function Scope
// Function scope refers to the visibility of variables declared within a function. Variables declared with var inside a function are function-scoped, meaning they are accessible throughout the entire function but not outside it.
// A variable declared with var inside a function is said to be in the function scope. This means the variable is accessible only within that function and not outside of it.
function localScopeFunction() {
  var functionScopedVar = "I am function scoped";
  console.log(functionScopedVar); // Outputs: I am function scoped
}
localScopeFunction();
// console.log(functionScopedVar); // Error: functionScopedVar is not defined
// In this example, functionScopedVar is only accessible within localScopeFunction. Trying to access it outside the function results in an error.

// Variables declared with let and const are block-scoped, which means they are only accessible within the block (e.g., { }) in which they are declared. This is a key difference from var, which is function-scoped.
function blockScopeExample() {
  if (true) {
    let blockLet = "I am block scoped with let";
    const blockConst = "I am block scoped with const";
    var blockVar = "I am block scoped with let";
    console.log(blockLet); // Outputs: "I am block scoped with let"
    console.log(blockConst); // Outputs: "I am block scoped with const"
  }
  //   console.log(blockLet); // ReferenceError: blockLet is not defined
  //   console.log(blockConst); // ReferenceError: blockConst is not defined
  console.log(blockVar); // Outputs: I am block scoped with let
}
blockScopeExample();

// let and const declarations are block-scoped.They are only accessible within the block they are defined in, including inside loops, if statements, etc.
if (true) {
  let blockLet = "I am block scoped";
  const blockConst = "I am also block scoped";
  console.log(blockLet); // Outputs: I am block scoped
  console.log(blockConst); // Outputs: I am also block scoped
}
// console.log(blockLet); // Error: blockLet is not defined
// console.log(blockConst); // Error: blockConst is not defined

// Function Scope with var:
// variables declared with var are function-scoped, meaning they are accessible throughout the entire function, regardless of block boundaries within that function.
function functionScope() {
  let funcVar = "I am function scoped";
  if (true) {
    var funcVarInsideBlock = "I am also function scoped";
  }
  console.log(funcVarInsideBlock); // Outputs: I am also function scoped
  console.log(funcVar);
}
functionScope();
// console.log(funcVarInsideBlock); // Error: funcVarInsideBlock is not defined

// Variable Shadowing
// Variable shadowing occurs when a variable declared within a certain scope (e.g., a local scope) has the same name as a variable declared in an outer scope. When this happens, the inner variable "shadows" or overrides the outer variable within its scope. As a result, references to that variable name within the inner scope refer to the inner variable, not the outer one.
let outerVar = "I'm the outer variable";

function exampleFunction() {
  let outerVar = "I'm the inner variable";
  console.log(outerVar); // Output: I'm the inner variable
}

exampleFunction();
console.log(outerVar); // Output: I'm the outer variable

// Block scope
// Block scope refers to the scope of variables defined within a block, which is any code enclosed in curly braces {}. This includes loops, conditionals, and other block statements. In JavaScript, variables declared with let and const are block-scoped.

if (true) {
  let blockVariable = "I'm in block scope";
  console.log(blockVariable);
}
// console.log(blockVariable); // Accessing blockVariable here would result in an error

if (true) {
  const blockVariable = "I'm in block scope";
  console.log(blockVariable);
}
// console.log(blockVariable); // Accessing blockVariable here would result in an error

if (true) {
  var blockVariable = "I'm in block scope";
  console.log(blockVariable); // Output: I'm in block scope
}

// Differences between Block Scope and Local Scope-
// Local scope-
// In local scope, variables are typically defined within a function, while block scope is created within code blocks like if, for, or while statements.
// Local scope is function-level, meaning it encompasses the entire function, while block scope is limited to the specific block where the variable is declared.
// Accessible Within Nested Functions: Inner functions can access variables declared in their containing (outer) function.
function myFunction() {
  var functionVar = "I am local to the function";
  console.log(functionVar); // Accessible here

  function nestedFunction() {
    console.log(functionVar); // Accessible here too
  }
  nestedFunction();
}

myFunction();
// console.log(functionVar); // Uncaught ReferenceError: functionVar is not defined

// Block scope
// Block scope pertains to variables that are confined to a specific block of code, such as within { ... } (e.g., in loops, conditionals, or any block defined by curly braces). This type of scope was introduced in ES6 (ECMAScript 2015) with the let and const keywords.

if (true) {
  let blockVar = "I am block scoped";
  console.log(blockVar); // Accessible here
}
// console.log(blockVar); // Uncaught ReferenceError: blockVar is not defined

for (let i = 1; i <= 5; i++) {
  console.log(i); // Accessible here
}
// console.log(i); // Uncaught ReferenceError: i is not defined

// Scope chain - The process of searching variables through multiple scopes is known as scope chain.
var globalVar = "global";

function outerFunction() {
  var outerVar = "outer";

  function innerFunction() {
    var innerVar = "inner";
    console.log(innerVar); // "inner"
    console.log(outerVar); // "outer"
    console.log(globalVar); // "global"
  }

  innerFunction();
}
outerFunction();
// When innerFunction executes, it first looks for innerVar within its own scope. If it doesn't find it, it moves up the scope chain to outerFunction. If it's still not found, it moves up to the global scope.
// Visualization of the Scope Chain-
// Global Scope
//    ├── globalVar
//    └── outerFunction
//         ├── outerVar
//         └── innerFunction
//               ├── innerVar

// Hoisting - Hoisting is a JavaScript mechanism where variable and function declarations goes to the top of the scope they were defined in.This means you can use variables and functions before they appear in the code. However, hoisting only moves the declarations, not the initializations or assignments.

/*
// hoisting only moves the declarations, not the initializations or assignments. What does it mean?
console.log(x); // Output: undefined
var x = 5;
console.log(x); // Output: 5

// When this code is executed, the JavaScript engine treats it as if it were written like this:
var x; // Declaration is hoisted to the top
console.log(x); // Output: undefined (x is declared but not yet initialized)
x = 5; // Initialization (assignment) remains in place
console.log(x); // Output: 5
// The declaration var x; is hoisted to the top of the scope, but the assignment x = 5; is not. Therefore, when console.log(x); is called the first time, x is declared but not initialized, resulting in undefined.
*/

// Variable Hoisting with var
// When you declare a variable with var, the declaration is hoisted to the top of the scope (either the global scope or the function scope), but the assignment stays where it is.
console.log(a); // undefined
var a = 10;
console.log(a); // 10
// Even though a is used before its declaration, it doesn't cause an error because the declaration var a; is hoisted to the top. The initialization a = 10; happens where it originally appears in the code.

// Function Hoisting
// Function declarations are also hoisted. This means you can call a function before its declaration in the code:
greeter(); // "Hello, world!"

function greeter() {
  console.log("Hello, world!");
}
// This code behaves as if it were written like this:
function greet() {
  console.log("Hello, world!");
}
greet(); // "Hello, world!"
// The entire function declaration is hoisted, so you can call the function before it is defined in the code.

// Differences with let and const
// Variables declared with let and const are hoisted as well, but they are not initialized with undefined. Instead, they are in a "temporal dead zone" (TDZ) from the start of the block until the declaration is encountered. Accessing them before their declaration results in a ReferenceError.
// Temporal Dead Zone - The variables are hoisted to the top of the scope they are declared in (local, global, or block), but are not accessible because they have not been initialized. This concept is referred to as the Temporal Dead Zone.

// console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 20;

// The same behavior applies to const:
// console.log(c); // ReferenceError: Cannot access 'c' before initialization
const c = 30;

// Summary
// var Hoisting: The declaration is hoisted, but the initialization is not. Accessing the variable before initialization returns undefined.
// Function Hoisting: The entire function declaration is hoisted, allowing you to call the function before it appears in the code.
// let and const Hoisting: Declarations are hoisted, but they remain in the temporal dead zone until initialization. Accessing them before initialization results in a ReferenceError.
