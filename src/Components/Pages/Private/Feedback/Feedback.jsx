import { useEffect, useState } from "react";
import "./feedback.css";
// ** MUI Imports
import Typography from "@mui/material/Typography";

import PageHeader from "./../../../Layouts/page-header/index";

import Table from "./../../../Table/Table";

import { Avatar, AvatarGroup, Button, Tooltip, styled } from "@mui/material";
import CustomDialog from "../../../Diloag/CustomDialog";
import CustomForm from "../../../Form/CustomForm/CustomForm";
import validation from "../validation";
import { createFeedback, getFeedback } from "../apiCall";
import { isEmpty } from "../../../../Utils";
const TypographyStyled = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
}));

export default function Feedback() {
  const [error, setError] = useState({});
  const [show, setShow] = useState(false);
  const [feedbackList, setFeedbackList] = useState([]);

  useEffect(() => {
    getFeedback().then((res) => {
      setFeedbackList(res);
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setError({});
    const data = new FormData(event.currentTarget);
    const err = validation(data);
    setError(err);
    if (isEmpty(err)) {
      createFeedback(data);
      setShow(false);
    }
  };
  return (
    <>
      <PageHeader
        title={<TypographyStyled variant="h5">Your Feedback</TypographyStyled>}
        subtitle={
          <Typography variant="body2">
            We all need people who will give us feedback. That’s how we improve.
          </Typography>
        }
        action={
          <Button size="sm" variant="contained" fullWidth onClick={setShow}>
            Create Feedback
          </Button>
        }
      />
      <Table
        rows={feedbackList}
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
                      height: "60px",
                      width: "60px",
                      boxShadow: `${
                        error
                          ? "rgb(255 4 75 / 85%) 0px 2px 10px 0px"
                          : "0px 2px 10px 0px #0265848c"
                      }`,
                    },
                  }}
                >
                  {typeof JSON.parse(value) === "object" &&
                    JSON.parse(value)?.map((item, index) => (
                      <Tooltip key={index} title={item.index}>
                        <Avatar
                          key={index}
                          alt={item.index}
                          src={"http://localhost:8083" + item}
                        />
                      </Tooltip>
                    ))}
                </AvatarGroup>
              ) : (
                <></>
              ),
          },
          {
            id: "feedbackStatuses",
            label: "feedbackStatuses",
          },
        ]}
      />
      <CustomDialog
        setShow={setShow}
        show={show}
        dialogTitle={"Create Feedback"}
        dialogContentComponent={
          <CustomForm
            formField={[
              { name: "title", type: "text", value: "", error: error["title"] },
              {
                name: "summary",
                type: "text",
                value: "",
                multiline: true,
                error: error["summary"],
              },
              {
                name: "attachment",
                type: "image",
                value: "",
                placeHolder: "Supporting Images",
                multiple: "multiple",
                error: error["attachment"],
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
