import { useSelector } from "react-redux";
import { selectCounterValue } from "../features/counter/counterSlice";

export default function CounterMessage() {
  const count = useSelector(selectCounterValue);

  let message;

  if (count < 0) {
    message = "⚠️ Counter is negative";
  } else if (count === 0) {
    message = "🟢 Counter is at zero";
  } else if (count < 5) {
    message = "🙂 Counter is positive";
  } else {
    message = "🚀 Counter is getting high!";
  }

  return <p>{message}</p>;
}
