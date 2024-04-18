import React from "react";
import Container from "@mui/material/Container";
import Header from "./Header/Header";
import "./layout.css";
import Card from "../Card/Card";
import { Outlet } from "react-router-dom";
export default function FeedPainTheme({ children }) {
  return (
    <div className="theme">
      <Header />
      <Container maxWidth="lg" className="theme-section">
        <Card className={"theme-section-card"}>
          <Outlet />
        </Card>
      </Container>
    </div>
  );
}
