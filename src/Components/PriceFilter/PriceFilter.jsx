import './PriceFilter.scss';
import { useDispatch } from 'react-redux';

import { getCheapest, getFastes } from '../../Store/PriceFilterSlice';

function PriceFilter() {
  const dispatch = useDispatch();
  return (
    <div className="button-group">
      <button
        type="button"
        className="price-button"
        onClick={() => {
          dispatch(getCheapest());
        }}
      >
        Самый дешевый
      </button>
      <button
        type="button"
        className="price-button"
        onClick={() => {
          dispatch(getFastes());
        }}
      >
        Самый быстрый
      </button>
      <button type="button" className="price-button">
        Оптимальный
      </button>
    </div>
  );
}

export default PriceFilter;
