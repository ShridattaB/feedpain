import Container from "@mui/material/Container";
import React from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import Card from "../Card/Card";
import Loader from "../Pages/Loader/Loader";
import Header from "./Header/Header";
import "./layout.css";
export default function FeedPainTheme({ isPublic }) {
  const { loading } = useAuth();
  return (
    <div className="theme">
      <Header />
      <Container maxWidth="lg" className="theme-section">
        <Card
          className={`${isPublic
            ? "theme-section-card theme-section-card-public"
            : "theme-section-card"
            }`}
        >
          {loading ? <Loader /> : <Outlet />}
        </Card>
      </Container>
    </div>
  );
}
