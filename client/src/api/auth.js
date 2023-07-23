import  axios  from "./axios.js";


// const API = 'http://localhost:4000/api';


export const  registerRequest =  user => axios.post('/register', user);
   
export const loginRequest = user => axios.post('/login', user);

export const logoutRequest = () => axios.get('/logout');

export const getTasksRequest = () => axios.get('/tasks');



export const verifyTokenRequest = () => axios.get('/verify');