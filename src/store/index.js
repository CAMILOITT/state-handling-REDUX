import { configureStore } from '@reduxjs/toolkit';
import { authReduce } from './slice/login/loginSlice';
import { todoReducer } from './slice/todo/todoSlice';

export const store = configureStore({
  reducer: { auth: authReduce, todo: todoReducer },
});
