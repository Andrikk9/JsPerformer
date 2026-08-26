'use strict';
// const usdCurr = 28;
// const discount = 0.9;

// function convert(amount, curr) {
//     return curr * amount;
// }

// function promotion(result) {
//     console.log(result * discount);
// }

// const res = convert(500, usdCurr);
// promotion(res);
// // promotion(convert(500, usdCurr));
// function test() {
//     for (let i = 0; i < 5; i++) {
//         console.log(i);
//         if (i === 3) return 
//     }
//     console.log('Done')
// }

// test();

// let num = 45;

// // while (num < 47) {
// //     console.log(num);
// //     num++;
// //     if (num === 46) {
// //         continue;
// //     } 
// // }

// do {
//     console.log(num);
//     num++;
// }
// while (num < 56);

// for (let i = 1; i < 11; i++) {
//     if (i === 6) {
//         continue;
//     }
//     console.log(i);
// }

// let result = '';
// const length = 7;

// for (let i = 1; i < length; i++) {

//     for (let j = 0; j < i; j++) {
//         result += "1";
//     }

//     result += '\n';
// }

// console.log(result);

// // let result = '';
// const size = 10;

// for (let i = 1; i <= size; i++) {

//     for (let j = 1; j <= size; j++) {
//         if (i === 1 || i === size || j === 1 || j === size) {
//             result += '*';
//         } else {
//             result += ' ';
//         }
//     }

//     result += '\n';
// }

// console.log(result);

// for (let i = 0; i < 3; i++) {
//     console.log(`First level: ${i}`);
//     for (let j = 0; j < 3; j++) {
//         console.log(`Second level: ${j}`);
//         first: for (let k = 0; k < 3; k++) {
//             console.log(`Third level: ${k}`);
//             for (let m = 0; m < 3; m++) {
//                 console.log(`Forth level: ${m}`)
//                 if (m === 2) continue first;
//             }
//         }
//     }
// }

// const str = "test";

// // console.log(str.length);
// console.log(str.toUpperCase());
// console.log(str);

// const fruit = "Some fruit in a box";

// console.log(typeof fruit);

// const logg = "Hello world and everyone"

// console.log(logg.slice(12, 15));
// console.log(logg.substring(12, 15));

// const value = 12.2;
// console.log(Math.round(value))

// const test = "12.2px";

// console.log(parseInt(test));

// const arr = ['a', 'b', 'c'];
// const arrObj = {
//     a: 'a',
//     '1': 'b',
//     2: 'c',
//     abc: {
//         def: {
            
//         }
//     }
// }

// const b = 'b';

// arrObj[b] = '1234';

// console.log(arrObj['b']);
// console.log(arrObj.b);


// let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     }
// }

