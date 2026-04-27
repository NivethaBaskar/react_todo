import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';
import projectReducer from './projectSlice';
import filterReducer from './filterSlice';

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    projects: projectReducer,
    filters: filterReducer,
  },
});
