//DOM references
const inputButton = document.querySelector(".input-group-btn");
const addButton = document.querySelector(".add-button");
const movie = document.querySelector(".movie");

//creates HTML elements for searched movies
const renderMovies = (movieArray) => {
  movieArray.map((currentMovie) => {
    let movieInfo = `<div>
            <img class="movie-poster" src="${currentMovie.Poster}" />
            <div class="title">${currentMovie.Title}</div>
            <div class="release-date">${currentMovie.Year}</div>
            <button class="add-button" dataimdbid="${currentMovie.imdbID}">Add</button>
          </div>`;
    movie.innerHTML += movieInfo;
  });
};

//input button fetches data from API and calls renderMovies()
let searchedMovies = [];
inputButton.addEventListener("click", function (event) {
  event.preventDefault();
  let searchString = document.querySelector(".search-bar").value;
  let urlEncodedSearchString = encodeURIComponent(searchString);
  getMovieData();
  async function getMovieData() {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=59354c85&s=${searchString}`
    );
    const result = await response.json().then((data) => {
      searchedMovies = data.Search;
      renderMovies(data.Search);
    });
  }
});

//add button stores the selected movie's imbdID#, and calls saveToWatchList()
document.addEventListener("click", function (event) {
  if (event.target.classList.contains("add-button")) {
    movieID = event.target.getAttribute("dataimdbid"); // targets 'add-button' element, and not it's parent element
    saveToWatchList(movieID);
  }
});

//let watchlist = JSON.parse(localStorage.getItem("watchlist") || "[]");
// finds movie objects containing the stored imbdID#, adds them to 'watchlist' array, converts them to JSON, and adds them to localStorage
let watchlist = [];
const saveToWatchList = (movieID) => {
  let movie = searchedMovies.find((currentMovie) => {
    return currentMovie.imdbID == movieID; //why is it 'currentMovie.imdbID' and not something like 'currentMovie'?
  });
  let presentOnWatchlist = watchlist.some((addedMovies) => {
    return addedMovies.imdbID == movieID;
  }); // 'true' if present in 'watchlist array
  if (presentOnWatchlist) {
    console.log("Film is already in your watchlist!");
  } else {
    watchlist.push(movie);
  }
  let watchlistJSON = JSON.stringify(watchlist);
  console.log(watchlist);
  localStorage.setItem("watchlist", watchlistJSON);
  console.log(localStorage.watchlist);
};
