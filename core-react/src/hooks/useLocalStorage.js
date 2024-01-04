import { useEffect, useState } from "react";

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const item = localStorage.getItem(key);
    if (item) {
      return JSON.parse(item);
    } else {
      if (typeof initialValue === "function") {
        return initialValue();
      } else {
        if (initialValue === "") {
          return initialValue;
        } else {
          return JSON.parse(initialValue);
        }
      }
    }
  });

  useEffect(() => {
    if (value === undefined) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [value, key]);

  return { value, setValue };
}

export default useLocalStorage;
