import './styles.css';
import { Spin } from '../Spin';

export function Input({ isLoading = false, ...rest }) {
  return (
    <div className="input" >
      <input type='text' {...rest} />

      {isLoading && <Spin />}
    </div>
  )
}