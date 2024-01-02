import React, { useState } from "react";

function Child() {
  const [text, setText] = useState("");
  console.log("mounted");
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <p>My name is : {text}</p>
    </div>
  );
}

export default Child;
