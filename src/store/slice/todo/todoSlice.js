import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todo',
  initialState: [],
  reducers: {
    createTask(state, action) {
      const id = new Date().getTime();
      const task = { id, task: action.payload };
      state.push(task);
    },
    deleteTask(state, action) {
      const newList = state.filter((task) => task.id !== action.payload);
      state = newList;
      return state;
    },
    updateTask(state, action) {
      console.log(action);

      const task = state.find((task) => task.id === action.payload.id);
      const positionTask = state.indexOf(task);
      return (state[positionTask] = action.payload.newTask);
    },
  },
});

export const { createTask, deleteTask, updateTask } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
