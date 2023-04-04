/* eslint-disable no-param-reassign */
/* eslint-disable radix */
/* eslint-disable no-unused-vars */
import './CardList.scss';
import { useSelector, useDispatch } from 'react-redux';
import uuid from 'react-uuid';

import { setSliceNum, fetchData } from '../../Store/CardListSlice';
import CardItem from '../CardItem';

function CardList() {
  const { searchId, cardData, status, stop, sliceNum } = useSelector((state) => state.CardListSlice);

  const { checkedList } = useSelector((state) => state.TransferFilterSlice);
  const { activeTab } = useSelector((state) => state.PriceFilterSlice);
  const dispatch = useDispatch();

  const transferFilter = checkedList.map((i) => {
    i = parseInt(i.match(/\d+/));
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
      <ul className="card-list">{data.length ? data : 'Рейсов, подходящих под заданные фильтры, не найдено'}</ul>
      {stop ? <p>Билетов больше нет</p> : null}
      <button
        type="button"
        onClick={() => {
          dispatch(setSliceNum());
          if (cardData.length - visibleData.length === 10 || status === 'error') {
            dispatch(fetchData(searchId));
          }
        }}
        className="card-button"
      >
        Показать еще 5 билетов!
      </button>
    </>
  );
}
export default CardList;
