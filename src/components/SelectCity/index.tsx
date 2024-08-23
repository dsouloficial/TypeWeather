import './styles.css';
import { useEffect, useState } from 'react';

import { Input } from '../Input';
import { getCityByNameService,CityProps } from '../../services/getCityByNameService';
import { Cipher } from 'crypto';

interface Props {
  onSelect: (item: CityProps) => void;
}

export function SelectCity({ onSelect }: Props) {
  const [city, setCity] = useState<CityProps[]>([]);
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function getCities(name: string) {
    setIsLoading(true);

    const response = await getCityByNameService(name);

    setCity(response);
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
          city.length > 0 &&
          city.map((item) => (
            <button type="button" key={item.id } onClick={() => onSelect(item)}>
            <p>{item.name}</p>
            </button>
          )) 
        }
      </div>
    </div>
  )
}