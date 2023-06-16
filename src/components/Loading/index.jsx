import './styles.css';
import { Spin } from '../Spin';

export function Loading() {
  return (
    <div className="loading">
      <Spin />
    </div>
  )
}