/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getSearchId = createAsyncThunk('CardListData/getSearchId', async () => {
  const searchIdResp = await fetch('https://aviasales-test-api.kata.academy/search');
  const searchId = await searchIdResp.json();

  return searchId;
});

export const fetchData = createAsyncThunk('CardListData/fetchData', async (searchId) => {
  const ticketsResp = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`);
  const ticketsData = await ticketsResp.json();

  return ticketsData;
});

const CardListSlice = createSlice({
  name: 'CardListData',
  initialState: {
    cardData: [],
    sliceNum: 5,
    status: 'loading',
    stop: false,
    searchId: null,
  },
  reducers: {
    setSliceNum(state) {
      state.sliceNum += 5;
    },
  },
  extraReducers: {
    [fetchData.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchData.fulfilled]: (state, action) => {
      state.stop = action.payload.stop;
      state.status = 'ok';
      state.cardData = [...state.cardData, ...action.payload.tickets];
    },
    [fetchData.rejected]: (state) => {
      state.status = 'error';
    },

    [getSearchId.fulfilled]: (state, action) => {
      state.searchId = action.payload.searchId;
    },
  },
});
export const { setSliceNum, filterData } = CardListSlice.actions;
export default CardListSlice.reducer;
