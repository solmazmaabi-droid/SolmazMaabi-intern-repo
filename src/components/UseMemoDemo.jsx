import { useMemo, useState } from "react";
import Button from "./Button";

function expensiveCalculation(numbers) {
  // Fake expensive work (CPU-heavy loop)
  let total = 0;

  for (let i = 0; i < numbers.length; i++) {
    // extra work to simulate slowness
    for (let j = 0; j < 200; j++) {
      total += numbers[i] % 10;
      total -= numbers[i] % 10;
    }
    total += numbers[i];
  }

  return total;
}

function UseMemoDemo() {
  const [count, setCount] = useState(0);
  const [min, setMin] = useState(0);

  // Large list of numbers (changes only when `min` changes)
  const numbers = useMemo(() => {
    // Example: 50,000 numbers
    return Array.from({ length: 50000 }, (_, i) => i + min);
  }, [min]);

  // Expensive calculation ONLY reruns when `numbers` changes
  const total = useMemo(() => {
    console.log("Running expensive calculation...");
    return expensiveCalculation(numbers);
  }, [numbers]);

  return (
    <div style={{ padding: 16 }}>

      <div style={{ display: "flex", gap: 12, marginBottom: 12 }}>
        <Button onClick={() => setCount(count + 1)}>
          Re-render (count: {count})
        </Button>

        <Button onClick={() => setMin(min + 1)}>
          Change list (min: {min})
        </Button>
      </div>

      <p>
        Expensive total: <strong>{total}</strong>
      </p>

      <p>List preview (first 10 numbers):</p>
      <ul>
        {numbers.slice(0, 10).map((n) => (
          <li key={n}>{n}</li>
        ))}
      </ul>

      <p style={{ fontSize: 14, opacity: 0.8 }}>
        Open the browser console to see when the expensive calculation runs.
      </p>
    </div>
  );
}

export default UseMemoDemo;
