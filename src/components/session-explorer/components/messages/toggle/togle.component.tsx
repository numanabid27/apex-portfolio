import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import React, { useState } from "react";
import { styles } from "../messages.style";

export const Toggle = () => {
  const [alignment, setAlignment] = useState<string | null>("left");

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    setAlignment(newAlignment);
  };
  return (
    <>
      <ToggleButtonGroup
        value={alignment}
        exclusive
        onChange={handleAlignment}
        aria-label="text alignment"
      >
        <ToggleButton
          value="left"
          aria-label="left aligned"
          sx={styles.toggleButton}
        >
          AND
        </ToggleButton>
        <ToggleButton
          value="center"
          aria-label="centered"
          sx={styles.toggleButton}
        >
          OR
        </ToggleButton>
      </ToggleButtonGroup>
    </>
  );
};
