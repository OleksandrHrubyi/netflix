import axios from "axios";
// https://my-net.herokuapp.com/api 
// http://localhost:3000/api

const signup = "https://my-net.herokuapp.com/api"
const main = "https://api.tvmaze.com"



export const signupUser = async (data) => {
  const response = await axios.post(`${signup}/users/signup`, data, {
    headers: {
      Authorization: null
    }
  });
  return response.data;
};

export const loginUserService = async (data) => {
  const response = await axios.post(`${signup}/users/login`, data, {
    headers: {
      Authorization: null
    }
  })
  return response.data;
};

export const logOutUserService = (data) => {
  return axios.post(`${signup}/users/logout`);
};

export const refreshUserService = (data) => {
  return axios.get(`${signup}/users/current`);
};

export const addFavorite = async (filmId) => {
  const response = axios.patch(`${signup}/shows/${filmId}/favorite`, filmId)
  return response
}

export const getAll = () => {
  return fetch(`${main}/shows`).then(response => response.json()).then(result => {
    return result
  })
}

export const getAllEpisod = (page) => {
  return fetch(`${main}/shows?page=${page}`).then(response => response.json()).then(result => {
    return result
  })
}

export const getFilm = async (filmId) => {
  return fetch(`https://api.tvmaze.com/shows/${filmId}`).then(response => response.json()).then(result => {
    return result
  })
}

export const searchFilms = async (film) => {
  return fetch(`https://api.tvmaze.com/search/shows?q=${film}`).then(response => response.json()).then(result => {
    return result
  })
}
