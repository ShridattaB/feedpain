import MoreVertIcon from '@mui/icons-material/MoreVert';
import {
  Avatar,
  AvatarGroup,
  List,
  ListItemButton,
  ListItemText,
  Popover,
  Tooltip,
  Typography,
  styled
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { formateDate } from '../../../../../Utils';
import { useAuth } from "../../../../../hooks/useAuth";
import PageHeader from "../../../../Layouts/page-header";
import { changeRoleAPI, getListOfUsers } from "../../apiCall";
import { getUserRole } from '../api';
import Table from "./../../../../Table/Table";
export default function UserList() {
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([])
  const [show, setShow] = React.useState(false);
  const [selectedUSer, setSelectedUSer] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();
  const { user } = useAuth();
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const TypographyStyled = styled(Typography)(({ theme }) => ({
    color: "#026584",
  }));
  useEffect(() => {
    getUserRole().then(res => { setRoles(res.data) })
    getListOfUsers().then((res) => {
      setUsers(res);
    });
  }, []);

  const handleClose = (e) => {
    setAnchorEl(null);
  };
  const changeRole = (e) => {
    e.preventDefault()
    changeRoleAPI({ userId: selectedUSer.id, role: selectedUSer.roleBean.id === 1 ? 2 : 1 }).then(() => {
      getListOfUsers().then((res) => {
        setUsers(res);
      });
    })
    setShow(false)
    handleClose()

  }
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
                    <Avatar key={value} src={process.env.REACT_APP_BACKEND_URL + value} />
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
            format: (value) => `${value.name} (${value.year})`,
          },
          { id: "createdAt", label: "Joined on", format: value => formateDate(value) },
          {
            id: "view",
            label: "Action",
            format: (value) => (<>
              <MoreVertIcon
                aria-describedby={id}
                sx={{ color: "#298dad", cursor: "pointer" }}
                onClick={(event) => {
                  setAnchorEl(event.currentTarget);
                  setSelectedUSer(value)
                }}
              /><Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
              >
                <List>
                  <ListItemButton onClick={(e) => {
                    navigate("/" + user.role.toLowerCase() + "/profile", {
                      state: { user: value, isProps: true },
                    });
                  }}>
                    <ListItemText primary="View" />
                  </ListItemButton>
                  <ListItemButton onClick={(e) => {
                    e.preventDefault()
                    changeRole(e)
                  }}>
                    <ListItemText primary={selectedUSer?.roleBean?.id === 1 ? "Change Role As Admin" : "Change Role As User"} />
                  </ListItemButton>
                  <ListItemButton onClick={(e) => {
                  }}>
                    <ListItemText primary="Block User" />
                  </ListItemButton>
                </List>
              </Popover></>
            ),
          },
        ]}
      />
      {/* <CustomDialog
        dialogTitle="Change Role"
        show={show}
        setShow={setShow}
        handelClose={(e) => {
          setSelectedUSer(null)
          handleClose()
        }}
        dialogContentComponent={<div style={{ margin: "10px" }}>
          <Select fullWidth defaultValue={selectedUSer?.roleBean?.id}>
            <MenuItem id="user" value="1">User</MenuItem>
            <MenuItem id="admin" value="2">Admin</MenuItem>
          </Select>
        </div>}
        dialogActionsComponent={<CustomButton label={"Change"} onClick={changeRole} />}
      /> */}


    </>
  );
}
