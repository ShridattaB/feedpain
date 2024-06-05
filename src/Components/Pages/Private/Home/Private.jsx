import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import FeedbackIcon from "@mui/icons-material/Feedback";
import { Box, CardHeader, Typography, styled } from "@mui/material";
import React from "react";
import RechartsLineChart from "./../../../../Components/Layouts/chart/RechartsLineChart";
import CustomChip from "./../../../chip/index";
export default function Private() {
  const TypographyStyled = styled(Typography)(({ theme }) => ({
    color: "#026584",
  }));
  return (
    <>
      <CardHeader
        title={<TypographyStyled variant="h5">{"Balance"}</TypographyStyled>}
        subheader="Commercial networks & enterprises"
        subheaderTypographyProps={{
          sx: { color: (theme) => `${theme.palette.text.disabled} !important` },
        }}
        sx={{
          paddingTop: "0",
          flexDirection: ["column", "row"],
          alignItems: ["flex-start", "center"],
          "& .MuiCardHeader-action": { mb: 0 },
          "& .MuiCardHeader-content": { mb: [2, 0] },
        }}
        action={
          <Box
            sx={{ display: "flex", alignItems: "center", paddingTop: "10px" }}
          >
            <CustomChip
              rounded
              skin="light"
              color="success"
              sx={{ fontWeight: 500, fontSize: "0.875rem", mr: "1rem" }}
              label={
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    "& svg": { mr: 1 },
                  }}
                >
                  <FeedbackIcon fontSize="1rem" />
                  <span>Feedback</span>
                </Box>
              }
            />
            <CustomChip
              rounded
              skin="light"
              color="error"
              sx={{ fontWeight: 500, fontSize: "0.875rem" }}
              label={
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    "& svg": { mr: 1 },
                  }}
                >
                  <ErrorOutlineIcon fontSize="1rem" />
                  <span>Complaint</span>
                </Box>
              }
            />
          </Box>
        }
      />
      <RechartsLineChart direction={"ltr"} />
    </>
  );
}
