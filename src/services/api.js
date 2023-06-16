import axios from "axios";

const { VITE_WEATHER_APP_API } = import.meta.env;

export const api = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
  params: {
    lang: 'pt_br',
    units: 'metric',
    appid: VITE_WEATHER_APP_API,
  },
});