import axios from 'axios';

const api = axios.create({

  baseURL: 'http://localhost:4100'
});

export default api;