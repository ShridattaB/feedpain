import VisibilityIcon from "@mui/icons-material/Visibility";
import { useEffect, useState } from "react";
import "./feedback.css";
// ** MUI Imports
import Typography from "@mui/material/Typography";

import PageHeader from "./../../../Layouts/page-header/index";

import Table from "./../../../Table/Table";

import { Avatar, AvatarGroup, Button, Tooltip, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { isEmpty, statusColor } from "../../../../Utils";
import CustomChip from "../../../CustomChip/CustomChip";
import CustomDialog from "../../../Diloag/CustomDialog";
import CustomForm from "../../../Form/CustomForm/CustomForm";
import { createFeedback, getFeedback } from "../apiCall";
import validation from "../validation";
const TypographyStyled = styled(Typography)(({ theme }) => ({
  color: "#026584",
}));

export default function Feedback() {
  const [error, setError] = useState({});
  const [show, setShow] = useState(false);
  const [feedbackList, setFeedbackList] = useState([]);
  const navigate = useNavigate();

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
      createFeedback(data).then(() =>
        getFeedback().then((res) => {
          setFeedbackList(res);
        })
      );
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
            label: "Feedback Status",
            align: "center",
            format: (value) => (
              <CustomChip color={statusColor[value[0]?.status?.id || 0]}>
                {value[0]?.status?.status || "New"}
              </CustomChip>
            ),
          },
          {
            id: "view",
            label: "View Feedback",
            format: (value) => (
              <VisibilityIcon
                sx={{ color: "#298dad", cursor: "pointer" }}
                onClick={(e) => {
                  navigate("/user/feedback/view", {
                    state: { isFeedback: true, data: value },
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
