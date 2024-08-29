/* eslint-disable no-return-assign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '..';

type UserType = { id: number };
type TypeUserState = { data: UserType | null };
// https://redux-toolkit.js.org/rtk-query/usage/examples
const initialState: TypeUserState = { data: null };

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (
      state,
      { payload: data }: PayloadAction<{ id: number }>,
    ) => ({ ...state, data }),
  },
});

export const { setUser } = slice.actions;
export default slice.reducer;
export const selectUser = (state: RootState) => state.user.data;
