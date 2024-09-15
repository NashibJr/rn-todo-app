import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserTypes = {
  username: string;
  id: string;
  token?: string;
} | null;

const initialState = {
  user: null || ({} as UserTypes),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserTypes>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice;
