import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    { id: '1', name: 'Personal', color: '#ff6b6b' },
    { id: '2', name: 'Work', color: '#4ecdc4' },
    { id: '3', name: 'Shopping', color: '#ffe66d' },
  ],
};

const projectSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    addProject: (state, action) => {
      state.items.push(action.payload);
    },
    deleteProject: (state, action) => {
      state.items = state.items.filter((p) => p.id !== action.payload);
    },
  },
});

export const { addProject, deleteProject } = projectSlice.actions;
export default projectSlice.reducer;
