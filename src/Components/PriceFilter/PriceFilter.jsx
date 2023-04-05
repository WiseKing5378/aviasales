import './PriceFilter.scss';
import { useDispatch, useSelector } from 'react-redux';

import { getActiveTab } from '../../Store/PriceFilterSlice';

function PriceFilter() {
  const { activeTab } = useSelector((state) => state.PriceFilterSlice);
  const dispatch = useDispatch();
  return (
    <div className="button-group">
      <button
        type="button"
        className={activeTab === 'cheap' ? 'price-button active' : 'price-button'}
        onClick={() => {
          dispatch(getActiveTab('cheap'));
        }}
      >
        Самый дешевый
      </button>
      <button
        type="button"
        className={activeTab === 'fast' ? 'price-button active' : 'price-button'}
        onClick={() => {
          dispatch(getActiveTab('fast'));
        }}
      >
        Самый быстрый
      </button>
      <button type="button" className="price-button" disabled>
        Оптимальный
      </button>
    </div>
  );
}

export default PriceFilter;
