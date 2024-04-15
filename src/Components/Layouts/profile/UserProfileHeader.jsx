import React from "react";
import {
  Typography,
  Box,
  Card,
  Button,
  CardContent,
  CardMedia,
  styled,
} from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
export default function UserProfileHeader({ setShow }) {
  const data = {
    fullName: "John Doe",
    location: "Vatican City",
    joiningDate: "April 2021",
    designationIcon: "bx:pen",
    designation: "UX Designer",
    profileImg: "./images/avatars/1.png",
    coverImg: "./images/banners/banner-19.jpg",
  };
  const ProfilePicture = styled("img")(({ theme }) => ({
    width: 120,
    height: 120,
    borderRadius: theme.shape.borderRadius,
    border: `5px solid ${theme.palette.common.white}`,
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(4),
    },
  }));
  return (
    <Card>
      <CardMedia
        component="img"
        alt="profile-header"
        image={data.coverImg}
        sx={{
          height: { xs: 150, md: 250 },
        }}
      />
      <CardContent
        sx={{
          pt: 0,
          mt: -8,
          display: "flex",
          alignItems: "flex-end",
          flexWrap: { xs: "wrap", md: "nowrap" },
          justifyContent: { xs: "center", md: "flex-start" },
        }}
      >
        <ProfilePicture src={data.profileImg} alt="profile-picture" />
        <Box
          sx={{
            width: "100%",
            display: "flex",
            ml: { xs: 0, md: 6 },
            alignItems: "flex-end",
            flexWrap: ["wrap", "nowrap"],
            justifyContent: ["center", "space-between"],
          }}
        >
          <Box
            sx={{
              mb: [6, 0],
              display: "flex",
              flexDirection: "column",
              alignItems: ["center", "flex-start"],
            }}
          >
            <Typography variant="h5" sx={{ mb: 4, fontSize: "1.375rem" }}>
              {data.fullName}
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: ["center", "flex-start"],
              }}
            >
              <Box
                sx={{
                  mr: 4,
                  display: "flex",
                  alignItems: "center",
                  "& svg": { mr: 1, color: "text.secondary" },
                }}
              >
                {/* <Icon icon={designationIcon} /> */}
                <Typography sx={{ color: "text.secondary", fontWeight: 600 }}>
                  {data.designation}
                </Typography>
              </Box>
              <Box
                sx={{
                  mr: 4,
                  display: "flex",
                  alignItems: "center",
                  "& svg": { mr: 1, color: "text.secondary" },
                }}
              >
                {/* <Icon icon="bx:map" /> */}
                <Typography sx={{ color: "text.secondary", fontWeight: 600 }}>
                  {data.location}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  "& svg": { mr: 1, color: "text.secondary" },
                }}
              >
                {/* <Icon icon="bx:calendar-alt" /> */}
                <Typography sx={{ color: "text.secondary", fontWeight: 600 }}>
                  Joined {data.joiningDate}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Button
            onClick={(e) => setShow(true)}
            variant="contained"
            startIcon={<CreateIcon />}
          >
            Edit Profile
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
