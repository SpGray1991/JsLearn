 /* 1 */ 
 "use strict";

 let numberOfFilms = prompt (`Сколько фильмов вы уже посмотрели?`, ``);


 /* 2 */
 let personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
 
 }
 
 
 /* 3 */
 let c = prompt (`Один из последних просмотренных фильмов?`, ``);
 let d = prompt (`На сколько оцените его?`, ``);
 let a = prompt (`Один из последних просмотренных фильмов?`, ``);
 let b = prompt (`На сколько оцените его?`, ``);
 
 personalMovieDB.movies[a] = b;
 personalMovieDB.movies[c] = d;
   
 
 
 alert (personalMovieDB.movies)