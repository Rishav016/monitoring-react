import React from "react";
import { InputAdornment, TextField } from "@mui/material";

function InputIcon(props) {
  return (
    <TextField
      label={props.label}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">{props.icon}</InputAdornment>
        ),
      }}
      variant="outlined"
    />
  );
}

export default InputIcon;
