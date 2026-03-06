function numeric_value_sum(obj) {
    let sum = 0;
    for (let key in obj) {
        if (typeof obj[key] === "number") {
            sum += obj[key];
        }
    }
    return sum;
}
console.log(numeric_value_sum({a:10, b:"test", c:20, d:true}));
console.log(numeric_value_sum({a:10, b:20, c:30}));
console.log(numeric_value_sum({a:-10, b:-20, c:-30}));
console.log(numeric_value_sum({a:1.5, b:2.5, c:3.5}));
console.log(numeric_value_sum({a:false, b:null }));
console.log(numeric_value_sum({a:false, b:true }));
console.log(numeric_value_sum({a:"test"}));
console.log(numeric_value_sum({a:10, b:"test", c:20, d:true, e:"20", f:null}));
console.log(numeric_value_sum({}));
console.log(numeric_value_sum({a:10}));
console.log(numeric_value_sum({a:10, b:Infinity}));
console.log(numeric_value_sum({a:NaN}));
console.log(numeric_value_sum({a:10, b:{c:20}}));