// 构造函数继承
// function Animal (name) {
//   this.name = name
//   this.eat = function () {
//     console.log(`一只${this.name}在吃东西`);
//   }
// }

// Animal.prototype.sleep = function () {
//   console.log(`一只${this.name}在睡觉`);
// }

// function Cat (type) {
//   Animal.call(this, type)
// }

// let cat = new Cat('小黄')
// cat.eat() // 一只猫在吃东西
// // cat.sleep() // cat.sleep is not a function
// console.log(cat);

// 原型链继承
// function Animal (name) {
//   this.name = name
//   this.color = "黄色"
//   this.eat = function () {
//     console.log(`一只${this.name}在吃东西`);
//   }
// }

// Animal.prototype.sleep = function () {
//   console.log(`一只${this.name}在睡觉`);
// }

// function Cat () { }

// Cat.prototype = new Animal()

// let cat = new Cat('小黄')
// let cat1 = new Cat('小花')
// cat.eat() //一只小黄在吃东西
// cat.color = 'dddd'
// cat1.eat() //一只小花在吃东西
// console.log(cat1.color);// 黄色
// console.log(cat.prototype === cat1.prototype);
// 组合继承
// function Animal (name) {
//   this.name = name
//   this.eat = function () {
//     console.log(`一只${this.name}在吃东西`);
//   }
// }

// Animal.prototype.sleep = function () {
//   console.log(`一只${this.name}在睡觉`);
// }

// function Cat (name) {
//   Animal.call(this, name)
// }

// Cat.prototype = Animal.prototype // 子类的原型等于父类的原型
// Cat.prototype.constructor = Cat // 还原子类的构造函数

// let cat = new Cat('小黄')
// let cat1 = new Cat('小花')
// cat.eat() //一只小黄在吃东西
// cat.name = 'dddd'
// cat1.eat() //一只小花在吃东西
// console.log(cat1.name);// 小花

// Object.create 实现继承

// function Animal (name) {
//   this.name = name
//   this.eat = function () {
//     console.log(`一只${this.name}在吃东西`);
//   }
// }

// Animal.prototype.sleep = function () {
//   console.log(`一只${this.name}在睡觉`);
// }

// function Cat (name) {
//   Animal.call(this, name)
// }

// Cat.prototype = Object.create(Animal.prototype)
// Cat.prototype.constructor = Cat

// let cat = new Cat('小黄')
// let cat1 = new Cat('小花')
// cat.eat() //一只小黄在吃东西
// cat.name = 'dddd'
// cat1.eat() //一只小花在吃东西
// console.log(cat1.name);// 小花

//ES6 直接使用 extends 实现继承
// class Animal {
//   constructor(name) {
//     this.name = name
//   }
//   eat () {
//     console.log(`一只${this.name}在吃东西`);
//   }
// }
// class Cat extends Animal {

// }

// let cat = new Cat('小黄')
// let cat1 = new Cat('小花')
// cat.eat() //一只小黄在吃东西
// cat.name = 'dddd'
// cat1.eat() //一只小花在吃东西
// console.log(cat1.name);// 小花