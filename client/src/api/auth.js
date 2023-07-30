import axios from "./axios.js";

// const API = 'http://localhost:4000/api';

export const registerRequest = (user) => axios.post("/register", user);

export const loginRequest = (user) => axios.post("/login", user);
export const logoutRequest = (user) => axios.post("/logout");

// export const logoutRequest = () => axios.get("/logout");

export const getTasksRequest = () => axios.get("/tasks");

export const verifyTokenRequest = () => axios.get("/verify");


// no esta implementada esta funcion en la aplicacion solo queda de ejemplo 
// export const logout = () => axios.get("/logout");
