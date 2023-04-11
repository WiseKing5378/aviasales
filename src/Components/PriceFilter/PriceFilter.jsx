import { useDispatch, useSelector } from 'react-redux';

import { getActiveTab } from '../../Store/PriceFilterSlice';

import style from './PriceFilter.module.scss';

function PriceFilter() {
  const { activeTab } = useSelector((state) => state.PriceFilterSlice);
  const dispatch = useDispatch();
  return (
    <div className={style.button_group}>
      <button
        type="button"
        className={activeTab === 'cheap' ? `${style.price_button} ${style.active}` : `${style.price_button}`}
        onClick={() => {
          dispatch(getActiveTab('cheap'));
        }}
      >
        Самый дешевый
      </button>
      <button
        type="button"
        className={activeTab === 'fast' ? `${style.price_button} ${style.active}` : `${style.price_button}`}
        onClick={() => {
          dispatch(getActiveTab('fast'));
        }}
      >
        Самый быстрый
      </button>
      <button type="button" className={style.price_button} disabled>
        Оптимальный
      </button>
    </div>
  );
}

export default PriceFilter;
