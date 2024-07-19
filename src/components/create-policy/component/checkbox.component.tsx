import { Checkbox, FormControlLabel } from "@mui/material";
import React, { useState } from "react";
import { styles } from "../../../common/styles/global.style";

export default function CheckBoxComponent({
  id,
  label,
  policy,
  enable,
  checkedValue,
  check
}: any) {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <>
      <FormControlLabel
        sx={{
          ...(!policy
            ? !isChecked
              ? styles.checkboxLabel
              : styles.checkboxLabel2
            : styles.policyChecked)
            
        }}
        checked={check}
        disabled={!enable}
        control={
          <Checkbox
            sx={!policy ? styles.checkBox : styles.checkBox2}
            name={label}
            defaultChecked={checkedValue}
          />
        }
        label={label}
      />
    </>
  );
}
