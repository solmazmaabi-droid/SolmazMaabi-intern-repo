import { useCallback, useState } from "react";
import Child from "./Child";
import Button from "./Button";

function UseCallbackDemo() {
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(0);

  // Memoised function
  const handleClick = useCallback(() => {
    console.log("Child button clicked");
  }, []);

  return (
    <div style={{ padding: 16 }}>

      <Button onClick={() => setCount(count + 1)}>
        Update count ({count})
      </Button>

      <Button onClick={() => setOther(other + 1)}>
        Update other ({other})
      </Button>

      <Child onClick={handleClick} />
    </div>
  );
}

export default UseCallbackDemo;
