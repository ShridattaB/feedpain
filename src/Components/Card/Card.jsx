import React from "react";

import { Card as CustomCard } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import "./card.css"
export default function Card({children,className}) {
  return (
    <CustomCard className={`${className} custom-card`}>
      <CardContent>
        {children}
      </CardContent>
    </CustomCard>
  );
}
