/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
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
    visibleData: [],
    sliceNum: 5,
    status: null,
    error: null,
    stop: false,
    searchId: null,
  },
  reducers: {
    setVisibleData(state, action) {
      state.sliceNum += 5;
      state.visibleData = [...state.cardData.slice(0, state.sliceNum)];
    },
    filterData(state, action) {
      if (action.payload === 'cheap') {
        state.cardData = [...state.cardData].sort((a, b) => {
          return a.price - b.price;
        });
      }
    },
  },
  extraReducers: {
    [fetchData.pending]: (state, action) => {
      state.status = 'loading';
      state.error = null;
    },
    [fetchData.fulfilled]: (state, action) => {
      state.stop = action.payload.stop;
      state.status = 'ok';
      state.cardData = [...state.cardData, ...action.payload.tickets];
      state.visibleData = [...action.payload.tickets.slice(0, state.sliceNum)];
      state.error = null;
    },
    [fetchData.rejected]: (state, action) => {
      state.status = 'error';
      state.error = true;
    },

    [getSearchId.pending]: (state, action) => {},
    [getSearchId.fulfilled]: (state, action) => {
      state.searchId = action.payload.searchId;
    },
    [getSearchId.rejected]: (state, action) => {},
  },
});
export const { setVisibleData, filterData } = CardListSlice.actions;
export default CardListSlice.reducer;
