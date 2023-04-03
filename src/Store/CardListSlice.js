/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getSearchId = createAsyncThunk('CardListData/getSearchId', async () => {
  const searchIdResp = await fetch('https://aviasales-test-api.kata.academy/search');
  const searchId = await searchIdResp.json();

  return searchId;
});

export const fetchData = createAsyncThunk('CardListData/fetchData', async (searchId) => {
  // const searchIdResp = await fetch('https://aviasales-test-api.kata.academy/search');
  // const searchId = await searchIdResp.json();
  // console.log(searchId);

  const ticketsResp = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`);
  const ticketsData = await ticketsResp.json();

  return ticketsData;
});

const CardListSlice = createSlice({
  name: 'CardListData',
  initialState: {
    cardData: [],
    status: null,
    error: null,
    stop: false,
    searchId: null,
  },
  reducers: {},
  extraReducers: {
    [fetchData.pending]: (state, action) => {
      state.status = 'loading';
      state.error = null;
    },
    [fetchData.fulfilled]: (state, action) => {
      console.log(action);
      state.stop = action.payload.stop;
      state.status = 'ok';
      state.cardData = action.payload.tickets;
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

export default CardListSlice.reducer;
