//it works all item in array, like sum
var numbers = [1,2,3,4,5,6,20];

var result = numbers.reduce((previousValue, currentValue,) => {  
    //previousValue, currentValue, currentIndex, array
    return previousValue + currentValue;

}, 0)   //it is initial value or default value

console.log(result);

//return 41