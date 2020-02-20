// ***********************************************************
// #25
// Homework from 18.02.2020    *Дима Скалюн
// ***********************************************************

// https://learn.javascript.ru/regular-expressions
// https://regexper.com/ создает карту (визуальное представление того, как работает регулярное выражение).
// https://www.regextester.com/ - можно ввести текст и получить визуальное представление совпадений на лету

// ----------------------------------------------------------------
// 1) Написать функцию, которая на вход принимает строку,
//    возвращает массив чисел, которые являются граничными,
//    то есть не внутри текста.

function reworkStr(str) {
  let digitsArray = [];
  const myRegExp = str.match(/^\d+|([\s]+[\d+]+[\s]|\d+$)/g);
  myRegExp.forEach(digit => {
    digitsArray.push(digit.replace(/\s/g, ""));
  })
  return digitsArray;
}
const TEST_STRING_1 = reworkStr("при1вет 12 ываыва34 98 3423ыавыа 10");  //  [12, 98, 10]
const TEST_STRING_2 = reworkStr("10 ываыв 8 234ы 6");  // [10, 8]
console.log(TEST_STRING_1);
console.log(TEST_STRING_2);

// ----------------------------------------------------------------
// 2) Написать функцию для валидации api v4 адреса и описать
//    как она работает, что делает конкретный символ на конкретной
//    позиции регулярного выражения

function apiValidation(adress) {
  const regExpForApiV4 = /\b(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b/g;
  return regExpForApiV4.test(adress);
}

console.log('"127.0.0.0" is valid?  ' + apiValidation("127.0.0.0"));
console.log('"127.0.155.10" is valid?  ' + apiValidation("127.0.155.10"));
console.log('"127.0т155.10" is valid?  ' + apiValidation("127.0т155.10"));

//   \b(...)\b     - границы слова, не работает для алфавитов, не основанных на латинице;
//   (?:(...)\.)   - Означает "ноль или один", либо необязательное значение соответствующее указанному далее условию;
//   \.            - просто точка
//   ?:25[0-5]     - необязательное условие, если первые две цифры 2 и 5, третья должна быть в диапазоне от 0 до 5 (если нет совпадение = 0);
//   [0-5]         - диапазон чисел от 0 до 5:
//   2[0-4][0-9]   - условие, если первая цифра 2, вторая от 0 до 4, третья от 0 до 9;
//   2[0-4][0-9]|[01]  - символ "|" означает "или"; выполнится либо 2[0-4][0-9] или одно число из диапазона [0-1];
//   (?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)
//   {3}           - квантификатор = 3; указывает кол-во чисел равных диапазону [...], которое требуется вернуть;
//   в нашем случае работает с условием: "(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.)"
//   /g            - поиск ищет все совпадения, без него – только первое;
//   итого: первые три числа перед "." должны быть равны одному из условий: 25[0-5] или 2[0-4][0-9] или [01]?[0-9][0-9]?
//   последнее четвертое число попадает под аналогичные условия, за исключением того, что после него не должно быть "."

// ----------------------------------------------------------------
// 3)* string contains 9 digits {Boolen}

class NineDigits {
  constructor(task) {
    this.task = task;
  }

  idValid(str) {
    const myRegExp = str.match(/[0-9]/g);
    if (myRegExp.length > 8) {
      return true;
    } else {
      return false;
    }
  }
}
const currString3 = 'reg380 96e!#$%^&*(rer05e3 l,945e; 44 7ha';
const nineDigits1 = new NineDigits('Is String has 9 or more digits?');
console.log('Is String has 9 or more digits?   ' + currString3);
console.log(nineDigits1.idValid(currString3));

// ----------------------------------------------------------------
// 4)* string output 9 digits

class Phone {
  constructor(task) {
    this.task = task;
  }

  getPhone(str) {
    const myRegExp = str.replace(/\D/g, "");
    let inputedPhone = "";
    for (let i = 0; i < 9; i++) {
      inputedPhone += myRegExp[i];
    }
    return +inputedPhone;
  }
}

let currString4 = '34%()_vt9384u03v 094v340 239qF';
const phone1 = new Phone('Output of (first) nine digits');
console.log('First 9 digits of:    ' + currString4);
console.log(phone1.getPhone(currString4));

// ----------------------------------------------------------------



















// **************Class Work*************


// const re = /ssd/g;

// const re = new RegExp("ssd", "gim");

// console.log(re.test('wssd anid ssd sfsd'));
// console.log(re.exec('wssd anid ssd sfsd'));

// console.log("Ab".match(/ab/igm));
// спецсимволы - [] \ $ ^ . ? + * ()

// const re = /^\w+([\.-]?\w+)*@(\w+)([\.-]?\w+)*(\.\w{2,3})+$/

// const result = "user-43232.dfgds@gmail.com".match(re);
// console.log(result)

// if (result) {
//   const blackList = [
//     'gmail',
//     'chebureck',
//   ];
//   const domain = result[2];


  // if (blackList.includes(domain)) {
    // console.log('denied')
  // }
  // console.log(domain)
// }
// console.log(
//   "user@gmail.com".match(re)
// )


// console.log("abc some text ab ab".replace(/ab/g, 1));
// console.log(" abc some   text ab ab ".replace(/\s/g, ""));

// методы строк - match, replace

// методы регулярок - test, exec

// 1. isValid(str) -> возвращает true, false
// валидный если содержит 9 цифр

// 2. function getPhone (str) -> 9 цифр на выходе
// возвращаем число
// 