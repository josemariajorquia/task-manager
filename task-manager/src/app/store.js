import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../feature/taskSlice";

const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});

export default store;