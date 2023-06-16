import './styles.css';

export function NextDaysItem({ data }) {
  console.log(data.weather)
  return (
    <div className='next-day-item'>
      <h2>{data.day}</h2>

      <img src={data.icon} alt={data.weather} />

      <h3>{data.weather}</h3>

      <p>
        {data.min}
        <span>{data.max}</span>
      </p>
    </div>
  )
}