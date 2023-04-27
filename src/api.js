import axios from 'axios';

const API_URL = 'https://your-azure-function-url';

const api = axios.create({
    baseURL: API_URL,
});

export default api;
