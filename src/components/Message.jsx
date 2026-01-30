import React, { useState } from "react";

function Message() {
  const [clicked, setClicked] = useState(false);

  return (
    <div>
      <p>Hello, Focus Bear!</p>
      <button onClick={() => setClicked(true)}>Click me</button>
      {clicked && <span>Button clicked!</span>}
    </div>
  );
}

export default Message;
