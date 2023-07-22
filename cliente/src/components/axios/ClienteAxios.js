import axios from 'axios';

const clienteAxios = axios.create({
    headers : {'Content-Type': 'multipart/form-data'},
    baseURL : 'https://api-productos-9hbc.onrender.com/'
});

export default clienteAxios;