import './styles.css';
import { useEffect, useState } from 'react';

import { Input } from '../Input';
import { searchCityByName } from '../../services/cities/getCitiesService';

export function SelectCity({ onSelect }) {
  const [search, setSearch] = useState('');
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function getCities(city) {
    setIsLoading(true);

    const response = await searchCityByName(city);

    setCities(response);
    setIsLoading(false);
  }

  useEffect(() => {
    if (search.trim().length === 0) {
      return;
    }

    const debounce = setTimeout(() => getCities(search), 500);
    return () => clearInterval(debounce);
  }, [search]);

  return (
    <div className="select">
      <Input
        isLoading={isLoading}
        placeholder="Buscar local"
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className='select-list'>
        {
          cities.map((item) => (
            <button
              type="button"
              key={item.latitude}
              onClick={() => onSelect(item)}
            >
              <p>
                {item.city && item.city}
                {item.city && item.state && ', '}
                {item.state && item.state}
              </p>
            </button>
          ))
        }
      </div>
    </div >
  )
}