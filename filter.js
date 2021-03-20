//reduce return all item on condition

var numbers = [1,2,3,4,5,6,7,8,9,10];

let result = numbers.filter((currentValue, index, array) => {
    return currentValue > 4;

});

console.log(result);

//return: 5,6,7,8,9,10