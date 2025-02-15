// import { useAppContext } from "../contexts/appReducer.ts";

import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../app/store.ts";
import {toggleTheme} from "../features/appSlice.ts";

export const ThemeSwitcher = () => {
    // const { state, dispatch } = useAppContext();
    const theme = useSelector((state: RootState) => state.app.theme);
    const dispatch = useDispatch();

    return (
        <div className="theme-switcher">
            <h2>Current theme: {theme}</h2>
            <button onClick={() => dispatch(toggleTheme())}>Toggle Theme</button>
        </div>
    )
}
