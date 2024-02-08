"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

function ToggleThemeButton() {
  const [toggleTheme, setToggleTheme] = useState("light");
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme(toggleTheme);
  }, [toggleTheme, setTheme]);

  return (
    <Button
      className="capitalize"
      onClick={() => {
        return setToggleTheme((prev) => (prev === "light" ? "dark" : "light"));
      }}
    >
      {toggleTheme}
    </Button>
  );
}

export default ToggleThemeButton;
