import { styled, useMediaQuery } from "@mui/material";
import React from "react";
import Carousel from "../../../Carousel/Carousel";

export default function PublicHome() {

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("lg"));

  const HomeDiv = styled('div')(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    marginTop: "10px",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },

  }))

  const PStyled = styled('p')(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      width: "auto !important",
      paddingInline: "14px"
    }
  }))
  return (
    <div className={`public-home ${isMobile ? "mobile" : ""}`}>
      <div className="top">
        <div className="intro">Feedback & Complaint</div>
        <HomeDiv>
          <Carousel carouselItems={[{
            img: "/images/avatars/1.png",
            text: `one`
          }, {
            img: "/images/avatars/1.png",
            text: `teow`
          }, {
            img: "/images/avatars/1.png",
            text: `Your voice matters! Your experiences and insights are invaluable to improving our educational environment and facilities.
          We encourage you to share your feedback and concerns regarding the education and facilities
          at our institution.` }]} />
          <PStyled>
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
          </PStyled>
        </HomeDiv>
      </div>
    </div >
  );
}
