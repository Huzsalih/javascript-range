function checkRange(num1, num2) {
    // Check if num1 or num2 is in the range 50 to 99 (inclusive)
    return (num1 >= 50 && num1 <= 99) || (num2 >= 50 && num2 <= 99);
  }
  
  // Example usage:
  console.log(checkRange(55, 30)); // Output: true
  console.log(checkRange(25, 80)); // Output: true
  console.log(checkRange(10, 20)); // Output: false
  console.log(checkRange(50, 99)); // Output: true
  