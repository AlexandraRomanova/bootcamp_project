"use strict";

// переменная объявленная через const не может менять своё знвчение
const name = "Sasha";

// переменная объявленная через let может менять своё знвчение
let age = 14;

// команда выводы инвормацци в браузер в консоль
console.log(age);
age = 15;
console.log(age);

//primitives: undefined, string, number, boolean(true and false), object(null - исключение)
let message; //переменная без значения
console.log(message); //undefined
console.log(typeof message); //undefined
message = "Hello World";
console.log(typeof message); //string
console.log(typeof age); //number
console.log(typeof true); //boolean
console.log(typeof false); //boolean
console.log(typeof null); //object исключение - специально добавленная ошибка языка

// сложные типы данных
//objects, arrays(массивы), functions

//objects
const object = {
  name: "Sasha", //свойство
  //ключ: значение
  age: 14,
  hairColor: "blond",
};
console.log(object);

//arrays
const array = ["Sasha", "Oleg", "Elena", "Vlada"];
console.log(array);

//functions
//functions expression
const funcExp = function (a, b, c) {
  //тут объявили функцию
  return console.log(a + b + c);
};
funcExp(1, 2, 3); //вызов функции
//arrow function
const arrowfunc = (a, b, c) => console.log(a + b + c);
arrowfunc(3, 6, 10);
//function declaretion
//1.
funcDec();
function funcDec() {
  console.log("Я крутая функция без переменной");
}
//2.
//const greet = "Я крутая функция без переменной";
//function funcDec() {
// console.log(greet);
//}
//funcDec();

//example 1
const breadPrice = 15;
const milkPrice = 30;
const eggsPrice = 20;
const chickenPrice = 120;
const applePrice = 40;
const orangePrice = 30;
const bananaPrice = 30;

const totalPrice = function (
  prod1 = 0,
  prod2 = 0,
  prod3 = 0,
  prod4 = 0,
  prod5 = 0
) {
  return console.log(prod1 + prod2 + prod3 + prod4 + prod5);
  //30 + 30 + 20 + 120 + 40 = 230
};
totalPrice(milkPrice, bananaPrice, eggsPrice, chickenPrice, applePrice);
totalPrice(breadPrice, orangePrice, milkPrice, milkPrice, bananaPrice);
totalPrice(breadPrice, milkPrice);
totalPrice(breadPrice);
totalPrice();

//example 2
const sum = function (count = 1, price = 1) {
  return console.log(count + price);
};
sum(2, 4);
sum(2, breadPrice);
sum(bananaPrice);

// alert("Добро пожаловать!");

// const answer = confirm("Вы хотите изучить JS");
// console.log(answer); // ok = true, cancel = false

// const data = +prompt("Введите, пожалуйста, ваш возраст");
// console.log(data); //14
// console.log(typeof data);

// function alerts() {
//   alert("1");
//   alert("2");
//   alert("3");
// }
// alerts();

alert("1");
alert("2");
alert("3");

let crlsRoot = document.querySelector(".ant-carousel");
console.log(crlsRoot);

let crlslist = document.querySelector(".ant-carousel-list");
console.log(crlslist);

let crlsElements = document.querySelectorAll(".ant-carousel-element");
console.log(crlsElements);

let crlsElemFirst = document.querySelector(".ant-carousel-element");
console.log(crlsElemFirst);

let leftArrow = document.querySelector("div.ant-carousel-arrow-left");
console.log(leftArrow);

let rightArrow = document.querySelector("div.ant-carousel-arrow-right");
console.log(rightArrow);

let indicatorDots = document.querySelector(".ant-carousel-dots");
console.log(indicatorDots);

let elm;
console.log(elm); //undefined

//получаем ссылку на последний элемент списка
elm = crlslist.lastElementChild;
console.log("последний элемент списка", elm);

let buf;
console.log(buf); //undefined

//делаем глубокую копию последнего элемента списка
buf = elm.cloneNode(true);
console.log("клон последнего элемента", buf);

//встраиваем клон последнего элемента списка
crlslist.insertBefore(buf, crlslist.firstChild);
//исходный последний элемент списка удаляем
//crlslist.removeChild(elm);
elm.remove();
//выводим обновлённый список
console.log(crlslist);

leftArrow.addEventListener("click", leftArrowclick);
rightArrow.addEventListener("click", rightArrowclick);
function leftArrowclick() {
  alert("СРАБОТАЛ КЛИК НА ЛЕВОЙ СТРЕЛКЕ");
}
function rightArrowclick() {
  alert("СРАБОТАЛ КЛИК НА ПРАВОЙ СТРЕЛКЕ");
}
