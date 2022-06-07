import React from "react";

import { useNavigate } from "react-router-dom";
import Fade from "@mui/material/Fade";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";

import CustomTimeline from "./CustomTimeline";

export default function About() {
  const navigate = useNavigate();

  return (
    <Fade in={true}>
      <Box>
        <Button variant="text" color="primary" onClick={() => navigate("/")}>
          <ArrowBackIosNewOutlinedIcon />
          <Typography sx={{ pl: 1 }}>Back</Typography>
        </Button>

        <Box sx={{ pt: 1 }}></Box>

        <CustomTimeline />
      </Box>
    </Fade>
  );
}
