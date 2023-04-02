import { configureStore } from '@reduxjs/toolkit';

import TransferFilterSlice from './TransferFilterSlice';
import PriceFilterSlice from './PriceFilterSlice';

export default configureStore({
  reducer: {
    TransferFilterSlice,
    PriceFilterSlice,
  },
});
