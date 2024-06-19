import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getUserData } from "../../../../Utils";
import CustomDialog from "../../../Diloag/CustomDialog";
import CustomForm from "../../../Form/CustomForm/CustomForm";
import UserProfileHeader from "../../../Layouts/profile/UserProfileHeader";
import { getCityList, getCountryList, getStateList } from "./../../Landing/apiCall";
import { getUserProfile } from "./apiCall";
import "./profile.css";

const Profile = () => {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState({});
  const [country, setCountry] = useState([]);
  const [stateList, setStateList] = useState([]);
  const [cityList, setCityList] = useState([]);
  const { state } = useLocation();

  useEffect(() => {
    const { sub } = getUserData();
    getUserProfile(sub).then((res) => {
      setUser(res);
      getCountryList().then((response) => {
        if (response?.status === "Success")
          setCountry(response.data);
        if (res.state) {
          const id = response.data?.find((x) => x.name === res.country).id;
          getStateList(id).then((response) => {
            if (response?.status === "Success")
              setStateList(response.data)


            if (res.city) {
              const id = response.data?.find((x) => x.name === res.state).id;
              getCityList(id).then((response) => {
                if (response?.status === "Success")
                  setCityList(response.data)
              })
            }
          })
        }

      })
    })
  }, []);
  const renderList = (arr) => {
    if (arr) {
      return Object.keys(arr).map((item, index) => {
        if (["id", "profileUrl", "firstName", "lastName"].includes(item))
          return;
        return (
          <Grid item xs={12} lg={6} md={6} key={index}>
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


  const handleCountryChange = (e) => {
    e.preventDefault()
    console.log(e)
    getStateList(e.target.value).then((response) => {
      if (response?.status === "Success") setStateList(response.data);
    });
  };
  const handleStateChange = (e) => {
    e.preventDefault()

  };
  const handleCityChange = (e) => {
    e.preventDefault()
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
        <Grid container width={"100%"} height={"100%"}>
          {renderList(user)}
        </Grid>
      </Grid>
      {country.length !== 0 && (
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
                  gridCol: 6
                },
                {
                  name: "lastName",
                  type: "text",
                  value: user.lastName,
                  disabled: true, gridCol: 6
                },
                {
                  name: "course",
                  type: "select",
                  valueLabel: "id",
                  titleLabel: [],
                  options: [],
                  label: "course",
                  selected: user.course, gridCol: 6
                },
                {
                  name: "country",
                  type: "select",
                  valueLabel: "id",
                  titleLabel: [],
                  options: country,
                  label: "country",
                  value: user.country,
                  handleChange: handleCountryChange,
                  gridCol: 6
                },
                {
                  name: "state",
                  type: "select",
                  value: user.state,
                  valueLabel: "id",
                  titleLabel: [],
                  options: stateList,
                  label: "state",
                  handleChange: handleStateChange,
                  gridCol: 6
                },
                {
                  name: "city", type: "select",
                  valueLabel: "id",
                  titleLabel: [],
                  options: cityList,
                  value: user.city, gridCol: 6, handleChange: handleCityChange
                },
                {
                  name: "email",
                  type: "text",
                  value: user.email,
                  disabled: true, gridCol: 6
                },
                { name: "mobileNo", type: "text", value: user.mobileNo, gridCol: 6 },
              ]}
              onSubmit={() => { }}
              submitLabel="Edit"
            />
          }
        />
      )}
    </Grid>
  );
};

export default Profile;
