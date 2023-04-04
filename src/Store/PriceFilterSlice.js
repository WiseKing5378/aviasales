/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const TransferFilterSlice = createSlice({
  name: 'PriceFilterData',
  initialState: {
    activeTab: 'cheap',
  },
  reducers: {
    getCheapest(state) {
      state.activeTab = 'cheap';
    },
    getFastes(state) {
      state.activeTab = 'fast';
    },
  },
});

export const { getCheapest, getFastes } = TransferFilterSlice.actions;
export default TransferFilterSlice.reducer;
