import { combineReducers,configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";


// assume that the counter slice will be combined with other slices

// create the store from the combined reducer



const store = configureStore({
    reducer: {
      todos: todoSlice
    }
});

export default store;

// typescript type for the combined state
export type RootState = ReturnType<typeof store.getState>
