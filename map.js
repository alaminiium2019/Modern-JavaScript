//map work like for loop. don't change main array it return new array
//map method like for lop. main array change automatically data change

var numbers = [1,2,3,4,5,6];

var newArray = numbers.map((num) => {
    return 2*num;
})
 
console.log(newArray); //new array after using map() function

console.log(numbers);