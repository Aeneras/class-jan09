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

   const totalScore =movies.reduce((accumulator, currentValue) => {if(currentValue.score){return accumulator + currentValue.score} else{
    return accumulator;
   }, 0);
   const averageScoreString =(totalScore/movies.length).toFixed(2);
   return Number(averageScoreString);
   console.log("Iteration 03");
};
console.log(scoresAverage(movies));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
const dramaMoviesScore =(movies) =>{
    if(movies.length === 0) return 0;
    const dramaMovies = movies.filter((movie) =>movie.genre.includes("Drama"));
    const dramaMoviesUsingfilter = movies.filter((movie)) => movie.genre.filter((dramaMovie) => dramaMovie === "Drama"));
);
const averageDramaScores =scoresAverage(dramaMoviesUsingfilter);
return averageDramaScores;
};
console.log(scoresAverage(movies));
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
 const orderByYear(movies)=> 
   const movieArrayCopy= movies.map((movie) =>movie);
   
   movieArrayCopy.sort((movieA,movieB) => {if(movieA >movieB.year) return movieA.year- movieB.year;
    if(movieA <movieB.year) return movieA.year- movieB.year;
else return movieA.title.localeCompare(movieB.title)})
return movieArrayCopy;
console.log(orderByYear(movies));
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = (movies) =>{
    return(movies.map((movie) => movie.title).sort().slice(0,20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
