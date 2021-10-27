" use strict ";

 let numberOfFilms;
 function start() {
    numberOfFilms = +prompt ( ` Сколько фильмов вы уже посмотрели?`, `` );
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
      numberOfFilms = +prompt ( ` Сколько фильмов вы уже посмотрели?`, `` );
    }
 }

 start();

 let personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
 };

 function detectPesonalLevel() {
      if (personalMovieDB.count<10) {
        alert (`Просмотренно довольно мало фильмов`);
      } else if ( personalMovieDB.count>=10 && personalMovieDB.count <=30 ) {
          alert (`Вы классический зритель`);
          } else if (personalMovieDB.count>30) {
            alert (`Вы киноман`);
            } else {
              alert (`Произошла ошибка`);
              }
    }

 detectPesonalLevel();
 
 function rememberMyFilms() {
      for (let i=0; i<2; i++) {
        const a = prompt (`Один из последних просмотренных фильмов?`, ''),
              b = prompt (`На сколько оцените его?`, '');
        
        if (a != '' && b != '' &&  a!=null &&  b!=null && a.length < 50 ) {
          personalMovieDB.movies[a] = b;
        } else {
            alert('Error');
            i--;
        }
      }
   }

 rememberMyFilms();

 function showMyDB() {
   if (personalMovieDB.privat==false) {
     alert(1);
   }
 }

 showMyDB();

 function writeYourGenres() {
  for (let i=1; i<=3; i++) {
    const genre = prompt (`Ваш любимый жанр под номером ${i}.`, '');
        personalMovieDB.genres[i-1] = genre;
      }   
    }

writeYourGenres();

console.log (personalMovieDB);
 
 

