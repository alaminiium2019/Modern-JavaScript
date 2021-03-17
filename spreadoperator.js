//spread operator is a copy of array
//use for copy array

var numbers = [1,2,3,4,5,6,7];

var newNumbers= [...numbers,8,9,10];

console.log(newNumbers);

//object spreading

var myObj1 = {
    x: 1,
    y: 2
}

var myObj2 = {
    a: 3,
    b: 4
}

console.log({
    ...myObj1,...myObj2
})