/* eslint-disable no-param-reassign */
/* eslint-disable radix */
/* eslint-disable no-unused-vars */
import './CardList.scss';
import { useSelector, useDispatch } from 'react-redux';
import uuid from 'react-uuid';

import { setVisibleData, fetchData } from '../../Store/CardListSlice';
import CardItem from '../CardItem';

function CardList() {
  const { visibleData, searchId, cardData, status, stop } = useSelector((state) => state.CardListSlice);
  const { checkedList } = useSelector((state) => state.TransferFilterSlice);
  const { activeTab } = useSelector((state) => state.PriceFilterSlice);
  const dispatch = useDispatch();

  // let filteredData = [...visibleData];
  // if (activeTab === 'cheap') {
  //   filteredData = [...visibleData].sort((a, b) => {
  //     return a.price - b.price;
  //   });
  // }

  // const transferFilter = checkedList.map((i) => {
  //   i = parseInt(i.match(/\d+/));
  //   if (!i) return 0;
  //   return i;
  // });

  // const filteredData = visibleData.filter((i) =>
  //   transferFilter.reduce((acc, element) => {
  //     acc = element === Math.max(i.segments[0].stops.length, i.segments[1].stops.length);

  //     return acc;
  //   }, false)
  // );

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
          dispatch(setVisibleData());
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
