import React, {useReducer} from "react";
import {appReducer} from "./appReducer.ts";
import { AppContext } from "./AppContext.tsx";

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, {
        count: 0,
        theme: 'light'
    })

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    )
}
