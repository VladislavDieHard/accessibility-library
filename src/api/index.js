import axios from 'axios';

console.log(import.meta.env);

export const api = axios.create({
    baseURL: import.meta.env['API_URL'] || 'http://api.infomania.ru/api/',
    withCredentials: true,
});

api.interceptors.response.use(response => {
    const { data } = response;
    return data;
});
