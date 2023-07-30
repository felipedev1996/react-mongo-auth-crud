import axios from './axios';


export const getTasksRequest = () => axios.get('/tasks');
export const getTaskRequest = (id) => axios.get(`/task/${id}`);
export const createTaskRequest = (task) => axios.post('/task',task);
export const updateTaskRequest = (id,task) => axios.put(`/tasks/${id}`,task);
export const deleteTaskRequest = (id) => axios.delete(`/tasks/${id}`);

