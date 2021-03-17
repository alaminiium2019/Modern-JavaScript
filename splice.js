var numbers = [1,2,3,4,5];

var result = numbers.splice(1,2,10,12,19,19); 

//splice(start, deleteItem, addItem);//it change main array


console.log(numbers);  //return main array
console.log(result);   //Delete item

