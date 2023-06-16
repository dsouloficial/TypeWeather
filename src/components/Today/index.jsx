import './styles.css';
import dayjs from 'dayjs';

import { Logo } from '../Logo';
import { SelectCity } from '../SelectCity';
import { isDayTime } from '../../utils/isDayTime';

export function Today({ city, state, weather, onSearchValue }) {
  const today = dayjs(new Date()).format('dddd, DD [de] MMMM [de] YYYY');
  const isDay = isDayTime();

  const bgImg = isDay ? weather.details.bg_day : weather.details.bg_night;
  const icon = isDay ? weather.details?.icon_day : weather.details?.icon_night;

  return (
    <section className='today'>
      <form>
        <Logo />
        <SelectCity onSelect={onSearchValue} />
      </form>

      <div className='today-details' style={{ backgroundImage: `url(${bgImg})` }}>
        <header>
          <h3>
            {city && city}
            {city && state && ', '}
            {state && state}
          </h3>
          <p>{today}</p>
        </header>

        <footer>
          <div>
            <h1>{weather?.temp}</h1>
            <p>
              {weather?.temp_min} / {weather?.temp_max} <span>&#8226;</span> {weather.description}
            </p>
          </div>

          <img src={icon} alt="Tempo" />
        </footer>
      </div>
    </section>
  )
}