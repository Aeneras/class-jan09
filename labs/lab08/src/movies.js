// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?


function getAllDirectors(movies) {
    
    const directorsLlistUnfiltered = movies.map((movie) => movie.director);
   
    let directorsFiltered = directorsLlistUnfiltered.filter((director,index)=>{return directorsLlistUnfiltered.indexOf(director) === index})
       
    return directorsFiltered;
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
    const filteredMovies=movies.filter((movie)=>{
    return (movie.director === "Steven Spielberg" && movie.genre.includes("Drama"));
})
return filteredMovies.length;
}

 // Iteration 3: All scores average - Get the average of all scores with 2 decimals
  function scoresAverage(movies) {
    if(movies.length === 0) return 0;

    const totalScore = movies.reduce((accumulator, currentValue) => {
        if (currentValue.score) {
          return accumulator + currentValue.score;
        } else {
          return accumulator;
        }
      }, 0);
};
const averageScoreString = (totalScore / movies.length).toFixed(2);

  return Number(averageScoreString);
};
console.log("Iteration 03");
console.log(scoresAverage(movies));
console.log("-----------------------------");

// Iteration 4: Drama movies - Get the average of Drama Movies
const dramaMoviesScore =(movies) =>{
    if(movies.length === 0) return 0;
    const dramaMoviesUsingIncludes = movies.filter((movie) =>
    movie.genre.includes("Drama")
  );
  const averageDramaScores = scoresAverage(dramaMoviesUsingIncludes);
  return averageDramaScores;
};
console.log("Iteration 04");
console.log(dramaMoviesScore(movies));
console.log("-----------------------------");
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
 const orderByYear(movies)=> 
   const movieArrayCopy= movies.map((movie) =>movie);
   const movieArrayCopy = movies.map((movie) => {
    return movie;
    movieArrayCopy.sort((movieA, movieB) => {
        if (movieA.year > movieB.year) return movieA.year - movieB.year;
        if (movieA.year < movieB.year) return movieA.year - movieB.year;
        else return movieA.title.localeCompare(movieB.title);
      });
      return movieArrayCopy;
    };
    const orderAlphabetically = (movies) => {
        return movies
          .map((movie) => movie.title) 
          .sort() 
          .slice(0, 20); 
      };

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
console.table(orderAlphabetically(movies));
return movies
.map((movie) => movie.title) 
.sort() 
.slice(0, 20); 
};

console.table(orderAlphabetically(movies));


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
const convertHours = (hourString) => {
    let calculateHour = hourString.split("h");
    return calculateHour[0] * 60;
  };
  const convertMinutes = (minuteString) => {
    let calculateMinutes = minuteString.split("min");
    return Number(calculateMinutes[0]);
  };
  const convertDuration = (duration) => {
    let timePieces = duration.split(" ");
  
    let minutes = timePieces.reduce((sum, onePiece) => {
      if (onePiece.includes("h")) {
        return sum + convertHours(onePiece);
      }
      return sum + convertMinutes(onePiece);
    }, 0);
  
    return minutes;
  };
  const turnHoursToMinutes = (movies) => {
    let newCentArray = movies.map((movie) => {
      let newMovie = {};
      newMovie.title = movie.title;
      newMovie.year = movie.year;
      newMovie.director = movie.director;
      newMovie.duration = convertDuration(movie.duration);
      newMovie.genre = movie.genre;
      newMovie.rate = movie.rate;
  
      return newMovie;
    });
  
    return newCentArray;
  };
  console.table(turnHoursToMinutes(movies));

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
const bestYearAvg = (movies) => {
    if (!movies.length) return null;
  
    let masterObject = {};
  
    movies.forEach((movie) => {
      if (!masterObject[movie.year]) {
        masterObject[movie.year] = [movie];
      } else {
        masterObject[movie.year].push(movie);
      }
    });
  
    let highest = 0;
    let theActualYear;
    for (let theYear in masterObject) {
      if (scoresAverage(masterObject[theYear]) > highest) {
        highest = scoresAverage(masterObject[theYear]);
        theActualYear = theYear;
      }
    }
    return `The best year was ${theActualYear} with an average score of ${highest}`;
  };
  console.log(bestYearAvg(movies));
