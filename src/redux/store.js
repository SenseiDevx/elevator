import { configureStore } from '@reduxjs/toolkit';
import elevatorReducer from './slices/elevatorSlice';

const store = configureStore({
    reducer: {
        elevator: elevatorReducer,
    },
});

export default store;
