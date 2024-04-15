import React from "react";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import CircularProgress from "@mui/joy/CircularProgress";
import { useCountUp } from "use-count-up";
import { CssVarsProvider } from "@mui/joy/styles";

const MUICircularProgress = ({ color }) => {
  const { value: value2 } = useCountUp({
    isCounting: true,
    duration: 2,
    start: 0,
    end: 65,
  });

  return (
    <Stack spacing={2}>
      <CssVarsProvider>
        <CircularProgress
          determinate
          value={value2}
          sx={{
            "--CircularProgress-size": "200px",
            "--CircularProgress-trackThickness": "30px",
            "--CircularProgress-progressColor": color,
            "--CircularProgress-progressThickness": "30px",
            "--CircularProgress-linecap": "flat",
          }}
        >
          <Typography sx={{ fontSize: "30px" }}>{value2}%</Typography>
        </CircularProgress>
      </CssVarsProvider>
    </Stack>
  );
};

export default MUICircularProgress;
