import { configureStore } from '@reduxjs/toolkit';

import TransferFilterSlice from './TransferFilterSlice';
import PriceFilterSlice from './PriceFilterSlice';
import CardListSlice from './CardListSlice';

export default configureStore({
  reducer: {
    TransferFilterSlice,
    PriceFilterSlice,
    CardListSlice,
  },
});
