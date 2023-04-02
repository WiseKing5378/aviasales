import './CardItem.scss';
import Logo from '../../Img/S7.png';

function CardItem(props) {
  const { price, segments } = props;

  console.log(new Date(segments[0].date));

  return (
    <li className="card">
      <div className="card__title">
        <p>{price}Р</p>
        <img src={Logo} alt="company logo" />
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
            <h3>{segments[0].stops.length > 0 ? `${segments[0].stops.length} пересадки` : 'Прямой рейс'} </h3>
            <p>{segments[0].stops.join(' ')}</p>
          </span>
          <span>
            <h3>{segments[1].stops.length > 0 ? `${segments[1].stops.length} пересадки` : 'Прямой рейс'} </h3>
            <p>{segments[1].stops.join(' ')}</p>
          </span>
        </div>
      </div>
    </li>
  );
}
export default CardItem;
