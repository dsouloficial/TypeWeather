import dayjs from "dayjs";
import { apiWeather } from "./apiWeather";
import { getNextDays } from "../../utils/getNextDays";
import { weatherIcons } from "../../utils/weatherIcons";

const { VITE_WEATHER_APP_API } = import.meta.env;

export async function searchCityWeather({ latitude, longitude }) {
  const { data } = await apiWeather.get(`/forecast?lat=${latitude}&lon=${longitude}&units=metric&lang=pt_br&appid=${VITE_WEATHER_APP_API}`);
  const { main, weather, wind, pop } = data.list[0];

  const today = {
    weather: {
      temp: `${Math.ceil(main.temp)}ºc`,
      temp_min: `${Math.floor(main.temp_min)}ºc`,
      temp_max: `${Math.ceil(main.temp_max)}ºc`,
      description: weather[0].description,
      details: weatherIcons[weather[0].main],
    },
    details: {
      feels_like: `${Math.floor(main.feels_like)}ºc`,
      probability: `${pop * 100}%`,
      wind_speed: `${wind.speed} Km/h`,
      humidity: `${main.humidity}%`,
      temp_kf: `${Math.floor(main.temp_kf)}`
    }
  }

  const days = getNextDays();
  const daysAdded = [];
  const nextDays = [];

  data.list.forEach((item) => {
    const day = dayjs(new Date(item.dt_txt)).format('DD/MM');

    if (days.includes(day) && !daysAdded.includes(day)) {
      daysAdded.push(day);

      const status = item.weather[0].main;

      const details = weatherIcons[status ?? 'Clouds'];

      nextDays.push({
        day: dayjs(new Date(item.dt_txt)).format('ddd'),
        min: `${Math.floor(item.main.temp_min)}ºc`,
        max: `${Math.ceil(item.main.temp_max)}ºc`,
        weather: item.weather[0].description,
        icon: details.icon_day
      });
    }
  });

  return { today, nextDays }
}