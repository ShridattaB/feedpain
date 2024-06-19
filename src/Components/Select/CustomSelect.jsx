import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React from "react";
import "./customselect.css";

export default function CustomSelect({
  error,
  options = [],
  name,
  label,
  selected,
  handleChange = () => { },
  valueLabel = "id",
  titleLabel = [],
  width,
  margin,
  style,
}) {
  console.log(options)
  return (
    <FormControl className="custom-select">
      <InputLabel
        classes="label"
        id="demo-simple-select-helper-label"
        className="Mui-focused"
      >
        {label}
      </InputLabel>
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        value={selected}
        label={label}
        name={name}
        error={error}
        size="small"
        fullWidth
        style={{ margin: margin || "8px", width: width || "24ch", ...style }}
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>

        {options.map((option) => (
          <MenuItem value={option[valueLabel]}>
            {titleLabel
              .map((col) => option[col])
              .toString()
              .replaceAll(",", " ")}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>{error}</FormHelperText>
    </FormControl>
  );
}
