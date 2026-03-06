function remove_duplicates(arr) {
    let result = [];
    for (let num of arr) {
        if (!result.includes(num)) {
            result.push(num);
      }
    } 
    return result;
  }
console.log(remove_duplicates([0,0,1,1]));
console.log(remove_duplicates([0,0,1,1,2,3]));
console.log(remove_duplicates([0]));
console.log(remove_duplicates([])); 
console.log(remove_duplicates([1,-1,2,-1,1,3]));