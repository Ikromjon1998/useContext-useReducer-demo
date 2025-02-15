import { useAppContext } from "../../contexts/appReducer.ts";

export const ThemeSwitcher = () => {
    const { state, dispatch } = useAppContext();

    return (
        <div className="theme-switcher">
            <h2>Current theme: {state.theme}</h2>
            <button onClick={() => dispatch({ type: 'TOGGLE_THEME' })}>Toggle Theme</button>
        </div>
    )
}
