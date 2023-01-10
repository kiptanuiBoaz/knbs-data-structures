// JavaScript
// A class that finds the Kth largest element in a stream of numbers using js in the ES6 syntax

class KthFinder {
  constructor(k, nums) {
    // Initialize class variables
    this.k = k;
    this.nums = nums;
  }

  add(val) {
    // Add new value to the stream of cnumbers
    this.nums.push(val);

    // Sort the array of numbers in descending order
    this.nums.sort((a, b) => b - a);

    // Return the Kth largest element
    return this.nums[this.k - 1];
  }
}


// Now we create an instance of the class and pass in the value of K and an array of numbers.
const numsArr = new  KthFinder(3, [4, 5, 8, 2]);


// Call the add method on the instance, passing in a new number, to find the Kth largest element in the stream of numbers. 
// returns the 3rd largest element in the array [4, 5, 8, 2, 3], which is 4
console.log(numsArr.add(3));  // Outputs: 4

// returns the 3rd largest element in the array [4, 5, 8, 2, 3, 10], which is 5 
console.log(numsArr.add(10));  // Outputs: 5



// The add method adds the new number to the numArr , sorts the array in descending order, and returns the Kth largest element.
// In our case K = 3