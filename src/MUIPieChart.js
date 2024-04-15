import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { useDrawingArea } from "@mui/x-charts/hooks";
import { styled } from "@mui/material/styles";

const data = [
  { value: 10 },
  { value: 2 },
];

const StyledText = styled("text")(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: "middle",
  dominantBaseline: "central",
  fontSize: 20,
}));

function PieCenterLabel({ children }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}

const MUIPieChart = () => {
  return (
    <PieChart
      colors={['#f3b15e', "#ecf6fd"]}
      series={[
        {
          data,
          innerRadius: 65,
          paddingAngle: 4,
          cornerRadius: 5,
          highlightScope: { faded: "global", highlighted: "item" },
          faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
        },
      ]}
      height={200}
    >
      <PieCenterLabel>{data[0].value}%</PieCenterLabel>
    </PieChart>
  );
};

export default MUIPieChart;
