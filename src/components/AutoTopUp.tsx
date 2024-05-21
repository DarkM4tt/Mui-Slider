import React, { useState } from "react";
import {
  Box,
  Button,
  Slider,
  Switch,
  SwitchProps,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const marks = [
  { value: 5, label: "$5" },
  { value: 10, label: "$10" },
  { value: 15, label: "$15" },
  { value: 20, label: "$20" },
  { value: 25, label: "$25" },
  { value: 30, label: "$30" },
];

const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 30,
  height: 17,
  padding: 0,
  marginLeft: 15,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#25AE9D" : "#25AE9D",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 11,
    height: 13,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#7B7B7B" : "#7B7B7B",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

const AutoTopUp: React.FC = () => {
  const [isEnabled, setIsEnabled] = useState(true);
  const [value, setValue] = useState<number>(10);

  const handleToggle = () => setIsEnabled(!isEnabled);

  const handleSliderChange = (event: Event, newValue: number | number[]) =>
    setValue(newValue as number);

  const handleConfirm = () => {
    if (value === 5) {
      console.log(`Selected credits: 500`);
    } else if (value === 10) {
      console.log(`Selected credits: 1200`);
    } else if (value === 15) {
      console.log(`Selected credits: 100`);
    } else if (value === 20) {
      console.log(`Selected credits: 2500`);
    } else if (value === 25) {
      console.log(`Selected credits: 3900`);
    } else {
      console.log(`Selected credits: 5000`);
    }
  };

  return (
    <Box
      className={`auto-topup-container ${!isEnabled ? "disabled-state" : ""}`}
    >
      <Box className="header">
        <Typography variant="h6" fontWeight={"bold"}>
          Setup Auto Top-up
        </Typography>
        <IOSSwitch checked={isEnabled} onChange={handleToggle} />
      </Box>
      {isEnabled ? (
        <Box mt={2}>
          <Typography variant="subtitle2">
            Once the credit goes below a minimum threshold{" "}
            <strong className="strong">50</strong>, we will auto-purchase{" "}
            <strong className="strong">{value * 120}</strong> credits and add
            them to your account. <b className="link">Learn more</b>
          </Typography>
          <Box className="slider-container">
            <Slider
              value={value}
              onChange={handleSliderChange}
              step={null}
              marks={marks}
              min={5}
              max={30}
              valueLabelDisplay="off"
              classes={{
                markLabel: "slider-mark",
                thumb: "MuiSlider-thumb",
                track: "MuiSlider-track",
                rail: "MuiSlider-rail",
              }}
            />
          </Box>
          <Box
            display={"flex"}
            sx={{
              width: "100%",
              justifyContent: "space-between",
              marginBottom: "20px",
            }}
          >
            <Typography variant="caption" className="credits">
              500 credits
            </Typography>
            <Typography variant="caption" className="credits">
              1200 credits
            </Typography>
            <Typography variant="caption" className="credits">
              1700 credits
            </Typography>
            <Typography variant="caption" className="credits">
              2500 credits
            </Typography>
            <Typography variant="caption" className="credits">
              3900 credits
            </Typography>
            <Typography variant="caption" className="credits">
              5000 credits
            </Typography>
          </Box>
          <Button
            variant="contained"
            className="confirm-button"
            onClick={handleConfirm}
            sx={{
              textTransform: "none",
              backgroundColor: "#9747FF",
              "&:hover": {
                backgroundColor: "#9747FF",
              },
              borderRadius: "8px",
            }}
          >
            Confirm auto-purchase
          </Button>
        </Box>
      ) : (
        <Typography variant="body2" color="textSecondary">
          Once the credit goes below the threshold value, credits can be
          auto-purchased. Setup auto top-up to enjoy uninterrupted services. You
          can disable this anytime to stop auto top-up.
        </Typography>
      )}
    </Box>
  );
};

export default AutoTopUp;
