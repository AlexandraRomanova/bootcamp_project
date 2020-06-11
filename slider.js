"use strict";

const Ant = function (crlsId) {
  let id = document.getElementById(crlsId);
  if (id) {
    this.crlsRoot = id;
  } else {
    this.crlsRoot = document.querySelector(".ant-carousel");
  }
  //все объекты нашего слайдера
  this.crlslist = this.crlsRoot.querySelector(".ant-carousel-list");
  this.crlsElements = this.crlsRoot.querySelectorAll(".ant-carousel-element");
  this.crlsElemFirst = this.crlsRoot.querySelector(".ant-carousel-element");
  this.leftArrow = this.crlsRoot.querySelector("div.ant-carousel-arrow-left");
  this.rightArrow = this.crlsRoot.querySelector("div.ant-carousel-arrow-right");
  this.indicatorDots = this.crlsRoot.querySelector(".ant-carousel-dots");
  //запуск слайдера
  this.options = Ant.defaults;
  Ant.initialize(this);
};

Ant.defaults = {
  //default options for the carousel
  elemVisible: 1, //кол-о отображаемых элементов в карусели
  loop: true, //бесконечное зацикливание карусели
  auto: true, //автоматическая прокрутка
  interval: 6000, //интервал между прокруткой элементов (мс)
  speed: 750, //скорость анимации (МС)
  touch: true, //прокрутка прикосновением
  arrows: true, //прокрутка стрелками
  dots: true, //индекаторные точки
};

Ant.prototype.elemPrev = function (num) {
  num = num || 1;

  if (this.options.dots) this.dotOn(this.currentElement);
  this.currentElement -= num;
  if (this.currentElement < 0) this.currentElement = this.dotsVisiable - 1;
  if (this.options.dots) this.dotOff(this.currentElement);

  if (!this.options.loop) {
    //сдвиг вправо без цикла
    this.currentOffsat += this.elemWidth * num;
  }
};
