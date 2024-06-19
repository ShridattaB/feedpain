import React, { useEffect, useState } from "react";
import "./complaint.css";
// ** MUI Imports
import VisibilityIcon from "@mui/icons-material/Visibility";
import Typography from "@mui/material/Typography";

import PageHeader from "./../../../Layouts/page-header/index";

import Table from "./../../../Table/Table";

import { Avatar, AvatarGroup, Tooltip, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { isEmpty, statusColor } from "../../../../Utils";
import CustomButton from "../../../CustomButton/CustomButton";
import CustomChip from "../../../CustomChip/CustomChip";
import CustomDialog from "../../../Diloag/CustomDialog";
import CustomForm from "../../../Form/CustomForm/CustomForm";
import { createComplaint, getComplaint } from "../apiCall";
import validation from "../validation";
const TypographyStyled = styled(Typography)(({ theme }) => ({
  color: "#026584",
}));

export default function Complaint() {
  const [show, setShow] = useState(false);
  const [complaintList, setComplaintList] = useState([]);
  const navigate = useNavigate();
  const [error, setError] = useState({});
  useEffect(() => {
    getComplaint().then((res) => {
      setComplaintList(res);
    });
  }, []);
  const handleSubmit = (event) => {
    event.preventDefault();
    setError({});
    const data = new FormData(event.currentTarget);
    const err = validation(data);
    setError(err);
    if (isEmpty(err)) {
      createComplaint(data).then(() => {
        getComplaint().then((res) => {
          setComplaintList(res);
        });
      });
      setShow(false);
    }
  };

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
          <CustomButton size="sm" variant="contained" fullWidth onClick={setShow}>
            Create Complaint
          </CustomButton>
        }
      />
      <Table
        rows={complaintList}
        columns={[
          {
            id: "id",
            label: "id",
          },
          {
            id: "title",
            label: "title",
            // minWidth: 170,
            // align: "right",
            // format: (value) => value,
          },
          {
            id: "summary",
            label: "summary",
            minWidth: 170,
          },
          {
            id: "attachment",
            label: "attachment",
            align: "center",
            format: (value) =>
              value ? (
                <AvatarGroup
                  max={4}
                  htmlFor={`feedback_att-file`}
                  component="label"
                  style={{ cursor: "pointer" }}
                  sx={{
                    "& .MuiAvatar-root": {
                      height: "35px",
                      width: "35px",
                      boxShadow: `0px 2px 10px 0px #026584`,
                    },
                  }}
                >
                  {typeof JSON.parse(value) === "object" &&
                    JSON.parse(value)?.map((item, index) => (
                      <Tooltip key={index} title={item.index}>
                        <Avatar
                          key={index}
                          alt={item.index}
                          src={process.env.REACT_APP_BACKEND_URL + item}
                        />
                      </Tooltip>
                    ))}
                </AvatarGroup>
              ) : (
                <></>
              ),
          },
          {
            id: "complaintStatuses",
            label: "Complaint Status",
            align: "center",
            format: (value) => (
              <CustomChip color={statusColor[value[0]?.status?.id || 1]}>
                {value[0]?.status?.status || "New"}
              </CustomChip>
            ),
          },
          {
            id: "view",
            label: "View complaint",
            format: (value) => (
              <VisibilityIcon
                sx={{ color: "#298dad", cursor: "pointer" }}
                onClick={(e) => {
                  navigate("/user/complaint/view", {
                    state: { isComplaint: true, data: value },
                  });
                }}
              />
            ),
          },
        ]}
      />
      <CustomDialog
        setShow={setShow}
        show={show}
        dialogTitle={"Create Complaint"}
        dialogContentComponent={
          <CustomForm
            formField={[
              { name: "title", type: "text", value: "" },
              { name: "summary", type: "text", value: "", multiline: true },
              {
                name: "attachment",
                type: "image",
                value: "",
                placeHolder: "Supporting Images",
                multiple: "multiple",
              },
            ]}
            submitLabel="Create"
            handleSubmit={handleSubmit}
          />
        }
      />
    </>
  );
}
