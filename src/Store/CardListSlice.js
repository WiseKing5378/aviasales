/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchData = createAsyncThunk('CardListData/fetchData', async () => {
  const searchIdResp = await fetch('https://aviasales-test-api.kata.academy/search');
  const searchId = await searchIdResp.json();

  const ticketsResp = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId.searchId}`);
  const ticketsData = await ticketsResp.json();

  return ticketsData;
});

const CardListSlice = createSlice({
  name: 'CardListData',
  initialState: {
    cardData: [],
    status: null,
    error: null,
  },
  reducers: {
    // clgState(state) {
    //   console.log(state);
    // },
  },
  extraReducers: {
    [fetchData.pending]: (state, action) => {
      state.status = 'loading';
      state.error = null;
    },
    [fetchData.fulfilled]: (state, action) => {
      state.status = 'ok';
      state.cardData = action.payload.tickets;
      state.error = null;
    },
    [fetchData.rejected]: (state, action) => {
      state.status = 'error';
      state.error = true;
    },
  },
});

// export const { clgState } = CardListSlice.actions;
export default CardListSlice.reducer;
