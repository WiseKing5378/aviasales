import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchData, getSearchId } from '../../Store/CardListSlice';
import PriceFilter from '../PriceFilter';
import TransferFilter from '../TransferFilter';
import CardList from '../CardList';
import './App.scss';
import Logo from '../../Img/Logo.png';

function App() {
  const dispatch = useDispatch();
  const { searchId, status, stop } = useSelector((state) => state.CardListSlice);

  useEffect(() => {
    dispatch(getSearchId());
  }, []);

  useEffect(() => {
    if (searchId) dispatch(fetchData(searchId));
  }, [searchId]);
  useEffect(() => {
    if (status === 'error' && !stop) dispatch(fetchData(searchId));
  }, [status]);

  return (
    <div className="app">
      <header className="app__header">
        <img src={Logo} alt="plane-logo" />
      </header>
      <section className="app__main">
        <TransferFilter />
        <div>
          <PriceFilter />
          <CardList />
        </div>
      </section>
    </div>
  );
}

export default App;
