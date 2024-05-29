import React from "react";

import { Card as CustomCard } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import "./card.css";
export default function Card({ children, className, style }) {
  console.log(style);
  return (
    <CustomCard className={`${className} custom-card`} style={style}>
      <CardContent className="custom-card-content">{children}</CardContent>
    </CustomCard>
  );
}
