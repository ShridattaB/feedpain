import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getUserData } from "../../../../Utils";
import CustomDialog from "../../../Diloag/CustomDialog";
import CustomForm from "../../../Form/CustomForm/CustomForm";
import UserProfileHeader from "../../../Layouts/profile/UserProfileHeader";
import { getCountryList, getStateList } from "./../../Landing/apiCall";
import { getUserProfile } from "./apiCall";
import "./profile.css";

const Profile = () => {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState({});
  const [country, setCountry] = useState([]);
  const [stateList, setStateList] = useState([]);
  const { state } = useLocation();

  useEffect(() => {
    if (state) {
      setUser(state.user);
      return;
    }
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
  useEffect(() => {
    if (state) return;
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
  }, [state]);
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
                {item.includes("authorities") && (
                  <>
                    <Typography
                      sx={{
                        fontWeight: 600,
                        color: "text.secondary",
                        textTransform: "capitalize",
                      }}
                    >
                      Role
                    </Typography>
                    <Typography sx={{ color: "text.secondary" }}>
                      {arr[item][0].authority}
                    </Typography>
                  </>
                )}
                {item.includes("Bean") && (
                  <>
                    <Typography
                      sx={{
                        fontWeight: 600,
                        color: "text.secondary",
                        textTransform: "capitalize",
                      }}
                    >
                      {item.replace("Bean", "")}
                    </Typography>
                    <Typography sx={{ color: "text.secondary" }}>
                      {arr[item].name}
                    </Typography>
                  </>
                )}
                {!item.includes("Bean") && !item.includes("authorities") && (
                  <>
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
                  </>
                )}
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
        <UserProfileHeader
          setShow={setShow}
          user={user}
          isProps={state?.isProps}
        />
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
