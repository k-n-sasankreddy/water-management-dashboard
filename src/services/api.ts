import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8070/v1/api/reports', // Updated base URL to match your endpoints
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;

