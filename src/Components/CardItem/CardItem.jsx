import './CardItem.scss';

function CardItem(props) {
  const { price, segments, carrier } = props;

  // console.log(new Date(segments[0].date));

  const stops1 = segments[0].stops;
  const stops2 = segments[1].stops;
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
            <p>10:45 - 08:00</p>
          </span>
          <span>
            <h3>
              {segments[1].origin}-{segments[1].destination}
            </h3>
            <p>10:45 - 08:00</p>
          </span>
        </div>

        <div className="card__info-item">
          <span>
            <h3>в пути</h3>
            <p>21ч 15м</p>
          </span>
          <span>
            <h3>в пути</h3>
            <p>21ч 15м</p>
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
