// ** MUI Imports
import MuiTimeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import { Card, CardContent } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { statusColor } from "../../Utils";

// Styled Timeline component
const Timeline = styled(MuiTimeline)({
  paddingLeft: 0,
  paddingRight: 0,
  "& .MuiTimelineItem-root": {
    width: "100%",
    "&:before": {
      display: "none",
    },
  },
});

const TimelineLeft = ({ data = [] }) => {
  return (
    <Timeline>
      {data.map(({ feedbackStatuses, title, summary, attachment }, index) => (
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color={statusColor[index + 1]} />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ "& svg": { verticalAlign: "bottom", mx: 4 } }}>
            <Box
              sx={{
                mb: 2,
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography
                variant="body2"
                sx={{ mr: 2, fontWeight: 600, color: "text.primary" }}
              >
                {title}
                {/* {console.log(feedbackStatuses[0])} */}
              </Typography>
              <Typography variant="caption"> {}//Wednesday</Typography>
            </Box>
            <Typography variant="body2" sx={{ color: "text.primary" }}>
              <span> {summary}</span>
              {/* <span>User Na me</span> */}
            </Typography>
            <Typography variant="caption">
              {/* {feedbackStatuses[0].assignedAt} */}
            </Typography>
            <Box sx={{ mt: 2, display: "flex", alignItems: "center" }}>
              {JSON.parse(attachment)?.map((img) => (
                <Card style={{ cursor: "pointer", margin: "4px" }}>
                  <CardContent>
                    <img
                      width={140}
                      height={120}
                      alt="invoice.pdf"
                      src={"http://localhost:8083" + img}
                    />
                  </CardContent>
                </Card>
              ))}
            </Box>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default TimelineLeft;
