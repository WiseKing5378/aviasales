/* eslint-disable no-unused-vars */
import './CardList.scss';
import { useSelector, useDispatch } from 'react-redux';
import uuid from 'react-uuid';

import { setVisibleData, fetchData } from '../../Store/CardListSlice';
import CardItem from '../CardItem';

function CardList() {
  const { visibleData, searchId, cardData, status, stop } = useSelector((state) => state.CardListSlice);
  const dispatch = useDispatch();

  const data = visibleData.map((i) => {
    const { price, carrier, segments } = i;
    return <CardItem key={uuid()} price={price} carrier={carrier} segments={segments} />;
  });

  return (
    <>
      <ul className="card-list">{data}</ul>
      {stop ? <p>Билетов больше нет</p> : null}
      <button
        type="button"
        onClick={() => {
          dispatch(setVisibleData());
          if (cardData.length + 1 - (visibleData.length + 1) === 10 || status === 'error') {
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
