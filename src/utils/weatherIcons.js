import bgCloudyDay from '../assets/img/bg_cloudy_day.png';
import bgCloudyNight from '../assets/img/bg_cloudy_night.png';
import iconCloudyDay from '../assets/svg/cloudy_day.svg';
import iconCloudyNight from '../assets/svg/cloudy_night.svg';

import iconRainDay from '../assets/svg/rain_moment_day.svg';
import bgRainDay from '../assets/img/bg_rain_day.png';
import bgRainNight from '../assets/img/bg_rain_night.png';

import iconClearDay from '../assets/svg/clear_day.svg';
import iconClearNight from '../assets/svg/clear_night.svg';
import bgClearDay from '../assets/img/bg_clear_day.png';
import bgClearNight from '../assets/img/bg_clear_night.png';

export const weatherIcons = {
  Clouds: {
    name: "Nuvens",
    bg_day: bgCloudyDay,
    bg_night: bgCloudyNight,
    icon_day: iconCloudyDay,
    icon_night: iconCloudyNight,
  },
  Rain: {
    name: "Chuva",
    bg_day: bgRainDay,
    bg_night: bgRainNight,
    icon_day: iconRainDay,
    icon_night: iconRainDay,
  },
  Clear: {
    name: "Limpo",
    bg_day: bgClearDay,
    bg_night: bgClearNight,
    icon_day: iconClearDay,
    icon_night: iconClearNight,
  },
}