import './CardItem.scss';

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
    <li className="card">
      <div className="card__title">
        <p>{price.toLocaleString('ru-RU')} Р</p>
        <img src={`https://pics.avs.io/99/36/${carrier}.png`} alt="company logo" />
      </div>
      <div className="card__info">
        <div className="card__info-item">
          <span>
            <h3>
              {segments[0].origin}-{segments[0].destination}
            </h3>
            <p>
              {new Date(takeoffMin1 * 60 * 1000).toISOString().substr(11, 5)} -{' '}
              {new Date(arrivalMin1 * 60 * 1000).toISOString().substr(11, 5)}
            </p>
          </span>
          <span>
            <h3>
              {segments[1].origin}-{segments[1].destination}
            </h3>
            <p>
              {new Date(takeoffMin2 * 60 * 1000).toISOString().substr(11, 5)} -{' '}
              {new Date(arrivalMin2 * 60 * 1000).toISOString().substr(11, 5)}
            </p>
          </span>
        </div>

        <div className="card__info-item">
          <span>
            <h3>в пути</h3>
            <p>
              {duration1.slice(0, 2)}Ч {duration1.slice(3)}М
            </p>
          </span>
          <span>
            <h3>в пути</h3>
            <p>
              {duration2.slice(0, 2)}Ч {duration2.slice(3)}М
            </p>
          </span>
        </div>

        <div className="card__info-item">
          <span>
            <h3>
              {stops1.length > 0
                ? `${stops1.length} ${stops1.length === 1 ? 'пересадка' : 'пересадки'}`
                : 'Прямой рейс'}{' '}
            </h3>
            <p>{stops1.join(' ')}</p>
          </span>
          <span>
            <h3>
              {stops2.length > 0
                ? `${stops2.length} ${stops2.length === 1 ? 'пересадка' : 'пересадки'}`
                : 'Прямой рейс'}{' '}
            </h3>
            <p>{stops2.join(' ')}</p>
          </span>
        </div>
      </div>
    </li>
  );
}
export default CardItem;
