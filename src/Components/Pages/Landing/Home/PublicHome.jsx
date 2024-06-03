import { useMediaQuery } from "@mui/material";
import React from "react";
import FeedbackCard from "../../../Card/FeedbackCard/FeedbackCard";

export default function PublicHome() {
  const carouselItem = [
    {
      src: "https://th.bing.com/th/id/OIP.2MIllDCwnfelADd0aOIqNwHaEK?rs=1&pid=ImgDetMain",
      legend: "Feedback",
    },
  ];
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("lg"));
  const feedBackUser = [
    {
      userName: "Nikunj Patel",
      description: `Your voice matters! Your experiences and
  insights are invaluable to improving our educational environment and
  facilities. We encourage you to share your feedback and concerns`,
      profileImg: "",
    },
    {
      userName: "Shree Patel",
      description: ` share your feedback and concerns Your voice matters! Your experiences and
      insights are invaluable to improving our educational environment and
      facilities. We encourage you to`,
      profileImg: "",
    },
    {
      userName: "Nikunj Patel",
      description: `Your voice matters! Your experiences and
  insights are invaluable to improving improving our educational environment and our educational environment and
  facilities. We encourage you to share your feedback and concerns`,
      profileImg: "",
    },
    {
      userName: "Bhavik Patel",
      description: ` share your feedback and concerns Your voice matters! Your experiences and
      insights are invaluable to improving our educational environment and
      facilities. We encourage you to improving our educational environment and`,
      profileImg: "",
    },
  ];
  return (
    <div className={`public-home ${isMobile ? "mobile" : ""}`}>
      <div className="top">
        <div className="intro">Feedback & Complaint</div>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Your voice matters! Your experiences and
          insights are invaluable to improving our educational environment and
          facilities. We encourage you to share your feedback and concerns
          regarding the education and facilities at our institution.
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Whether it's about the quality of
          teaching, the condition of classrooms, access to resources, or any
          other aspect of your academic experience, your feedback can drive
          positive change. By speaking up, you help us understand what's working
          and what needs improvement, ensuring a better learning experience for
          everyone.
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Remember, constructive feedback and
          complaints are essential tools for progress. Let's work together to
          create an environment where every student can thrive. Your input is
          the first step towards making a real difference.
        </p>
      </div>

      <div className="bottom">
        {!isMobile &&
          feedBackUser.map((fu, index) => (
            <FeedbackCard
              style={{ animationDelay: `${index * 15}s` }}
              {...fu}
            />
          ))}
      </div>
    </div>
  );
}
