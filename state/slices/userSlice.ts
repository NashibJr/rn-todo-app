import { createSlice } from "@reduxjs/toolkit";

type UserTypes = {
  username: string;
  id: string;
  token?: string;
};
const initialState = {
  user: null || ({} as UserTypes),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice;
