import PropTypes from 'prop-types';

import CardInfo from './Components/CardInfo';
import CardHeader from './Components/CardHeader';
import style from './CardItem.module.scss';

function CardItem(props) {
  const { price, segments, carrier } = props;

  return (
    <li className={style.card}>
      <CardHeader price={price} carrier={carrier} />
      <CardInfo segments={segments} />
    </li>
  );
}

CardItem.defaultProps = {
  price: 0,
  carrier: 'S7',
};

CardItem.propTypes = {
  price: PropTypes.number,
  carrier: PropTypes.string,
};

export default CardItem;
