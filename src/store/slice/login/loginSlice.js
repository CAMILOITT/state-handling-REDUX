import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'AUTH',
  initialState: {
    name: '',
    email: '',
    password: '',
    isLogin: false,
  },
  reducers: {
    register(state, action) {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
  },
});

export const { register } = authSlice.actions;
export const authReduce = authSlice.reducer;
