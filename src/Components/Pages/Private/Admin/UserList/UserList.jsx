import VisibilityIcon from "@mui/icons-material/Visibility";
import {
  Avatar,
  AvatarGroup,
  Tooltip,
  Typography,
  styled,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../../hooks/useAuth";
import PageHeader from "../../../../Layouts/page-header";
import { getListOfUsers } from "../../apiCall";
import Table from "./../../../../Table/Table";
export default function UserList() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const { user } = useAuth();
  const TypographyStyled = styled(Typography)(({ theme }) => ({
    color: "#026584",
  }));
  useEffect(() => {
    getListOfUsers().then((res) => {
      setUsers(res);
    });
  }, []);
  return (
    <>
      <PageHeader
        title={<TypographyStyled variant="h5">Users</TypographyStyled>}
        subtitle={
          <Typography variant="body2">
            Student and Faculty As User Listed here
          </Typography>
        }
      />
      <Table
        rows={users}
        columns={[
          { id: "id", label: "id" },
          {
            id: "profileUrl",
            label: "Profile",
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
                  <Tooltip title={value}>
                    <Avatar key={value} src={"http://localhost:8083" + value} />
                  </Tooltip>
                </AvatarGroup>
              ) : (
                <></>
              ),
          },
          {
            id: "email",
            label: "email",
            format: (value) => (
              <a
                href={`mailto:${value}`}
                style={{ textDecoration: "none", color: "#298dad" }}
              >
                {value}
              </a>
            ),
          },
          {
            id: "name",
            label: "Name",
            format: (value) => value.firstName + " " + value.lastName,
          },
          { id: "mobileNo", label: "mobile No" },
          {
            id: "address",
            label: "address",
            format: (value) =>
              `${value.cityBean.name}, ${value.stateBean.name}, ${value.countryBean.name}`,
          },
          {
            id: "role",
            label: "role",
            format: (value) =>
              value.authorities.reduce((pre, cur) => pre + cur.authority, ""),
          },
          {
            id: "courseBean",
            label: "course",
            format: (value) => value.name,
          },
          { id: "createdAt", label: "Joined on" },
          {
            id: "view",
            label: "View",
            format: (value) => (
              <VisibilityIcon
                sx={{ color: "#298dad", cursor: "pointer" }}
                onClick={(e) => {
                  navigate("/" + user.role.toLowerCase() + "/profile", {
                    state: { user: value, isProps: true },
                  });
                }}
              />
            ),
          },
        ]}
      />
    </>
  );
}
