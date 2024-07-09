// ** MUI Imports
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// ** Third Party Imports
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
 

const CustomTooltip = (props) => {
  // ** Props
  const { active, payload } = props;
  if (active && payload) {
    return (
      <div className="recharts-custom-tooltip">
        <Typography
          sx={{ fontSize: "0.875rem" }}
        >Complaint:{`${payload[0].value}`}</Typography>  
        <Typography
        sx={{ fontSize: "0.875rem" }}
      >Feedback:{`${payload[1].value}`}</Typography>
      </div>
    );
  }

  return null;
};
const formateDate=(data)=>{
  const formattedDate=[];
  
  data?.map(row=>{
    formattedDate.push({ Complaint:  row[1],
      Feedback: row[2],
      name:row[0]})
   })
  return formattedDate;

}

const RechartsLineChart = ({ direction,data }) => {
  return (
    <Box sx={{ height: 350 }}>
      <ResponsiveContainer>
        <LineChart
          height={350}
          data={formateDate(data)}
          style={{ direction }}
          margin={{ left: -20, right: 10 }}
        >
          <CartesianGrid />
          <XAxis dataKey="name" />
          <YAxis orientation={direction === "rtl" ? "right" : "left"} />
          <Tooltip content={CustomTooltip} />
          <Line dataKey="Complaint" stroke="#e11a1aad" strokeWidth={3} />
          <Line dataKey="Feedback" stroke="#82ca9d" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default RechartsLineChart;
