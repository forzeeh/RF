import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import todoReducer from './todoSlice'
import homeSlice from "./homeSlice.ts";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
    home: homeSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
