
var numbers = [1,2,3,4,5,6,10];

let result = numbers.find((currentValue,currentIndex, array) => {

    return currentValue > 4;

});

console.log(result);
