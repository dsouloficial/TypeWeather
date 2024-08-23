import './styles.css';

import { useNavigate } from 'react-router-dom';
import { SelectCity } from '../../components/SelectCity';
import { CityProps } from '../../services/getCityByNameService';

export function Search() {
  const navigate = useNavigate();

  function handleSelected(city: CityProps) {
    localStorage.setItem('@typewheather:city', JSON.stringify(city));
    navigate('/dashboard');
  }

  return (
    <div className="home">
      <img src="logo_large.svg" alt="Logo" />

      <main>
        <h1>Boas vindas ao <strong>TypeWeather</strong></h1>
        <span>Escolha um local para ver a previsão do tempo</span>

        <SelectCity onSelect={handleSelected} />
      </main>
    </div>
  );
}