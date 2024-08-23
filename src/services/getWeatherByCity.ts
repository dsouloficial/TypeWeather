import dayjs from "dayjs";

import { api } from "./api";
import { getNextDays } from "../utils/getNextDays";
import { NextDaysItemProps } from "../components/NextDaysItem";
import { weatherIcons, WeatherIconsKeysProps } from "../utils/weatherIcons";

interface GetWeatherByCityProps {
  latitude:number;
  longitude: number;
}

export interface WeatherAPIResponseProps {
  list: {
    dt_txt: string;
    pop: number;
    main:{
     temp: number;
     temp_min: number;
     temp_max: number;
     feels_like: number;
     humidity: number;
     temp_kf: number;
    }
    wind: {
      speed: number;
    };
    weather:{
      main:WeatherIconsKeysProps;
      description: string;
    }[];
  }[];
}

export interface WeatherResponseProps {
  temp: number;
  temp_min:number;
  temp_max:number;
  description: string;
  details: typeof weatherIcons['Clear'];
}

export interface WeatherDetailsResponseProps {
  feels_like: number;
  probability: number;
  wind_speed: number;
  humidity: number;
  temp_kf: number;
}

interface TodayProps {
  weather: WeatherResponseProps;
  details: WeatherDetailsResponseProps;
}

export interface GetWeatherByCityResponseProps {
   today: TodayProps;
   nextDays: NextDaysItemProps[];
}

export async function getWeatherByCity({ latitude, longitude }: GetWeatherByCityProps):Promise <GetWeatherByCityResponseProps> {
  const { data } = await api.get<WeatherAPIResponseProps>(`/forecast?lat=${latitude}&lon=${longitude}`);

  const { main, weather, wind, pop } = data.list[0];

  const today: TodayProps = {
    weather: {
      temp: Math.ceil(main.temp),
      temp_min: Math.floor(main.temp_min),
      temp_max: Math.ceil(main.temp_max),
      description: weather[0].description,
      details: weatherIcons[weather[0].main],
    },
    details: {
      feels_like: Math.floor(main.feels_like),
      probability: pop * 100,
      wind_speed: wind.speed,
      humidity: main.humidity,
      temp_kf: Math.floor(main.temp_kf)
    }
  }

  const days = getNextDays();
  const daysAdded: string[] = [];
  const nextDays: NextDaysItemProps[] = [];

  data.list.forEach((item) => {
    const day = dayjs(new Date(item.dt_txt)).format('DD/MM');

    if (days.includes(day) && !daysAdded.includes(day)) {
      daysAdded.push(day);

      const status = item.weather[0].main;

      const details = weatherIcons[status ?? 'Clouds'];

      nextDays.push({
        day: dayjs(new Date(item.dt_txt)).format('ddd'),
        min: Math.floor(item.main.temp_min),
        max: Math.ceil(item.main.temp_max),
        weather: item.weather[0].description,
        icon: details.icon_day
      });
    }
  });

  return { today, nextDays }
}