import './CardList.scss';
import CardItem from '../CardItem';

function CardList() {
  return (
    <>
      <ul className="card-list">
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
      </ul>
      <button type="button" className="card-button">
        Показать еще 5 билетов!
      </button>
    </>
  );
}
export default CardList;
