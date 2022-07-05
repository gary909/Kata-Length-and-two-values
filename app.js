function alternate(n, firstValue, secondValue) {
    var myArr = [];
    for (let i = 0; i < n; i++) {
        myArr.push(firstValue, secondValue);
    }
    var half = Math.ceil(myArr.length / 2)
    return myArr.splice(0, half);
}

console.log(alternate(5, true, false)); // [true, false, true, false, true]
console.log(alternate(20, 'blue', 'red')); // ['blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red']
console.log(alternate(0, "lemons", "apples")); // []
