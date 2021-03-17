for (let i = 0; i <=5 ; i++) {        //for loop work block scope
    console.log(i);
    
}

//for in


const myObj = {
    name: 'JavaScript',
    estd: 1995,
    founder: 'Brendan Eich'
};

for(property in myObj){             //its return index
    console.log(property);
}

//for of

const progm = [20,30,40,50];

for(myProgm of progm){             //its return value
    console.log(myProgm);
}

//string

const myString = "I love JavaScript";

for(element of myString){
    console.log(element);
}