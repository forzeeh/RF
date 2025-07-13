import {createSlice} from '@reduxjs/toolkit';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    create: (state) => {
      if (state.value >= 10) return;
      state.value += 1;
    },
    kill: (state) => {
      if (state.value <= 0) return;
      state.value -= 1;
    },
    reset: (state) => {
      if (state.value === 0) return;
      state.value = 0;
    },
  },
});

export const {create, kill, reset} = counterSlice.actions;
export default counterSlice.reducer; 