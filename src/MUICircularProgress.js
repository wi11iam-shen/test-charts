import React from "react";
import { Stack, Typography, CircularProgress } from "@mui/joy";
import { useCountUp } from "use-count-up";
import { CssVarsProvider } from "@mui/joy/styles";

const MUICircularProgress = ({ color, percentage }) => {
  const { value: progressValue } = useCountUp({
    isCounting: true,
    duration: 2,
    start: 0,
    end: percentage,
  });

  return (
    <Stack spacing={2}>
      <CssVarsProvider>
        <CircularProgress
          determinate
          value={progressValue}
          sx={{
            boxShadow:
              "inset 5px 21px 5px 11px rgba(0, 0, 0, 0.5), 0px 4px 5px 0px rgba(0, 0, 0, 0.5)",
            "--CircularProgress-size": "200px",
            "--CircularProgress-trackThickness": "30px",
            "--CircularProgress-progressColor": color,
            "--CircularProgress-progressThickness": "30px",
            "--CircularProgress-linecap": "flat",
          }}
        >
          <Typography sx={{ fontSize: "30px" }}>{progressValue}%</Typography>
        </CircularProgress>
      </CssVarsProvider>
    </Stack>
  );
};

export default MUICircularProgress;
