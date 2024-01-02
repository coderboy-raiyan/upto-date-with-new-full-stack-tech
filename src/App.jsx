import React, { useState } from "react";
import ClassChildComponent from "./components/ClassMethodLifecycle";

function App() {
  const [show, setShow] = useState(false);
  const ChildComponent = show ? <ClassChildComponent /> : null;

  return (
    <div>
      <button onClick={() => setShow((sh) => !sh)}>Show Child</button>
      {ChildComponent}
    </div>
  );
}

export default App;
