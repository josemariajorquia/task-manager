import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "tasks",

  initialState: {
    tasks: [],
  },

  reducers: {

    addTask: function(state, action) {
      state.tasks.push(action.payload);
    },

    removeTask: function(state, action) {
      state.tasks = state.tasks.filter(function(task, index) {
        return index !== action.payload;
      });
    },

  },
});

export const { addTask, removeTask } = taskSlice.actions;
export default taskSlice.reducer;