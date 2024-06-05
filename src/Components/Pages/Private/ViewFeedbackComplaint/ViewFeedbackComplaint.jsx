import React from "react";
import { useLocation } from "react-router-dom";

const ViewFeedbackComplaint = () => {
  const { state } = useLocation();
  const { isFeedback, data } = state;
  return isFeedback ? (
    <>
      FeedBack <br />
      {JSON.stringify(data)}
    </>
  ) : (
    <>Complaint{JSON.stringify(data)}</>
  );
};

export default ViewFeedbackComplaint;
