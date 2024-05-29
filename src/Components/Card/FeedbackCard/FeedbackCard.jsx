import { Typography } from "@mui/material";
import React from "react";
import Avatar from "../../Avatar/Avatar.jsx";
import CustomCard from "./../Card.jsx";

export default function FeedbackCard({
  className,
  style,
  userName,
  description,
  profileImg,
}) {
  return (
    <CustomCard className={`${className} feedback-card`} style={style}>
      <div className="header">
        <Avatar className="feedback-avatar" src={profileImg} />
        <Typography variant="h6" color={"black"}>
          {userName}
        </Typography>
      </div>
      <Typography variant="h7" className="feedback-description">
        {description}
      </Typography>
    </CustomCard>
  );
}
