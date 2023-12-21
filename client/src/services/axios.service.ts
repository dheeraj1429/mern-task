import axios from 'axios';

export const axiosCountryInstance = axios.create({
   baseURL: 'https://api.countrystatecity.in/v1',
   headers: {
      'X-CSCAPI-KEY': process.env.REACT_APP_API_KEY,
   },
});

export const axiosInstance = axios.create({
   baseURL: 'http://localhost:9000',
});
