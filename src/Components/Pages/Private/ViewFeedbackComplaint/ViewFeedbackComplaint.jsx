import { Grid, Typography, styled } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
import Timeline from "../../../../Components/Timeline/Timeline";
import CustomButton from "../../../CustomButton/CustomButton";
import InputText from "../../../Form/InputText/InputText";
import PageHeader from "../../../Layouts/page-header";
import "./view.css";
const TypographyStyled = styled(Typography)(({ theme }) => ({
  color: "#026584",
}));

const ViewFeedbackComplaint = () => {
  const { state } = useLocation();
  const { data } = state;
  return (
    <>
      <PageHeader
        title={<TypographyStyled variant="h5">{data.title}</TypographyStyled>}
      />
      <Grid container>
        <Grid item sx={12} md={6}>
          <Timeline data={[data]} />
        </Grid>
        <Grid item md={6}>
          <div class="chat-container">
            <div class="chat-message">
              <div class="message-sender">John</div>
              <div class="message-timestamp">10:00 AM</div>
              <div class="message-content">
                <div class="message-bubble">
                  Hi there! How are you?
                </div>
              </div>
            </div>
            <div class="chat-message me">
              <div class="message-sender me">You</div>
              <div class="message-timestamp">10:05 AM</div>
              <div class="message-content">
                <div class="message-bubble me">
                  Hey John! I'm good, thanks. What about you?
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", width: "100%" }}>
            <InputText style={{ width: "100%", marginRight: "10px", marginTop: "20px" }} />
            <CustomButton label={"Send"} style={{ marginTop: "20px" }} />
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default ViewFeedbackComplaint;
