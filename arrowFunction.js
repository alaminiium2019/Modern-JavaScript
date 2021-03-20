//normal function
function number(){
    return 10;
}

console.log(number());

//Arrow function
let number = () => 10;

console.log(number());

//arrow function
let number = (x,y) => x+y;    
    
console.log(number(10,20));




// var javaScript = {
//     name: 'JavaScript',
//     libraries: ['React','Angular','VUE'],
//     printLibaries: function(){
//         var self =this;
//         this.libraries.forEach((a) => console.log(`${self.name} loves ${a}`));    
//     }
// }
// javaScript.printLibaries();