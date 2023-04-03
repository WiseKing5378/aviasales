import './CardList.scss';
import { useSelector } from 'react-redux';
import uuid from 'react-uuid';

import CardItem from '../CardItem';

function CardList() {
  const { cardData } = useSelector((state) => state.CardListSlice);

  const data = cardData.map((i) => {
    const { price, carrier, segments } = i;
    return <CardItem key={uuid()} price={price} carrier={carrier} segments={segments} />;
  });
  console.log(cardData);
  return (
    <>
      <ul className="card-list">{data}</ul>
      <button type="button" className="card-button">
        Показать еще 5 билетов!
      </button>
    </>
  );
}
export default CardList;
