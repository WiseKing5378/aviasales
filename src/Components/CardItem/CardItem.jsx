import './CardItem.scss';
import Logo from '../../Img/S7.png';

function CardItem() {
  return (
    <li className="card">
      <div className="card__title">
        <p>13 400 Р</p>
        <img src={Logo} alt="company logo" />
      </div>
      <div className="card__info">
        <div className="card__info-item">
          <span>
            <h3>mov-hkt</h3>
            <p>10:45 - 08:00</p>
          </span>
          <span>
            <h3>mov-hkt</h3>
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
            <h3>2 пересадки</h3>
            <p>123 234</p>
          </span>
          <span>
            <h3>1 пересадка</h3>
            <p>222</p>
          </span>
        </div>
      </div>
    </li>
  );
}
export default CardItem;
