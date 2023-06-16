import dayjs from "dayjs";

import { getNextDays } from "./getNextDays";
import { weatherIcons } from "./weatherIcons";

export function formatNextDays(data) {
  const days = getNextDays();
  const daysAdded = [];
  const nextDays = [];

  data.list.forEach((item) => {
    const day = dayjs(new Date(item.dt_txt)).format('DD/MM');

    if (days.includes(day) && !daysAdded.includes(day)) {
      daysAdded.push(day);

      const status = item.weather[0].main;
      const details = weatherIcons[status];

      nextDays.push({
        day: dayjs(new Date(item.dt_txt)).format('ddd'),
        min: `${Math.ceil(item.main.temp_min)}ºc`,
        max: `${Math.ceil(item.main.temp_max)}ºc`,
        weather: item.weather[0].description,
        icon: details.icon_day
      });
    }
  });

  return nextDays;
}