// write a program for concatenation two array(using spread operator)
const number3 = [4,24,13];
const number4 = [7,35,15];
const numbers = [...number3,...number4];
document.write(numbers);
// console.log(numbers)

// concat method
const conCat1 = 'Bangladesh is a';
const conCat2 = 'small country'

const result = conCat1.concat(' ', conCat2);//concat method  
// document.write(result);
// console.log(result);

//every method
const number1 = [20, 56, 30, 59, 34, 24];
const everyMetod = number1.every(checkout);
function checkout(num) {
    return num >= 21;
}
// document.write(everyMetod);
// console.log(everyMethod);
// some method
const number2 = [34,19,32,41,64];
const someMethod = number2.some(checkOut2);
function checkOut2(num1){
    return num1 > 63;
}
// document.write("some Method:", someMethod)
// console.log(someMethod);

// fill method
const names = ['haniful', 'modhu', 'morsalin', 'raju'];
names.fill('antor', 2,3)//fill(value,index,default length);
// document.write(names);
// console.log(names);

// from method
// create an array from a string;

let myName = 'haniful'
let fromMethod = Array.from(myName);
// console.log(fromMethod);
// document.write(fromMethod);


// join method
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.join(" * ");
// document.write(fruit);
// console.log(fruit);
