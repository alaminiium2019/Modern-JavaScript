
//it works on conditon when find condition value 
//stop checking don't check whole items in array

var numbers = [1,2,3,4,5,6,10];

let result = numbers.find((currentValue,currentIndex, array) => {

    return currentValue > 4;

});

console.log(result);
