import { createSlice } from '@reduxjs/toolkit';
import {AppState} from "../contexts/appReducer.ts";

const initialState: AppState = {
    count: 0,
    theme: 'light'
};

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        increment(state) {
            state.count += 1;
        },
        decrement(state) {
            state.count -= 1;
        },
        reset(state) {
            state.count = 0;
        },
        toggleTheme(state) {
            state.theme = state.theme === 'light' ? 'dark' : 'light';
        }
    }
});

export const { increment, decrement, reset, toggleTheme } = appSlice.actions;
export default appSlice.reducer;
