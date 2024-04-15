import React, { useState } from "react";
import './profile.css'
import { Card, Grid, CardContent, Box, Typography } from "@mui/material";
import UserProfileHeader from "../../../Layouts/profile/UserProfileHeader";
import CustomDialog from "../../../Diloag/CustomDialog";
const Profile = () => {
  const [show,setShow]=useState(false)
  const profile = {
    about: [
      { property: "Full Name", value: "John Doe", icon: "bx:user" },
      { property: "Status", value: "active", icon: "bx:check" },
      { property: "Role", value: "Developer", icon: "bx:star" },
      { property: "Country", value: "USA", icon: "bx:flag" },
      { property: "Language", value: "English", icon: "bx:detail" },
    ],
    contacts: [
      { property: "Contact", value: "(123) 456-7890", icon: "bx:phone" },
      { property: "Skype", value: "john.doe", icon: "bx:message" },
      { property: "Email", value: "john.doe@example.com", icon: "bx:envelope" },
    ],
  };
  const renderList = (arr) => {
    if (arr && arr.length) {
      return arr.map((item, index) => {
        return (
          <Box
            key={index}
            sx={{
              display: "flex",
              "&:not(:last-of-type)": { mb: 4 },
              "& svg": { color: "text.secondary" },
            }}
          >
            <Box sx={{ display: "flex", mr: 2 }}>
              {/* <Icon icon={item.icon} /> */}
            </Box>

            <Box
              sx={{
                columnGap: 2,
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              <Typography sx={{ fontWeight: 600, color: "text.secondary" }}>
                {`${
                  item.property.charAt(0).toUpperCase() + item.property.slice(1)
                }:`}
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                {item.value.charAt(0).toUpperCase() + item.value.slice(1)}
              </Typography>
            </Box>
          </Box>
        );
      });
    } else {
      return null;
    }
  };
  return (
    <Grid container spacing={2} className="profile">
      <Grid item xs={12} className="profile-Header">
        <UserProfileHeader setShow={setShow}/>
      </Grid>
      <Grid item xs={12} className="profile-data"  >
        <Card style={{height:"inherit"}}>
          <CardContent>
            <Grid container>
              <Grid item xs={12} lg={6} md={6}>
                <Box sx={{ mb: 7 }}>
                  <Typography
                    variant="body2"
                    sx={{
                      mb: 4,
                      color: "text.disabled",
                      textTransform: "uppercase",
                    }}
                  >
                    About
                  </Typography>
                  {renderList(profile.about)}
                </Box>
              </Grid>
              <Grid item xs={12} lg={6} md={6}>
              <Box sx={{ mb: 7 }}>
                <Typography
                  variant="body2"
                  sx={{
                    mb: 4,
                    color: "text.disabled",
                    textTransform: "uppercase",
                  }}
                >
                  Contacts
                </Typography>
                {renderList(profile.contacts)}
              </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <CustomDialog show={show} setShow={setShow} DialogContentComponent={<h1>Data</h1>}/>
    </Grid>
  );
};

export default Profile;
