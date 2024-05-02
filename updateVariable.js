// Question _____________ 73

function updateVariable() {
    let myVariable = 10; // Initial value
    console.log("Initial value:", myVariable);
  
    myVariable = 20; // Update value
    console.log("Updated value:", myVariable);
  }
  
  // Calling the function to see the output
  updateVariable();

  
// Question _____________ 74


let a = 5;
let b = 10;

console.log("Before swapping:");
console.log("a =", a);
console.log("b =", b);

// Swapping values
let temp = a;
a = b;
b = temp;

console.log("After swapping:");
console.log("a =", a); // Now a is 10
console.log("b =", b); // Now b is 5


// Question ____________ 75


let x = 4;

// Addition: x = x + 2
x += 2; // Same as x = x + 2
console.log("After addition, x =", x); // x is now 6

// Subtraction: x = x - 3
x -= 3; // Same as x = x - 3
console.log("After subtraction, x =", x); // x is now 3

// Multiplication: x = x * 5
x *= 5; // Same as x = x * 5
console.log("After multiplication, x =", x); // x is now 15

// Division: x = x / 3
x /= 3; // Same as x = x / 3
console.log("After division, x =", x); // x is now 5
