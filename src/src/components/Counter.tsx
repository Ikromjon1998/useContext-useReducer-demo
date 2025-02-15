import {useAppContext} from "../../contexts/appReducer.ts";

export const Counter = () => {
    const { state, dispatch } = useAppContext();

    return (
        <div className="counter">
            <h2>Count: {state.count}</h2>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
        </div>
    )
}
