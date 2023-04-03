/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const TransferFilterSlice = createSlice({
  name: 'TransferFilterData',
  initialState: {
    checkedList: ['Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки'],
    indeterminate: false,
    checkAll: true,
    plainOptions: ['Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки'],
  },
  reducers: {
    onChange(state, action) {
      state.checkedList = action.payload;
      state.indeterminate = action.payload.length && action.payload.length < state.plainOptions.length;
      state.checkAll = action.payload.length === state.plainOptions.length;
    },
    onCheckAllChange(state, action) {
      state.checkedList = action.payload ? state.plainOptions : [];
      state.indeterminate = false;
      state.checkAll = action.payload;
    },
  },
});

export const { onChange, onCheckAllChange } = TransferFilterSlice.actions;
export default TransferFilterSlice.reducer;
