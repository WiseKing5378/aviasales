/* eslint-disable no-param-reassign */

import { useSelector, useDispatch } from 'react-redux';
import uuid from 'react-uuid';

import { setSliceNum } from '../../Store/CardListSlice';
import CardItem from '../CardItem';

import style from './CardList.module.scss';

function CardList() {
  const { cardData, status, sliceNum } = useSelector((state) => state.CardListSlice);
  const { checkedList } = useSelector((state) => state.TransferFilterSlice);
  const { activeTab } = useSelector((state) => state.PriceFilterSlice);
  const dispatch = useDispatch();

  const transferFilter = checkedList.map((i) => {
    i = parseInt(i.match(/\d+/), 10);
    if (!i) return 0;
    return i;
  });

  let filteredData = [...cardData];
  if (activeTab === 'cheap') {
    filteredData = [...cardData].sort((a, b) => {
      return a.price - b.price;
    });
  }
  if (activeTab === 'fast') {
    filteredData = [...cardData].sort((a, b) => {
      return a.segments[0].duration + a.segments[1].duration - (b.segments[0].duration + b.segments[1].duration);
    });
  }

  filteredData = filteredData.filter(
    (i) =>
      i.segments[0].stops.length === transferFilter[0] ||
      i.segments[0].stops.length === transferFilter[1] ||
      i.segments[0].stops.length === transferFilter[2] ||
      i.segments[0].stops.length === transferFilter[3] ||
      i.segments[1].stops.length === transferFilter[0] ||
      i.segments[1].stops.length === transferFilter[1] ||
      i.segments[1].stops.length === transferFilter[2] ||
      i.segments[1].stops.length === transferFilter[3]
  );

  const visibleData = filteredData.slice(0, sliceNum);

  const data = visibleData.map((i) => {
    const { price, carrier, segments } = i;
    return <CardItem key={uuid()} price={price} carrier={carrier} segments={segments} />;
  });

  return (
    <>
      <ul className={style.cardlist}>
        {data}
        {!data.length && status !== 'loading' ? 'Рейсов, подходящих под заданные фильтры, не найдено' : ''}
        {cardData.length - visibleData.length === 0 ? <p>Билетов больше нет</p> : null}
      </ul>

      <button
        type="button"
        onClick={() => {
          dispatch(setSliceNum());
        }}
        className={style.cardbutton}
        disabled={!data.length || cardData.length - visibleData.length === 0}
      >
        Показать еще 5 билетов!
      </button>
    </>
  );
}
export default CardList;
