import axios from 'axios';

export const api = axios.create({
    baseURL: import.meta.env['API_URL'] || 'http://api.infomania.ru/api/',
    withCredentials: true,
});

api.interceptors.response.use(response => {
    const { data } = response;
    return data;
});
