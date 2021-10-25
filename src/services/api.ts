import axios from 'axios'
 
const api = axios.create({
    baseURL: 'https://alunosbackend.herokuapp.com'
})
 
export default api;
