const KEY = "ded316cd594a4a167b1b831fae420aff";
const BASE_URL = "https://api.tvmaze.com/v1/";

function fetchTrendMovies() {
    return fetch(`${BASE_URL}/3/trending/movie/week?api_key=${KEY}`).then(
        (response) => {
            if (response.ok) {
                return response.json();
            }
            return Promise.reject(new Error("Something go wrong, try again"));
        }
    );
}

function fetchMoviesDetails(id) {
    return fetch(`${BASE_URL}/3/movie/${id}?api_key=${KEY}`).then((response) => {
        if (response.ok) {
            return response.json();
        }
        return Promise.reject(new Error("Something go wrong, try again"));
    });
}

function fetchMoviesCredits(id) {
    return fetch(`${BASE_URL}/3/movie/${id}/credits?api_key=${KEY}`).then(
        (response) => {
            if (response.ok) {
                return response.json();
            }
            return Promise.reject(new Error("Something go wrong, try again"));
        }
    );
}

function fetchMoviesReviews(id) {
    return fetch(`${BASE_URL}/3/movie/${id}/reviews?api_key=${KEY}`).then(
        (response) => {
            if (response.ok) {
                return response.json();
            }
            return Promise.reject(new Error("Something go wrong, try again"));
        }
    );
}

function fetchMoviesFind(searchQuery) {
    return fetch(
        `${BASE_URL}/3/search/movie?api_key=${KEY}&query=${searchQuery}`
    ).then((response) => {
        if (response.ok) {
            return response.json();
        }
        return Promise.reject(new Error("Something go wrong, try again"));
    });
}

export {
    fetchTrendMovies,
    fetchMoviesDetails,
    BASE_URL,
    fetchMoviesCredits,
    fetchMoviesReviews,
    fetchMoviesFind,
};