import { Box, Grid } from "@mui/material";
import React from "react";
import InputText from "./../InputText/InputText";
import ImageInput from "../ImageInput/ImageInput";
import CustomButton from "../../CustomButton/CustomButton";
import CustomSelect from "../../../Components/Select/CustomSelect";
const CustomForm = ({ formField = [], submitLabel, handleSubmit }) => {
  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <Grid container>
        {formField.map(
          ({
            type,
            id,
            name,
            value,
            label,
            disabled,
            error,
            helperText,
            placeHolder,
            multiple,
            options,
            handleChange,
            multiline,
          }) => {
            switch (type) {
              case "image":
                return (
                  <Grid
                    sm={12}
                    md={12}
                    marginBottom={"20px"}
                    marginTop={"20px"}
                  >
                    <ImageInput
                      id={id || name}
                      name={id || name}
                      label={label || name}
                      error={!!error}
                      imageUrl={value || ""}
                      helperText={error || helperText || placeHolder}
                      multiple={multiple}
                    />
                  </Grid>
                );
              case "select":
                return (
                  <Grid sm={12} md={12}>
                    <CustomSelect
                      width={"46.5ch"}
                      nid={id || name}
                      name={id || name}
                      label={label || name}
                      error={!!error}
                      // helperText={error.state}
                      titleLabel={["name"]}
                      options={options}
                      selected={options?.find((x) => x.name === value)?.id}
                      handleChange={handleChange}
                      helperText={error}
                    />
                  </Grid>
                );
              default:
                return (
                  <Grid sm={12} md={12}>
                    <InputText
                      type={type}
                      defaultValue={value || ""}
                      id={id || name}
                      name={id || name}
                      label={label || name}
                      error={!!error}
                      disabled={disabled}
                      fullWidth
                      style={{ margin: "8px", width: "98%" }}
                      helperText={error}
                      multiline={multiline}
                      minRows={4}
                    />
                  </Grid>
                );
            }
          }
        )}
        <Grid
          justifyContent={"center"}
          alignItems={"center"}
          width={"100%"}
          display={"flex"}
          marginTop={"20px"}
        >
          <CustomButton label={submitLabel} type="submit" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default CustomForm;
