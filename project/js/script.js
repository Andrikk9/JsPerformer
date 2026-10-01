/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};


console.log(movieDB.movies);

const adv = document.querySelectorAll('.promo__adv img'), //1
      poster = document.querySelector('.promo__bg'), //3
      genre = poster.querySelector('.promo__genre'),
      movieList = document.querySelector('.promo__interactive-list'); //querySelectorAll => querySelector


adv.forEach(item => { //1
    item.remove();
});

// adv.forEach(function (item) { alternatively for 1
//     item.remove();
// });
genre.textContent = 'Драма'; //2

poster.style.backgroundImage = 'url("img/bg.jpg")'; //3

movieList.innerHTML = ""; //4
movieDB.movies.sort(); //4

// console.log(poster.innerHTML);

movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>
    `;
});

// const theOrderedMovies = document.querySelector('.promo__interactive-list'); //4

// function toBeSorted(movies) { 
//     theOrderedMovies.innerHTML = '';
//     movies.forEach(movie => {
//         const li = document.createElement('li');
//         li.className = 'promo__interactive-item';
//         li.textContent = movie;

//         const del = document.createElement('div');
//         del.className = 'delete';
//         li.appendChild(del);

//         theOrderedMovies.appendChild(li);
//     });
// }

// toBeSorted(movieDB.movies);