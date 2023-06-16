import './styles.css';

import { useEffect, useState } from 'react';
import { searchCityWeather } from '../../services/weather/getWeatherService';

import { Today } from '../../components/Today';
import { Details } from '../../components/Details';
import { Loading } from '../../components/Loading';
import { NextDays } from '../../components/NextDays';

export function Dashboard() {
  const [weather, setWeather] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [citySearch, setCitySearch] = useState(JSON.parse(localStorage.getItem('@typewheather:city')));

  useEffect(() => {
    setIsLoading(true);

    const { latitude, longitude } = citySearch;

    searchCityWeather({ latitude, longitude })
      .then((response) => setWeather(response))
      .finally(() => setIsLoading(false));
  }, [citySearch]);

  if (isLoading) {
    return <Loading />
  }

  return (
    <div className='dashboard'>
      <Today
        city={citySearch.city}
        state={citySearch.state}
        weather={weather.today.weather}
        onSearchValue={setCitySearch}
      />

      <Details data={weather.today.details} />
      <NextDays data={weather.nextDays} />
    </div>
  )
}