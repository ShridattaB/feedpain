import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import "./customselect.css";
import React from "react";

export default function CustomSelect({
  error,
  options = [],
  name,
  label,
  selected,
  handleChange = () => {},
  valueLabel = "id",
  titleLabel = [],
}) { 
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
        style={{ margin: "8px", width: "24ch" }}
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
