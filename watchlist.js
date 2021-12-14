//creates a set of html elements for each movie (using .map()) and displays them as innerHTML

const movie = document.querySelector(".movie");

let watchlistJSON = localStorage.getItem("watchlist");
let watchlist = JSON.parse(watchlistJSON);
console.log(watchlist);

const renderMovies = (movieArray) => {
  watchlist.map((currentMovie) => {
    let movieInfo = `<div>
            <img class="movie-poster" src="${currentMovie.Poster}" />
            <div class="title">${currentMovie.Title}</div>
            <div class="release-date">${currentMovie.Year}</div>
            <button class="add-button" dataimdbid="${currentMovie.imdbID}">Add</button>
          </div>`;
    movie.innerHTML += movieInfo;
  });
};

renderMovies(watchlist);
