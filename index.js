// document.addEventListener("DOMContentLoaded", function () {

// });

var movieData = [
  {
    Title: "The Dark Knight",
    Year: "2008",
    imdbID: "tt0468569",
    Type: "movie",
    Poster:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
  },
  {
    Title: "The Dark Knight Rises",
    Year: "2012",
    imdbID: "tt1345836",
    Type: "movie",
    Poster:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_SX300.jpg",
  },
  {
    Title: "Thor: The Dark World",
    Year: "2013",
    imdbID: "tt1981115",
    Type: "movie",
    Poster:
      "https://ia.media-imdb.com/images/M/MV5BMTQyNzAwOTUxOF5BMl5BanBnXkFtZTcwMTE0OTc5OQ@@._V1_SX300.jpg",
  },
  {
    Title: "Transformers: Dark of the Moon",
    Year: "2011",
    imdbID: "tt1399103",
    Type: "movie",
    Poster:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkwOTY0MTc1NV5BMl5BanBnXkFtZTcwMDQwNjA2NQ@@._V1_SX300.jpg",
  },
  {
    Title: "Zero Dark Thirty",
    Year: "2012",
    imdbID: "tt1790885",
    Type: "movie",
    Poster:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ4OTUyNzcwN15BMl5BanBnXkFtZTcwMTQ1NDE3OA@@._V1_SX300.jpg",
  },
  {
    Title: "Dark Shadows",
    Year: "2012",
    imdbID: "tt1077368",
    Type: "movie",
    Poster:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjc0NzAyMzI1MF5BMl5BanBnXkFtZTcwMTE0NDQ1Nw@@._V1_SX300.jpg",
  },
  {
    Title: "Dark City",
    Year: "1998",
    imdbID: "tt0118929",
    Type: "movie",
    Poster:
      "https://ia.media-imdb.com/images/M/MV5BMGExOGExM2UtNWM5ZS00OWEzLTllNzYtM2NlMTJlYjBlZTJkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  },
  {
    Title: "Dancer in the Dark",
    Year: "2000",
    imdbID: "tt0168629",
    Type: "movie",
    Poster:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNDVkYWMxNWEtNjc2MC00OGI5LWI3NmUtYWUwNDQyOTc3YmY5XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  },
  {
    Title: "The Dark Tower",
    Year: "2017",
    imdbID: "tt1648190",
    Type: "movie",
    Poster:
      "https://ia.media-imdb.com/images/M/MV5BMTU3MjUwMzQ3MF5BMl5BanBnXkFtZTgwMjcwNjkxMjI@._V1_SX300.jpg",
  },
  {
    Title: "Dark Skies",
    Year: "2013",
    imdbID: "tt2387433",
    Type: "movie",
    Poster:
      "https://ia.media-imdb.com/images/M/MV5BMTcxNDE1OTgyOF5BMl5BanBnXkFtZTcwMTEyMzMxOQ@@._V1_SX300.jpg",
  },
];

////////////
const inputButton = document.querySelector(".input-group-btn");
const addButton = document.querySelector(".add-button");
const movie = document.querySelector(".movie");

//creates a set of html elements for each movie (using .map()) and displays them as innerHTML
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

//input button calls renderMovies passing the movieData array as an argument
inputButton.addEventListener("click", function (event) {
  event.preventDefault();
  let searchString = document.getElementById("search-bar").value;
  let urlEncodedSearchString = encodeURIComponent(searchString);
  `www.omdbapi.com/?apikey=59354c85&s=${searchString}`;

  http: renderMovies(movieData);
});

//add button (add to watchlist) event listener, obtains the IMDB id# and calls saveToWatchList() passing it as an argument
document.addEventListener("click", function (event) {
  if (event.target.classList.contains("add-button")) {
    //ensures that only the add-button element is targeted (i.e. not the element it resides within)
    movieID = event.target.getAttribute("dataimdbid");
    saveToWatchList(movieID);
  }
});

//saves

let watchlist = []; // contains movies
//let watchlist = JSON.parse(localStorage.getItem("watchlist") || "[]");

const saveToWatchList = (movieID) => {
  console.log(movieID); //i.e. tt0468569
  let movie = movieData.find((currentMovie) => {
    return currentMovie.imdbID == movieID; //why is it 'currentMovie.imdbID' and not something like 'currentMovie'?
  });
  let presentOnWatchlist = watchlist.some((addedMovies) => {
    return addedMovies.imdbID == movieID;
  }); // present in watchlist = true
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

////////////////
//saves
/*
localStorage.clear();
let watchlist = []; // contains movies
const saveToWatchList = (movieID) => {
  console.log(movieID); // tt0468569
  let movie = movieData.find((currentMovie) => {
    return currentMovie.imdbID == movieID; //why is it 'currentMovie.imdbID' and not something like 'currentMovie'?
  });
  watchlist.push(movie);
  console.log(movie);
  console.log(watchlist);
  console.log(localStorage); // nothing at this point
  //   const test = watchlist.find(function (currentMovie) {
  //   return currentMovie.imdbID == movieID;
  //  });
  watchlist.some((addedMovies) => {
    return addedMovies.imdbID == movieID;
  }); //
  if (watchlist == null) {
    watchlist = [];
    console.log("test");
  } else if (test !== undefined) {
    alert("Already on Watchlist");
  } else {
    watchlist.push(movie);
    watchlistJSON = JSON.stringify(watchlist);
    localStorage.setItem("watchlist", watchlistJSON);
  }
};
*/
// let watchlistJSON = localStorage.getItem("watchlist");
// let watchlist = JSON.parse(watchlistJSON);

// for (const [key, value] of Object.entries(localStorage)) {
//   console.log(`${key}: ${value}`);
// }
// if (watchlist === null) {
//   watchlist = [];
// }
//
// watchlistJSON = JSON.stringify(watchlist);
// localStorage.setItem("watchlist", watchlistJSON);

/*
const saveToWatchList = (movieID) => {
  console.log(movieID);
  localStorage.setItem("watchlist", movieID);
  localStorage.setItem("image", "movie poster");
  for (const [key, value] of Object.entries(localStorage)) {
    console.log(`${key}: ${value}`);
  }
  console.log(localStorage);


  // let movie = movieData.find((currentMovie) => {
  //   currentMovie.imdbID == movieID;

  // localStorage.setItem(movieID);

  // });
  // let watchlistJSON = localStorage.getItem("watchlist");
  // let watchlist = JSON.parse(watchlistJSON);
  // if (watchlist == null) {
  //   watchlist = [];
  // }
  // watchlist.push(movie);
  // watchlistJSON = JSON.stringify(watchlist);
};

*/
///////////

// const movies = {
//         title: "Batman",
//         imdb: 4467,
//         income: "4.8 million",
//       };
//       let inputToJSON = JSON.stringify(movies);
//       console.log(inputToJSON);

//       let javascriptObjectFromJSON = JSON.parse(inputToJSON);
//       console.log(javascriptObjectFromJSON);

/*
michaels code
const saveToWatchList = (movieID) => {
  const movie = movieData.find(function (currentMovie) {
    return currentMovie.imdbID == movieID;
  });
  let watchlistJSON = localStorage.getItem("watchlist");
  let watchlist = JSON.parse(watchlistJSON);
  const test = watchlist.find(function (currentMovie) {
    return currentMovie.imdbID === movieID;
  });
  if (watchlist == null) {
    watchlist = [];
    console.log("test");
  } else if (test !== undefined) {
    alert("Already on Watchlist");
  } else {
    watchlist.push(movie);
    watchlistJSON = JSON.stringify(watchlist);
    localStorage.setItem("watchlist", watchlistJSON);
  }
};
*/
