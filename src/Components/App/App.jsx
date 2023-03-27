// import { useState, useEffect } from 'react';
import PriceFilter from '../PriceFilter';
import TransferFilter from '../TransferFilter';
import CardList from '../CardList';
import './App.scss';
import Logo from '../../Img/Logo.png';

function App() {
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