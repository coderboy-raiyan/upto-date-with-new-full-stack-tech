import { useRef } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

function Home() {
  const inputRef = useRef();
  const { value: first_name, setValue: setFirstName } = useLocalStorage(
    "first_name",
    ""
  );

  return (
    <div>
      <input
        type="text"
        value={first_name}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="First Name"
      />
    </div>
  );
}

export default Home;
