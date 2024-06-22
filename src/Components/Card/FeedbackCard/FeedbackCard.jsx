import { styled } from "@mui/material";
import React from "react";

export default function FeedbackCard({
  data: { img, text }
}) {
  const FeedbackCardDiv = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down("md")]: {
      paddingTop: "20px",
      flexDirection: "column",
    },
  }))
  const FeedbackPCardDiv = styled('div')(({ theme }) => ({
    fontFamily: "cursive", paddingLeft: '20px',
    [theme.breakpoints.down("md")]: {
      padding: "0px"
    },
  }))
  return (
    <>
      <FeedbackCardDiv >
        <img src={img} style={{ borderRadius: "50%" }} />
        <FeedbackPCardDiv  >{text}</FeedbackPCardDiv>
      </FeedbackCardDiv>
    </>
  );
}
