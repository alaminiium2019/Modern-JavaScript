//it works find index use findindex if return -1 not in here
var numbers = [1,2,3,4,5,6,7,8,9,10];

let result = numbers.findIndex((currentValue, index, array) => {
    return currentValue % 2 == 0;

});

console.log(result);