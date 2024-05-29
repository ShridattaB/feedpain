import Container from "@mui/material/Container";
import React from "react";
import { Outlet } from "react-router-dom";
import Card from "../Card/Card";
import Header from "./Header/Header";
import "./layout.css";
export default function FeedPainTheme({ isPublic }) {
  console.log(isPublic);
  return (
    <div className="theme">
      <Header />
      <Container maxWidth="lg" className="theme-section">
        <Card
          className={`${
            isPublic
              ? "theme-section-card theme-section-card-public"
              : "theme-section-card"
          }`}
        >
          <Outlet />
        </Card>
      </Container>
    </div>
  );
}
