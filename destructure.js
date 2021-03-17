const user = {
    id:1029,
    name: 'Alamin',
    age: 30,
    education:{
        degree: "Masters"
    }
};

//take name from object it will be used another place

const {name,age} = user;  
const {name: title} = user;   //use alias title 

// console.log(name);
console.log(title);

//
const {education:{degree}} = user;

console.log(degree);

//default value
const {education:{degree} = {}} = user; //{} default value

console.log(degree);

// array destructure

var numbers = [1,4,6,7,9];

var [a,b] = numbers;
var [,a,,b] = numbers;  //skin by index use comma(,)

console.log(a,b);


//swap variable destrucring variable
var a = 1;
var b = 2;

[b,a] = [a,b];






