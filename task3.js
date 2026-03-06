function second_largest(arr) {
    let firstlargest = -Infinity;
    let secondLargest = -Infinity;
    for (let num of arr) {
        if (num > firstlargest) {
            secondLargest = firstlargest;
            firstlargest = num;
        }
        else if (num > secondLargest && num !== firstlargest) {
            secondLargest = num;
      }
    }
  
    return secondLargest;
  }
  

console.log(second_largest([10,5,20,8]));
console.log(second_largest([0]));
console.log(second_largest([1,2]));
console.log(second_largest([1,2,3,4,4]));
console.log(second_largest([1,1,1,1]));
console.log(second_largest([0,-1,-2,-3]));
