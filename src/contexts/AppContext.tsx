import React, { createContext } from "react";
import { AppState, Action } from "./appReducer";

type AppContextType = {
    state: AppState;
    dispatch: React.Dispatch<Action>;
}

export const AppContext = createContext<AppContextType>({} as AppContextType);