// start();

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function () {
//         console.log("Test");
//     }
// };

// for (let key in options) {
//     console.log(`Свойство ${key} имеет значенние ${options[key]}`);
// }

// options.makeTest();

// // console.log(Object.keys(options).length);
// const {border, bg} = options.colors;
// console.log(border);

// const arr = [1, 2, 3, 4, 5];
// // arr[90] = 0;
// // console.log(arr.length);
// // console.log(arr);
// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item}внутри массива ${arr}`);
// });

// arr.pop();
// arr.push("6");
// console.log(arr);   

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let stark of arr) {
//     console.log(stark);
// }
// const array = [2, 53, 44, 5,6 ,16, 67, 28, 9, 10];
// array.sort(compareNum);
// console.log(array);

// function compareNum(a, b) {
//     return a - b;
// }

// array.sort(compareNum);
// console.log(array);

// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products.join(';'));

// function copy(mainObj) {
//     let objCopy = {};

//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }
//     return objCopy;
// };

// const numbers = {
//     a:2,
//     b:5,
//     c: {
//         x: 7,
//         y: 4,
//     }
// }

// newNumbers = copy(numbers);

// newNumbers.a = 10;
// newNumbers.c.x = 10;
// // console.log(newNumbers);
// // console.log(numbers);

// const add = {
//     d: 17,
//     e: 20
// }

// const clone = Object.assign({}, add);
// clone.d = 20;

// // console.log(add);
// // console.log(clone);
// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();

// newArray[1] = 'dasfgds';
// console.log(newArray);
// console.log(oldArray); 

// const video = ['youtube', 'vimeo', 'rutube'],
//       blogs = ['wordpress', 'livejournal', 'blogger'],
//       internet = [...video, ...blogs, 'vk', 'facebook'];
// console.log(internet);

// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const num = [2, 5, 7];
// log(...num);

// const q = {
//     one: 1,
//     two: 2
// // }
// // const newObj = {...q};
// // console.log(q);
// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     },

//     showAgeAndLangs ({ age, skills: { languages } }) {
//         const upperLangs = languages.map(l => l.toUpperCase()).join(' ');
//         return `Мне ${age} и я владею языками: ${upperLangs}`;
//     }
// };

// // function showExperience(plan) {
// //   return plan.skills.exp; no destructuring
// // }

// function showExperience({skills: {exp}}) {
//   return `${exp}`
// }

// console.log(showExperience(personalPlanPeter));

// // function showProgrammingLangs(plan) {
// //     const langs = plan.skills.programmingLangs;
// //         const keys = Object.keys(langs);
// //         let result = '';
// //         for (let i = 0; i < keys.length; i++) {
// //             const langName = keys[i];
// //             const progress = langs[langName];
// //             result += 'Язык ' + langName + ' изучен на ' + progress;
// //             if (i < keys.length - 1) {
// //             result += '\n';
// //         }
// //         return result;
// //     }
// // }

// // function showProgrammingLangs({ skills: { programmingLangs } }) {
// //     return Object.entries(programmingLangs)
// //         .map(([lang, progress]) => `Язык ${lang} изучен на ${progress}`)
// //         .join('\n');
// // }

// // personalPlanPeter.showAgeAndLangs(personalPlanPeter);

// // console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));
// // console.log(showProgrammingLangs(personalPlanPeter));

// const courseReact = {
//     title: "React с нуля",
//     info: {
//         students: ['Anna', 'Boris', 'Clara'],
//         modules: {
//             hooks: '80%',
//             routing: '45%',
//             redux: '30%'
//         },
//         duration: '3 months'
//     },
//     showTitleAndStudents({title, info: {students}}) {
//         const lowerNames = students.map(names => names.toLowerCase()).join(', ');
//         return `Курс ${title} Студенти ${lowerNames}`;
//     }
// };

// function showDuration({info: {duration}}) {
//     return duration;
// };

// function showModules({info: {modules}}) {
//     return Object.entries(modules)
//         .map(([skill, progress]) => `Тема ${skill} вивчена на ${progress}`)
//         .join('\n');
// };

// // => 'Курс "React с нуля", студенты: anna, boris, clara'

// console.log(showModules(courseReact));
// console.log(courseReact.showTitleAndStudents(courseReact));

// const library = {
//     name: "City Library",
//     books: [
//         { title: 'JS Basics',    year: 2019, available: true },
//         { title: 'React Deep',   year: 2022, available: false },
//         { title: 'CSS Magic',    year: 2021, available: true },
//         { title: 'Node Guide',   year: 2018, available: true },
//         { title: 'Vue Intro',    year: 2023, available: false },
//     ],
//     showAvailableGuidelines({books}) {
//         const available = books.filter(b => b.available);
//         return `Доситупно книг: ${available.length}`;
//     }
// };

// // function showAvailable({books}) {
// //     return books 
// //         .filter(b => b.available)
// //         .map(b => `${b.title} (${b.year})`)
// //         .join(', ');
// // }

// function showRecent({ books }) {
//     return books 
//         .filter(b => b.year > 2020)
//         .map(b => `${b.title} (${b.year})`)
//         .join(',\n');
// }

// // console.log(showAvailable(library));
// console.log(showRecent(library));
// console.log(library.showAvailableGuidelines(library));

// // const library = {
// //     name: "City Library",
// //     books: [
// //         { title: 'JS Basics',    year: 2019, available: true },
// //         { title: 'React Deep',   year: 2022, available: false },
// //         { title: 'CSS Magic',    year: 2021, available: true },
// //         { title: 'Node Guide',   year: 2018, available: true },
// //         { title: 'Vue Intro',    year: 2023, available: false },
// //     ],
// //     showAvailableGuidelines({books}) {
// //         const available = books.filter(b => b.available);
// //         return `Доситупно книг: ${available.length}`;
// //     }
// // };

// const gym = {
//     name: "FitZone",
//     members: [
//         { name: 'Alice',   age: 28, monthsActive: 14, hasTrainer: true  },
//         { name: 'Ben',     age: 45, monthsActive: 2,  hasTrainer: false },
//         { name: 'Clara',   age: 33, monthsActive: 8,  hasTrainer: true  },
//         { name: 'Daniel',  age: 22, monthsActive: 20, hasTrainer: false },
//         { name: 'Elena',   age: 39, monthsActive: 5,  hasTrainer: true  }
//     ],
//     showWithTrainer({members}) {
//         const withTrainer = members.filter(m => m.hasTrainer).map(m => m.name).join(', ');
//         return `${withTrainer} вже занімаються з тренером`;
//     }
// };

// console.log(gym.showWithTrainer(gym));
const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: true
};

function isOpen(openStatus) {
    let answer = '';
    openStatus ? answer = 'Открыто' : answer = 'Закрыто';

    return answer;
}

console.log(isOpen(restorantData.openNow))

function isAverageLunchPriceTrue(fDish, sDish, average) {
    if (+fDish.price.slice(0, -1) + (+sDish.price.slice(0, -1)) < +average.slice(0, -1)) {
        return 'Цена ниже средней';
    } else {
        return 'Цена выше средней';
    }
}

console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

function transferWaitors(data) {
    const copy = Object.assign({}, data);

    copy.waitors[0] = {name: 'Mike', age: 32};
    return copy;
}

transferWaitors(restorantData);