function odd_square_array(arr) {
    let result = [];
    for (let num of arr) {
            if (num % 2 !== 0) {
                    result.push(num * num);
                }
        }
        return result;
    }
console.log(odd_square_array([1,2,3,4,5]));
console.log(odd_square_array([6,7,8,9]));
console.log(odd_square_array([2,4,6,8,10]));
console.log(odd_square_array([0]));
console.log(odd_square_array([])); 
console.log(odd_square_array([-1, -2, -3, -4]));
