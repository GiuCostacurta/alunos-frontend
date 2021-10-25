import axios from 'axios'
 
const api = axios.create({
    baseURL: 'https://alunosbackend.herokuapp.com/alunos'
})
 
export default api;
