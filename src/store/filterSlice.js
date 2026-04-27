import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: 'ALL', // ALL, ACTIVE, COMPLETED
  projectId: null,
  searchQuery: '',
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setStatusFilter: (state, action) => {
      state.status = action.payload;
    },
    setProjectFilter: (state, action) => {
      state.projectId = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { setStatusFilter, setProjectFilter, setSearchQuery } = filterSlice.actions;
export default filterSlice.reducer;
