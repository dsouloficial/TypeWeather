import './styles.css';

export function WeatherItem({ icon, title, value }) {
  return (
    <div className='weather-item'>
      <img src={icon} alt={title} />
      <span>{title}</span>
      <strong>{value}</strong>
    </div>
  )
}