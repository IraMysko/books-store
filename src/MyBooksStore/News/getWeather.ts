import axios from 'axios';

const API_KEY = '2eed9d4f9832261fd52ac267639112c1';
const API_URL = 'http://api.openweathermap.org';

const instanceAxios = axios.create({});

export const getWeatherInfo = async (query: any) => {
    const { data } = await instanceAxios({
        method: 'get',
        url: '/data/2.5/weather',
        baseURL: API_URL,
        params: {
            q: query,
            units: 'metric',
            appid: API_KEY,
        }
    });
    return data;
}
