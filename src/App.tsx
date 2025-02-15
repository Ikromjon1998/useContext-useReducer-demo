import './App.css'
import {useAppContext} from "./contexts/appReducer.ts";
import {Counter} from "./src/components/Counter.tsx";
import {ThemeSwitcher} from "./src/components/ThemeSwitcher.tsx";

function App() {
  const { state } = useAppContext();

  return (
    <div className={`app ${state.theme}`}>
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
