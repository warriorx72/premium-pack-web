import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  user: string;
}

const initialState: AuthState = {
  user: '',
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<string>) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = authSlice.actions

export default authSlice.reducer