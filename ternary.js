
var age = 18;
var type;

if(age >= 18){
    type = "Adult";
    console.log(type)
}else{
    type = 'Child';
    console.log(type);
}

//ternary operator
var age = 17;
var type = (age >= 18) ? "Adult" : "Child";
console.log(type);

//ternary nested operator
var age = 17;
var type = (age >= 18) ? "Adult" : (age <10)? "Child":  "Young";
console.log(type);


