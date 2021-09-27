import axios from "axios";
// https://my-net.herokuapp.com/api 


let signup = "http://localhost:3000/api"
let main = "http://api.tvmaze.com"



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

// export const getContacts = async (page) => {
//   const response = await axios.get(`${path}/${page}`);
//   return response.data;
// };

// export const uploadContacts = async (contact) => {
//   const response = await axios.post(path, contact);
//   return response.data;
// };

// export const removeContacts = (contactId) => {
//   return axios.delete(`${path}/${contactId}`);
// };

export const getAllEpisod = (page) => {
  return fetch(`${main}/shows?page=${page}`).then(response => response.json()).then(result => {
    return result
  })
}

export const getFilm = async (filmId) => {
  return fetch(`http://api.tvmaze.com/shows/${filmId}`).then(response => response.json()).then(result => {
    return result
  })
}

// export const getOne = async () => {
//   const response = await axios.get(path);
//   return response.data;
// }