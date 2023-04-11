import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Spin } from 'antd';

import { fetchData, getSearchId } from '../../Store/CardListSlice';
import PriceFilter from '../PriceFilter';
import TransferFilter from '../TransferFilter';
import CardList from '../CardList';
import Logo from '../../Assets/Logo.png';

import style from './App.module.scss';

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
    if ((status === 'error' && !stop) || (!stop && status === 'ok')) dispatch(fetchData(searchId));
  }, [status]);

  return (
    <div className={style.app}>
      <header className={style.app__header}>
        <img src={Logo} alt="plane-logo" />
      </header>
      <section className={style.app__main}>
        <TransferFilter />
        <div className={style.app__data}>
          <PriceFilter />
          {!stop ? <Spin size="large" /> : <CardList />}
        </div>
      </section>
    </div>
  );
}

export default App;
