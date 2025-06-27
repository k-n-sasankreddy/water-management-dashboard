import axios from 'axios';

/*
This file:

Creates a reusable Axios instance
Sets the base URL to your Spring Boot backend
Ensures all requests use application/json headers
 */
const api = axios.create({
    baseURL: 'http://localhost:8070/v1/api/wmgmt',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;
