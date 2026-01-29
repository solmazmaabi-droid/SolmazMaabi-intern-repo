import { useEffect, useState } from "react";

export default function StaleClosureBug() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
        setCount((prev) => prev + 1); // ✅ always uses latest state
        //setCount(count + 1); // ❌ BUG: "count" is captured from the first render (stale closure)
        console.log("Interval tick, count =", count); 

    }, 1000);

    return () => clearInterval(id);
  }, []); 

  return (
    <div style={{ padding: 16 }}>
      <h2>Stale Closure Bug</h2>
      <p>Count: {count}</p>
      <p>Expected: count keeps increasing every second.</p>
      <p>With bug: it gets stuck.</p>
    </div>
  );
}
