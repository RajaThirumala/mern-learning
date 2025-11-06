function printFullName(firstName,lastName){
    return firstName+" "+lastName;
}

function areaOfRectangle(length,breadth){
    return length*breadth;
}

function greetUser(){
    console.log("Welcome to Student Tribe!")
}

function showMenu(){
    greetUser();
    console.log("Here is your course menu!");
}

function makeJuice(fruit1, fruit2, liquid){
    return "Juice made of "+fruit1+" "+fruit2+" "+liquid;
}

function calculate(num1, num2, operation){
    if( operation==="add"){
        return num1+num2;
    }
    else if(operation==="substract"){
        return num1-num2;
    }
    else{
        return num1*num2;
    }

}
let fullname=printFullName("Raja", "Thirumala");
console.log(fullname)
fullname=printFullName("Hima", "Thirumala");
console.log(fullname)
let area=areaOfRectangle(5,5);
console.log(area);
showMenu();
console.log(makeJuice("Apple", "Banana", "Water"))
let sum=calculate(2,2,"add");
console.log(sum);