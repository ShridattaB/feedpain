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

// ** Icon Imports
// import Icon from 'src/@core/components/icon'

// ** Custom Components Imports 
import { getChartData } from "../../../Utils";

const data = getChartData();

const CustomTooltip = (props) => {
  // ** Props
  const { active, payload } = props;
  if (active && payload) {
    return (
      <div className="recharts-custom-tooltip">
        <Typography
          sx={{ fontSize: "0.875rem" }}
        >PV:{`${payload[0].value}`}</Typography>
        <Typography
          sx={{ fontSize: "0.875rem" }}
        >UV:{`${payload[1].value}`}</Typography>
      </div>
    );
  }

  return null;
};

const RechartsLineChart = ({ direction }) => {
  return (
    <Box sx={{ height: 350 }}>
      <ResponsiveContainer>
        <LineChart
          height={350}
          data={data}
          style={{ direction }}
          margin={{ left: -20, right: 10 }}
        >
          <CartesianGrid />
          <XAxis dataKey="name" />
          <YAxis orientation={direction === "rtl" ? "right" : "left"} />
          <Tooltip content={CustomTooltip} />
          <Line dataKey="pv" stroke="#ff9f43" strokeWidth={3} />
          <Line dataKey="uv" stroke="#82ca9d" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default RechartsLineChart;
