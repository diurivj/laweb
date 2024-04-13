// hoisting
// sayMyName();
// var name = 'Diego';

// function sayMyName() {
//   // scope -> alcance
//   console.log(name);
//   var name = 'Andres';
// }

// vanilla javascript
// var nombre;
// function myFunc() {}

// ECMAScript 6 -> ECMA6 -> ES6 -> 2015

// const
// inmutable
// no se puede cambiar su valor
// no se puede re asignar
// const name = 'Andres';
// name = 'Diego'; // ❌

// let
// es mutable
// se puede re asignar
// incluso se puede cambiar el valor de tipo de dato
// let name = 'Andres';
// name = 230;
// console.log(name);

// Arrow function
// const sum = (num1, num2) => {
//   return num1 + num2;
// };

// // hipster fancy function -> se identifica como function loca!
// const sayMyName = name => `Hi ${name}`;

// const sumResult = sum(2, 3);
// console.log(sumResult);

// console.log(sayMyName('Beto'));

// // function sum(num1, num2) {
// //   return num1 + num2;
// // }

// // undefined
// let age = 17;
// let isFofoMarquez = false;
// // ternaries -> if / else statement
// let value = age >= 18 ? 'Ya es carcel' : 'Esta tibio todavia';

// arrays, objects y con cualquier otra ESTRUCTURA DE DATOS!!!!!!!!
const foods = ['Taquitos', 'Enchiladas', 'Agua chile mixto', 'Hamburguesas'];
const people = ['Diego', 'Betito', 'Kandres', 'Ulises'];

// push agrega elementos al final del array, Y REGRESA EL NUEVO LENGTH; muta el array original
// foods.push('Unos cortesitos', 'Pizza');

// unshift agrega elementos al inicio del array, Y REGRESA EL NUEVO LENGTH; muta el array original
// foods.unshift('Chicharron de rib eye');

// shift quita el primer elemento del array, Y LO REGRESA!!
// foods.shift();

// pop quita el ultimo elemento del array, Y LO REGRESA!!!
// foods.pop();

// Solo los maestros del Beto lo escribirian asi, LA NETA!!!! sin raspar muebles!

// for (let i = 0; i < foods.length; i++) {
//   // console.log(foods[i]);
// }
// const uppercasedFoods = [];

// // forEach NO REGRESA NADA!!!!!!!
foods.forEach((element, index) => {
  uppercasedFoods.push(element.toUpperCase());
});

// // map REGRESA UN ARRAY NUEVO!!!!! SIN MODIFICAR EL ARRAY ORIGINAL
const newArray = foods.map((element, index) => {
  return element.toUpperCase();
});
