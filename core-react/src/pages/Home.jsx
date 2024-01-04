import { useEffect, useRef } from "react";

function Home() {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
    console.log(inputRef.current);
  }, []);
  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
}

export default Home;
