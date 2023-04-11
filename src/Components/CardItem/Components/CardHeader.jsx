import PropTypes from 'prop-types';

import style from '../CardItem.module.scss';
import S7 from '../../../Assets/S7.png';

export default function CardHeader(props) {
  const { price, carrier } = props;

  return (
    <div className={style.card__title}>
      <p>{price.toLocaleString('ru-RU')} Р</p>
      <img src={carrier ? `https://pics.avs.io/99/36/${carrier}.png` : S7} alt="company logo" />
    </div>
  );
}
CardHeader.defaultProps = {
  price: 0,
  carrier: 'S7',
};

CardHeader.propTypes = {
  price: PropTypes.number,
  carrier: PropTypes.string,
};
