import {useContext} from "react";
import {AppContext} from "./AppContext.tsx";

export type AppState = {
    count: number;
    theme: 'light' | 'dark';
}

export type Action =
    | { type: 'INCREMENT' }
    | { type: 'DECREMENT' }
    | { type: 'RESET' }
    | { type: 'TOGGLE_THEME' }

export const appReducer = (state: AppState, action: Action): AppState => {
    switch (action.type) {
        case "INCREMENT":
            return { ...state, count: state.count + 1 };
        case "DECREMENT":
            return { ...state, count: state.count - 1 };
        case "RESET":
            return { ...state, count: 0 };
        case "TOGGLE_THEME":
            return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
        default:
            return state;
    }
}

export const useAppContext = () => {
    return useContext(AppContext);
}
