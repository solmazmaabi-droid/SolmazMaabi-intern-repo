import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from "../features/counter/counterSlice";
import Button from "./Button";

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const [amount, setAmount] = useState(1);

  const handleAddAmount = () => {
    const num = Number(amount);
    if (!Number.isFinite(num)) return;
    dispatch(incrementByAmount(num));
  };

  return (
    <div style={{ display: "grid", gap: 12, maxWidth: 360 }}>
      <h2>Count: {count}</h2>

      <div style={{ display: "flex", gap: 8 }}>
        <Button onClick={() => dispatch(decrement())}>-</Button>
        <Button onClick={() => dispatch(increment())}>+</Button>
        <Button onClick={() => dispatch(reset())}>Reset</Button>
      </div>

      <div style={{ display: "flex", gap: 8 }}>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={{ width: 120 }}
        />
        <Button onClick={handleAddAmount}>Add amount</Button>
      </div>
    </div>
  );
}
