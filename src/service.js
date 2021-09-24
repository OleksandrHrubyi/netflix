import axios from "axios";
// https://my-net.herokuapp.com/api 
axios.defaults.baseURL = "https://api.tvmaze.com";

// const path = "/contacts";
const path = '/shows'

export const signupUser = async (data) => {
  const response = await axios.post("/users/signup", data);
  console.log(response.data, 'response.data');
  return response.data;
};

export const loginUserService = async (data) => {
  const response = await axios.post("/users/login", data);
  return response.data;
};

export const logOutUserService = (data) => {
  return axios.post("/users/logout");
};

export const refreshUserService = (data) => {
  return axios.get("/users/current");
};

export const getContacts = async () => {
  const response = await axios.get(path);
  return response.data;
};

export const uploadContacts = async (contact) => {
  const response = await axios.post(path, contact);
  return response.data;
};

export const removeContacts = (contactId) => {
  return axios.delete(`${path}/${contactId}`);
};

export const getAllEpisod = async () => {
  const response = await axios.get(path);
  return response.data;
}

export const getFilm = async (filmId) => {
  const response = await axios.get(`${path}/${filmId}`)
  return response.data;
}

// export const getOne = async () => {
//   const response = await axios.get(path);
//   return response.data;
// }