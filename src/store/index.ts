import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../reducers/counter';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    // Add more reducers here if needed
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;