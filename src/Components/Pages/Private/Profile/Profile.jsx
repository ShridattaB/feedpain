import React, { useEffect, useState } from "react";
import "./profile.css";
import { Card, Grid, CardContent, Box, Typography } from "@mui/material";
import UserProfileHeader from "../../../Layouts/profile/UserProfileHeader";
import CustomDialog from "../../../Diloag/CustomDialog";
import { getUserProfile } from "./apiCall";
import { getUserData } from "../../../../Utils";
import { styled } from "@mui/material/styles";
import CustomForm from "../../../Form/CustomForm/CustomForm";
import {
  getCountryList,
  getStateList,
  getCityList,
} from "./../../Landing/apiCall";

const Profile = () => {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState({});
  const [country, setCountry] = useState([]);
  const [stateList, setStateList] = useState([]);

  useEffect(() => {
    const { sub } = getUserData();
    getUserProfile(sub).then((res) => {
      if (res) {
        setUser(res);
        getCountryList().then((response) => {
          if (response?.status === "Success") {
            setCountry(response.data);
            if (res.state) {
              const id = response.data?.find((x) => x.name === res.country).id;
              getStateList(id).then((response) => {
                if (response?.status === "Success") setStateList(response.data);
              });
            }
          }
        });
      }
    });
  }, []);
  const renderList = (arr) => {
    if (arr) {
      return Object.keys(arr).map((item, index) => {
        if (["id", "profileUrl", "firstName", "lastName"].includes(item))
          return;
        return (
          <Grid item xs={12} lg={6} md={6}>
            <Box
              key={index}
              sx={{
                display: "flex",
                "&:not(:last-of-type)": { mb: 4 },
                "& svg": { color: "text.secondary" },
                marginBlock: "20px",
                paddingLeft: "20px",
              }}
            >
              <Box
                sx={{
                  columnGap: 2,
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 600,
                    color: "text.secondary",
                    textTransform: "capitalize",
                  }}
                >
                  {`${item}:`}
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  {arr[item]}
                </Typography>
              </Box>
            </Box>
          </Grid>
        );
      });
    } else {
      return null;
    }
  };

  const MyCard = styled(Card)(({ theme }) => ({
    [theme.breakpoints.up("sm")]: {
      height: "inherit",
    },
  }));
  const handleChange = (id) => {
    getStateList(id).then((response) => {
      if (response?.status === "Success") setStateList(response.data);
    });
  };
  return (
    <Grid container spacing={2} className="profile">
      <Grid item xs={12} className="profile-Header">
        <UserProfileHeader setShow={setShow} user={user} />
      </Grid>
      <Grid
        item
        xs={12}
        className="profile-data"
        height={"calc(100vh - 508px);"}
      >
        <MyCard>
          <CardContent>
            <Grid container width={"100%"} height={"100%"}>
              {renderList(user)}
            </Grid>
          </CardContent>
        </MyCard>
      </Grid>
      {country.length && (
        <CustomDialog
          show={show}
          setShow={setShow}
          dialogTitle="Edit Profile"
          dialogContentComponent={
            <CustomForm
              formField={[
                { name: "profileUrl", type: "image", value: user.profileUrl },
                {
                  name: "firstName",
                  type: "text",
                  value: user.firstName,
                  disabled: true,
                },
                {
                  name: "lastName",
                  type: "text",
                  value: user.lastName,
                  disabled: true,
                },
                {
                  name: "course",
                  type: "select",
                  valueLabel: "id",
                  titleLabel: [],
                  options: [],
                  label: "course",
                  selected: user.course,
                },
                {
                  name: "country",
                  type: "select",
                  valueLabel: "id",
                  titleLabel: [],
                  options: country,
                  label: "country",
                  value: user.country,
                  handleChange: handleChange,
                },
                {
                  name: "state",
                  type: "select",
                  value: user.state,
                  valueLabel: "id",
                  titleLabel: [],
                  options: stateList,
                  label: "state",
                  handleChange: handleChange,
                },
                { name: "city", type: "select", value: user.city },
                {
                  name: "email",
                  type: "text",
                  value: user.email,
                  disabled: true,
                },
                { name: "mobileNo", type: "text", value: user.mobileNo },
              ]}
              onSubmit={() => {}}
              submitLabel="Edit"
            />
          }
        />
      )}
    </Grid>
  );
};

export default Profile;
