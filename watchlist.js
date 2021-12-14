const movie = document.querySelector(".movie");

//retrieves movies from localStorage and converts them to javascript objects
let watchlistJSON = localStorage.getItem("watchlist");
let watchlist = JSON.parse(watchlistJSON);

//creates HTML elements for movies added to localStorage
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
