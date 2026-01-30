import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  reset,
  selectCounterValue,
} from "../features/counter/counterSlice";

export default function Counter() {
  const count = useSelector(selectCounterValue);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Counter: {count}</h2>

      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}
