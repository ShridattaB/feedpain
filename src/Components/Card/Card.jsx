import React from "react";

import { Card as CustomCard } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import "./card.css";
export default function Card({ children, className, style }) {
  return (
    <CustomCard className={`${className} custom-card`} style={{...style,borderRadius:'28px'}}>
      <CardContent className={"custom-card-content"}>{children}</CardContent>
    </CustomCard>
  );
}
