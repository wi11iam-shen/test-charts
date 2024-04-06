import React from "react";
import {
  VictoryChart,
  VictoryVoronoiContainer,
  VictoryLine
} from "victory";

const AreaChart = ({ data }) => (
  <VictoryChart
    domainPadding={{ y: 5 }}
    containerComponent={
      <VictoryVoronoiContainer
        labels={({ datum }) => `${datum.x}, ${datum.y}`}
      />
    }
  >
    <VictoryLine y={(datum) => Math.sin(2 * Math.PI * datum.x)} />
  </VictoryChart>
);

export default AreaChart;
