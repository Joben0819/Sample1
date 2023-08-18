import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
    value: number;
    name: {
     [key: string]: string
    };
  }
  
  const initialState: CounterState = {
    value: 0,
    name: {}
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
      setName: (state, action: PayloadAction<{ key: string; value: string }>) => {
        const { key, value } = action.payload;
        state.name[key] = value;
      },
      // You can add more reducers here as needed
    },
  });
  
  export const { increment, decrement, setName  } = counterSlice.actions;
  export default counterSlice.reducer;