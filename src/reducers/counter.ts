import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
    value: number;
    name: string
  }
  
  const initialState: CounterState = {
    value: 0,
    name: "Zac"
  };
  
  const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
      increment(state) {
        state.value++;
      },
      decrement(state) {
        state.value--;
      },
      setName: (state, action) => {
        state.name = action.payload;
      },
      // You can add more reducers here as needed
    },
  });
  
  export const { increment, decrement, setName  } = counterSlice.actions;
  export default counterSlice.reducer;