import { Typography, styled } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
import Timeline from "../../../../Components/Timeline/Timeline";
import PageHeader from "../../../Layouts/page-header";
const TypographyStyled = styled(Typography)(({ theme }) => ({
  color: "#026584",
}));

const ViewFeedbackComplaint = () => {
  const { state } = useLocation();
  const { isFeedback, data } = state;
  return (
    <>
      <PageHeader
        title={<TypographyStyled variant="h5">{data.title}</TypographyStyled>}
      />
      <Timeline data={[data]} />
    </>
  );
};

export default ViewFeedbackComplaint;
