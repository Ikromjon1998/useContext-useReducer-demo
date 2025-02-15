// import {useAppContext} from "../contexts/appReducer.ts";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../app/store.ts";
import {decrement, increment, reset} from "../features/appSlice.ts";

export const Counter = () => {
    // const { state, dispatch } = useAppContext();
    const count = useSelector((state: RootState) => state.app.count);
    const dispatch = useDispatch();

    return (
        <div className="counter">
            <h2>Count: {count}</h2>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
    )
}
