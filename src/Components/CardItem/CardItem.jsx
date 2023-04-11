/* eslint-disable react/no-typos */
import PropTypes from 'prop-types';

import style from './CardItem.module.scss';

function CardInformation(props) {
  const { h3, p } = props;
  return (
    <span>
      <h3>{h3}</h3>
      <p>{p}</p>
    </span>
  );
}

function CardItem(props) {
  const { price, segments, carrier } = props;

  const stops1 = segments[0].stops;
  const stops2 = segments[1].stops;
  const takeoffMin1 = new Date(segments[0].date).getMinutes() + new Date(segments[0].date).getHours() * 60;
  const arrivalMin1 = takeoffMin1 + segments[0].duration;
  const takeoffMin2 = new Date(segments[1].date).getMinutes() + new Date(segments[1].date).getHours() * 60;
  const arrivalMin2 = takeoffMin2 + segments[1].duration;
  const duration1 = new Date(segments[0].duration * 60 * 1000).toISOString().substr(11, 5);
  const duration2 = new Date(segments[1].duration * 60 * 1000).toISOString().substr(11, 5);

  return (
    <li className={style.card}>
      <div className={style.card__title}>
        <p>{price.toLocaleString('ru-RU')} Р</p>
        <img src={`https://pics.avs.io/99/36/${carrier}.png`} alt="company logo" />
      </div>
      <div className={style.card__info}>
        <div className={style.card__infoItem}>
          <CardInformation
            h3={`${segments[0].origin}-${segments[0].destination}`}
            p={`${new Date(takeoffMin1 * 60 * 1000).toISOString().substr(11, 5)} -
              ${new Date(arrivalMin1 * 60 * 1000).toISOString().substr(11, 5)}`}
          />
          <CardInformation
            h3={`${segments[1].origin}-${segments[1].destination}`}
            p={`${new Date(takeoffMin2 * 60 * 1000).toISOString().substr(11, 5)} -
              ${new Date(arrivalMin2 * 60 * 1000).toISOString().substr(11, 5)}`}
          />
        </div>

        <div className={style.card__infoItem}>
          <CardInformation h3="в пути" p={`${duration1.slice(0, 2)}Ч ${duration1.slice(3)}М`} />
          <CardInformation h3="в пути" p={`${duration2.slice(0, 2)}Ч ${duration2.slice(3)}М`} />
        </div>

        <div className={style.card__infoItem}>
          <CardInformation
            h3={`${
              stops1.length > 0 ? `${stops1.length} ${stops1.length === 1 ? 'пересадка' : 'пересадки'}` : 'Прямой рейс'
            }`}
            p={`${stops1.join(' ')}`}
          />
          <CardInformation
            h3={`${
              stops2.length > 0 ? `${stops2.length} ${stops2.length === 1 ? 'пересадка' : 'пересадки'}` : 'Прямой рейс'
            }`}
            p={`${stops2.join(' ')}`}
          />
        </div>
      </div>
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
