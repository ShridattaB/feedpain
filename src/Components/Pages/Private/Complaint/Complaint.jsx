import React, { useState } from "react";
import "./complaint.css";
// ** MUI Imports
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import PageHeader from "./../../../Layouts/page-header/index";

import Table from "./../../../Table/Table";

import { Button, styled } from "@mui/material";
import { Link } from "react-router-dom";
import CustomDialog from "../../../Diloag/CustomDialog";
const TypographyStyled = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
}));

export default function Complaint() {
  const [show,setShow]=useState(false)
  return (
    <>
      <PageHeader
        title={<TypographyStyled variant="h5">Your Complaint</TypographyStyled>}
        subtitle={
          <Typography variant="body2">
            We all need people who will give us feedback. That’s how we improve.
          </Typography>
        }
        action={
          <Button size="sm" variant="contained" fullWidth onClick={setShow}>
            Create Complaint
          </Button>
        }
      />
      <CustomDialog show={show} setShow={setShow}/>
      <Table />
    </>
  );
}
