import axios from 'axios';

// Sirve para llamar un endpoint, en este caso inicia con http://localhost:8080
export default axios.create({
    baseURL:'http://localhost:8080',
});