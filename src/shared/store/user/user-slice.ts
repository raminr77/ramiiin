import { createSlice } from '@reduxjs/toolkit';
import { REDUCER_NAMES } from '@/shared/constants/reducer-names';

const initialState: GUser = {
  isAuthenticated: false
};

const userSlice = createSlice({
  name: REDUCER_NAMES.USER,
  initialState,
  reducers: {
    toggleAuthenticated: (state) => {
      state.isAuthenticated = !state.isAuthenticated;
    }
  }
});

export const { toggleAuthenticated } = userSlice.actions;

export default userSlice.reducer;
