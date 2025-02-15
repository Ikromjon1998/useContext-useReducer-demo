import './App.css'
// import {useAppContext} from "./contexts/appReducer.ts";
import {Counter} from "./components/Counter.tsx";
import {ThemeSwitcher} from "./components/ThemeSwitcher.tsx";
import {useSelector} from "react-redux";
import {RootState} from "./app/store.ts";

function App() {
  const theme = useSelector((state: RootState) => state.app.theme);

  return (
    <div className={`app ${theme}`}>
        <h1>useContext + useReducer Demo</h1>
        <Counter />
        <ThemeSwitcher />

        <div className="theme-dependent-box">
            This box changes color based on the theme.
        </div>
    </div>
  )
}

export default App
