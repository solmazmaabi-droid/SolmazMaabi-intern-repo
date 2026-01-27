import React from "react";
import Button from "./Button";

function Child({ onClick }) {
  console.log("👶 Child rendered");

  return (
    <Button onClick={onClick}>
      Child Button
    </Button>
  );
}

export default React.memo(Child);
