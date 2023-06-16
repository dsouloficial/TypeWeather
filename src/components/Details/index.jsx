import './styles.css';

import dropLight from '../../assets/svg/drop_light.svg';
import windLight from '../../assets/svg/wind_light.svg';
import sunDimLight from '../../assets/svg/sun_dim_light.svg';
import cloudRainLight from '../../assets/svg/cloud_rain_light.svg';
import thermometerSimpleLight from '../../assets/svg/thermometer_simple_light.svg';

import { WeatherItem } from '../WeatherItem';

export function Details({ data }) {
  return (
    <section className='weather-detail'>
      <h1>Detalhes do clima hoje</h1>

      <div className='weather-items'>
        <WeatherItem
          icon={thermometerSimpleLight}
          title="Sensação térmica"
          value={`${data.feels_like}ºc`}
        />

        <WeatherItem
          icon={cloudRainLight}
          title="Probabilidade de chuva"
          value={`${data.probability}%`}
        />

        <WeatherItem
          icon={windLight}
          title="Velocidade do vento"
          value={`${data.wind_speed} Km/h`}
        />

        <WeatherItem
          icon={dropLight}
          title="Umidade do ar"
          value={`${data.humidity}%`}
        />

        <WeatherItem
          icon={sunDimLight}
          title="Variação da temperatura"
          value={data.temp_kf}
        />
      </div>
    </section>
  )
}