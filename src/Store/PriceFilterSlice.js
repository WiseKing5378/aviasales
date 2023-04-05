/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const TransferFilterSlice = createSlice({
  name: 'PriceFilterData',
  initialState: {
    activeTab: 'cheap',
  },
  reducers: {
    getActiveTab(state, action) {
      state.activeTab = action.payload;
    },
  },
});

export const { getActiveTab } = TransferFilterSlice.actions;
export default TransferFilterSlice.reducer;
