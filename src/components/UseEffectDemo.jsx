import { useEffect, useState } from "react";
import Button from "./Button";

function UseEffectDemo() {
  const [data, setData] = useState(null);
  const [fetchData, setFetchData] = useState(false);

  // Runs once when component mounts and cleans up on unmount
  useEffect(() => {
    console.log("Component mounted");

    return () => {
      console.log("Component unmounted");
    };
  }, []);

  // Runs when fetchData changes
  useEffect(() => {
    if (!fetchData) return;

    console.log("Fetching data...");

    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((result) => {
        setData(result);
        setFetchData(false);
      });

    // Cleanup example
    return () => {
      console.log("Cleanup before next fetch or unmount");
    };
  }, [fetchData]);

  return (
    <div>

      <Button onClick={() => setFetchData(true)}>
        Fetch User
      </Button>

      {data && (
        <div>
          <p>Name: {data.name}</p>
          <p>Email: {data.email}</p>
        </div>
      )}
    </div>
  );
}

export default UseEffectDemo;
