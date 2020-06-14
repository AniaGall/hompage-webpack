import '../scss/style.scss';

import moment from 'moment';
console.log(moment().startOf('day').fromNow());

const startOfDay = moment().startOf('day').fromNow();

const timePlaceholder = document.querySelector('.time--js');

timePlaceholder.innerHTML = startOfDay;

console.log(startOfDay);



const firstName = "Ania";
const age = 37;

console.log(firstName);
console.log(age);

// alert("Siema!");
console.log("Witaj WTF!");
console.log("Co słychać?");
console.log(`Siema, nazywam się ${firstName} i mam ${age} lat.`);

// function calculate(myNumber) {
//     console.log(`Dostałam ${myNumber}`);
//     return myNumber*7;
// }

// const myResult = calculate(age);

// console.log(myResult);

console.log(age);

function greetOld(age, firstName) {
    console.log(
        `Siema, nazywam się ${firstName} i mam ${age} lat.`);
}

function welcome(age, firstName) {
  console.log(`Witam wszystkich, mam na imię ${firstName} i mam ${age} lat.`);
}

welcome(age, firstName);

const greet = (age, firstName) => {
  console.log(`Siema, nazywam się ${firstName} i mam ${age} lat.`);
};

greet(age, firstName);

function calculateOld(myNumber) {
  return myNumber * 7;
}

const calculate = (myNumber) => myNumber * 7;

const myResult = calculate(7);
console.log(myResult);

greetOld(37,'Ania');

function createContent(querySelectorContent, content) {
  const element = document.querySelector(querySelectorContent);

  element.innerHTML = content;
}
createContent(".new-first__header--js", "Witajcie na mojej stronie");

const myObject = {
    greet: (age, firstName) => {
        return `Siema, nazywam się ${firstName} i mam ${age} lat.`
    },
};

console.log(
    myObject.greet(19, "Stefcia") )


    const button = document.querySelector('.action--js');

    console.log(button)

    button.addEventListener('click', () => {
      const element = document.querySelector(".new-first__header--js");
      element.innerHTML = `Witam wszystkich na mojej stronie.`;
      element.classList.add('klasa-z-js');
    });

    const dupa = document.querySelector('.hamburger--js');

   dupa.addEventListener('click', () => {
     const nav = document.querySelector('.navigation--js');
     nav.classList.toggle('navigation--open');
     nav.classList.toggle('flex');
   }) 
