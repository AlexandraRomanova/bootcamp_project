"use strict";

let crslRoot = document.querySelector(".ant-carousel");
console.log(crslRoot);

let crslist = document.querySelector(".ant-carousel-list");
console.log(crslist);

let crslements = document.querySelectorAll(".ant-carousel-element");
console.log(crslements);

let crslElemFirst = document.querySelector(".ant-carousel-element");
console.log(crslemFirst);

let leftArrow = document.querySelector("div.ant-carousel-arrow-left");
console.log(leftArrow);

let rightArrow = document.querySelector("div.ant-carousel-arrow-right");
console.log(rightArrow);

let indicatorDots = document.querySelector(".ant-carousel-dots");
console.log(indicatorDots);

let elm;
console.log(elm); //undefined

//получаем ссылку на последний элемент списка
elm = crslist.lastElementChild;
console.log("последний элемент списка", elm);

let buf;
console.log(buf); //undefined

//делаем глубокую копию последнего элемента списка
buf = elm.cloneNode(true);
console.log("клон последнего элемента", buf);

//встраиваем клон последнего элемента списка
crslist.insertBefore(buf, crslist.firstChild);
//исходный последний элемент списка удаляем
//crslist.removeChild(elm);
elm.remove();
//выводим обновлённый список
console.log(crslist);

leftArrow.addEventListener("click", leftArrowclick);
rightArrow.addEventListener("click", rightArrowclick);
function leftArrowclick() {
  alert("СРАБОТАЛ КЛИК НА ЛЕВОЙ СТРЕЛКЕ");
}
function rightArrowclick() {
  alert("СРАБОТАЛ КЛИК НА ПРАВОЙ СТРЕЛКЕ");
}
