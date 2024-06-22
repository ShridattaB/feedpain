import "./faq.css";
// ** MUI Imports
import FeedbackIcon from '@mui/icons-material/Feedback';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import RateReviewIcon from '@mui/icons-material/RateReview';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import TabContext from "@mui/lab/TabContext";
import MuiTabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
// ** Custom Components Imports
import { useState } from "react";
import CustomAvatar from "./../../Avatar/Avatar";

// Styled TabList component
const MuiBox = styled(Box)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

const TabList = styled(MuiTabList)(({ }) => ({
  minHeight: 40,
  marginTop: "54px",
  "& .MuiTabs-flexContainer": {
    flexDirection: "column",
  },
  "& .MuiTabs-indicator": {
    display: "none",
  },
  "& .MuiTab-root": {
    minHeight: 40,
    minWidth: 280,
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingTop: "0.625rem",
    borderRadius: "6px",
    "& svg": {
      marginBottom: 0,
      marginRight: "0.5rem",
    },
    "&.Mui-selected": {
      color: "#016485",
      backgroundColor: "#76c0d86b",
    },
  },
}));
const data = {
  faqData: {
    // payment
    payment: {
      id: "payment",
      title: "FeedPain",
      icon: <img src="./small-logo.png" style={{ color: "#016485", width: "24px", marginBottom: "0px", marginRight: '8px' }} />,
      subtitle: "Get help with FeedPain",
      qandA: [
        {
          id: "order-payment",
          question: "How do I get started with FeedPain as a new user?",
          answer:
            <><p>To get started, follow these steps:
              <ol>
                <li><b>Registration:</b>Visit the registration page and create a new account by providing the necessary information.</li>

                <li><b>Login:</b>Use your credentials to log in to the system.</li>
                <li><b>Navigation:</b> Once logged in, navigate through the dashboard to access different features.</li>,
              </ol>
            </p>
            </>
        },
        {
          id: "order",
          question: "Can I attach files to my feedback or complaints?",
          answer:
            "We accept Visa®, MasterCard®, American Express®, and PayPal®. Our servers encrypt all information submitted to them, so you can be confident that your credit card information will be kept safe and secure.",
        },
      ],
    },
    // cancellation and return
    cancellationReturn: {
      icon: <ReportProblemIcon style={{ color: "#016485", width: "24px" }} />,
      id: "cancellation-return",
      title: "complaint",
      subtitle: "Get help with complaint",
      qandA: [
        {
          id: "cancel-order",
          question: "How do I track the status of my complaint?",
          answer:
            <ol>
              <li><b>Login:</b>Log in to your account.</li>
              <li><b>Navigate to Complaints:</b>Go to the 'Complaints' section.</li>
              <li><b>View Status:</b>Check the status of your submitted complaints in the list provided.</li>
            </ol>
        },

      ],
    },
    // delivery
    delivery: {
      id: "feedback",
      title: "Feedback",
      icon: <FeedbackIcon style={{ color: "#016485", width: "24px" }} />,
      subtitle: "Get help with Feedback",
      qandA: [
        {
          id: "ship-order",
          question: "How do I submit feedback?",
          answer:
            <>
              <ol>
                <li><b>Login:</b>Log in to your account.</li>
                <li><b>Navigate to Feedback:</b>Go to the 'Feedback' section.</li>
                <li><b>Submit Feedback:</b>Fill in the feedback form, attach any necessary files, and submit.</li>
              </ol>
            </>
        },
      ],
    },
    askQuestion: {
      id: "ask",
      title: "Ask",
      icon: <RateReviewIcon style={{ color: "#016485", width: "24px" }} />,
      subtitle: "Ask What you have!",
      qandA: [
        {
          id: "ship-order",
          question: "How do I Can Ask What i have?",
          answer:
            <>
              <ol>
                <li><b>Mail:</b>feedpain@yopmail.com.</li>
                <li><b>Subject:</b>Subject ot question.</li>
                <li><b>Body:</b>ask what you have on mind reply will be responded within working days.</li>
              </ol>
            </>
        },
      ],
    },

  },
};
const FAQ = () => {
  const [activeTab, setActiveTab] = useState("payment");
  const handleChange = (e, tab) => setActiveTab(tab);
  const renderTabContent = () => {
    return Object.values(data.faqData).map((tab) => {
      return (
        <TabPanel
          key={tab.id}
          value={tab.id}
          style={{ marginTop: "48px" }}
          sx={{
            p: 0,
            border: 0,
            width: "100%",
            boxShadow: 0,
            backgroundColor: "transparent",
            mr: [0, 0, 2],
          }}
        >
          <Box key={tab.id}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <CustomAvatar
                skin="light"
                variant="rounded"
                sx={{ height: 42, width: 42 }}
                style={{ backgroundColor: "#76c0d86b" }}
              >
                {tab.icon}
              </CustomAvatar>
              <Box sx={{ ml: 4 }}>
                <Typography variant="h5">{tab.title}</Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  {tab.subtitle}
                </Typography>
              </Box>
            </Box>
            <Box sx={{ mt: 4 }}>
              {tab.qandA.map((item) => {
                return (
                  <Accordion key={item.id} className="tab-accordion">
                    <AccordionSummary expandIcon={<KeyboardArrowDownIcon />}>
                      <Typography sx={{ fontWeight: "500" }}>
                        {item.question}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography sx={{ color: "text.secondary" }}>
                        {item.answer}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                );
              })}
            </Box>
          </Box>
        </TabPanel>
      );
    });
  };

  const renderTabs = () => {
    if (data !== null) {
      return Object.values(data.faqData).map((tab) => {
        if (tab.qandA.length) {
          return (
            <Tab
              key={tab.id}
              value={tab.id}
              label={tab.title}
              icon={tab.icon}
            />
          );
        } else {
          return null;
        }
      });
    } else {
      return null;
    }
  };

  return (
    <MuiBox className="faq" style={{
      height: "calc(100vh - 116px)", marginInline: "34px", marginTop: "0px"
    }}>
      <TabContext value={activeTab}>
        <Box
          sx={{
            mr: [0, 0, 6],
            mb: [6, 6, 0],
            ml: [0, 0, 2],
            display: "flex",
            flexDirection: "column",
          }}
        >
          <TabList
            onChange={handleChange}
            style={{
              height: "100%",
            }}
          >
            {renderTabs()}
          </TabList>
          <Box
            sx={{
              mt: 9,
              "& img": { maxWidth: "100%" },
              display: { xs: "none", md: "block" },
            }}
          >
            <img
              width="200"
              alt="illustration"
              src={`/images/pages/sitting-girl-with-laptop-light.png`}
            />
          </Box>
        </Box>
        {renderTabContent()}
      </TabContext>
    </MuiBox>
  );
};

export default FAQ;
