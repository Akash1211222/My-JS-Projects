const API_KEY = "api_key=caeb20d2dbf4601fb17e70d138f2e463";
const BASE_URL = "https://api.themoviedb.org/3";
const API_URL = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500"

const mainContentContainer = document.getElementById("mainContentContainer")

function getMovies(url) {
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            showMovies(data.results)
        });
}

getMovies(API_URL);

function showMovies(movies) {
    console.log(movies);
    movies.map((movie) => {
        console.log(movie)
        const{poster_path, title,vote_average,overview} = movie
        const movieCard = document.createElement("div")
        movieCard.classList.add("movie")
        movieCard.innerHTML = `
                    <img src="${IMAGE_BASE_URL + poster_path}" alt="" />
                    <div class="movieInfo">
                      <h3 class="movieName">${title}</h3>
                      <p class="movieRating">${vote_average}</p>

                    <div class="movieDescription">
                       ${overview}
                  </div>`
                  mainContentContainer.appendChild(movieCard)
    })
}

