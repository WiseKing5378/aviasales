import './PriceFilter.scss';

function PriceFilter() {
  return (
    <div className="button-group">
      <button type="button" className="price-button">
        Самый дешевый
      </button>
      <button type="button" className="price-button">
        Самый быстрый
      </button>
      <button type="button" className="price-button">
        Оптимальный
      </button>
    </div>
  );
}

export default PriceFilter;
