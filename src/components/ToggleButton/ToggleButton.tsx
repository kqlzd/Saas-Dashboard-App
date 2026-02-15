import { IconButton } from "@chakra-ui/react";
import { Sun, Moon } from "lucide-react";
import { useState } from "react";

export const ToggleButton = () => {
  const [dark, setDark] = useState<boolean>(false);

  return (
    <IconButton
      aria-label="Toggle dark mode"
      onClick={() => setDark(!dark)}
      variant="ghost"
    >
      {dark ? <Sun size={20} /> : <Moon size={20} />}
    </IconButton>
  );
};
