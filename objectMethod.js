var myObj = {
    name:"JavaScript",
    founder: "Brendan Eich",
    estd: "1995",
    ranking: 1
};

var keys = Object.keys(myObj);   //return keys of object
var values = Object.values(myObj); //return values of object

var entries = Object.entries(myObj); //return keys and values


console.log(keys);
console.log(values);
console.log(entries);


//object shorthand
var x = 10;
var y = 20;
var z = x + y;

var myObj = {
    name:"JavaScript",
    founder: "Brendan Eich",
    estd: "1995",
    ranking: 1,
    x,         //if property name will be same as variable we can write shorthand x:x or x
    y
};