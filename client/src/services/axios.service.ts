import axios from 'axios';

export const axiosCountryInstance = axios.create({
   baseURL: 'https://countriesnow.space/api/v0.1',
});

export const axiosInstance = axios.create({
   baseURL: 'http://localhost:9000',
});
