//input not specific value in function

function myFunc(){
    console.log(arguments);  
    //arguments use for not input unlimited value
    //return will be shown as object
}

myFunc(5,10,20,40,50);

function newFunc(a, ...params){
    console.log(a);
    console.log(params);  
    //arguments use for not input unlimited value
    //return will be shown as Array
}

newFunc(5,10,20,40,50);